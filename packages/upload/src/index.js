import React, { Component, Fragment } from 'react';
import { Upload, Icon, message} from 'antd';
import {
  urlMapToFileList,
  simplifyUrlMapToFileList,
  fileListTourlMap,
} from 'cattle-util';

const showMessage = (methodName, content, onClose) => {
  message[methodName](content, 1.5, onClose);
}

class UploadForm extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      const { fileTypeCode } = nextProps;
      let fileList = simplifyUrlMapToFileList(nextProps.value || [], fileTypeCode);
      const { filesList } = state;
      let uploadingFiles = [];
      if (filesList && filesList.length) {
        uploadingFiles = filesList.filter(ele => ele.status === 'uploading');
        fileList = [...uploadingFiles, ...fileList];
      }
      return {
        filesList: fileList,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      filesList: urlMapToFileList(props.value || []),
    };
  }

  onChange = value => {
    const { onChange, valueChange, fileLength } = this.props;
    let selfValue = fileListTourlMap(value);
    if (selfValue.length) {
      selfValue = fileLength * 1 === 1 ? selfValue[0] : selfValue; // 上传为一个数据的时候直接返回一个string, 不用返回数组
    } else {
      selfValue = null;
    }
    if (onChange) {
      onChange(selfValue);
    }

    if (valueChange) {
      valueChange(selfValue);
    }
  };

  // 判断上传文件数是否已经达到上限
  beyondFileLength = () => {
    const { fileLength } = this.props;
    const { filesList } = this.state;
    if (filesList.length >= fileLength) return true;
  };

  handleChange = data => {
    const { isSupportCover, fileLength, successDo, fail } = this.props;
    const { file } = data;
    let { fileList } = data;
    if (this.beyondFileLength()) {
      fileList = fileList.filter(ele => ele.uid !== file.uid);
    }
    if (isSupportCover) {
      // 支持覆盖，移除旧数据，
      fileList = fileList.slice(-fileLength);
    }

    if (file.status === 'done') {
      const { response } = file;
      if (response && response.success) {
        if (successDo) {
          successDo(response.result);
        }
      } else if (fail) {
        fail(response);
      }
    }
    if (file.status === 'error') {
      fileList.pop();
      showMessage('error', '文件上传失败');
    }

    if (!file.status) {
      fileList = fileList.filter(ele => ele.url);
    }
    this.setState({ filesList: fileList });
    this.onChange(fileList);
  };

  getFileTypeByName = name => {
    const index = name.lastIndexOf('.');
    return name.slice(index);
  };

  noMatchUpperOrLower = (matchArr, fileType) => {
    const lower = fileType.toLowerCase();
    const upper = fileType.toUpperCase();
    return matchArr.indexOf(lower) > -1 || matchArr.indexOf(upper) > -1;
  };

  getPolicyUpload = (file, queryParams) => () => {
    const { checkNameExp, expName, getPolicyUrl, dealResponseData, getPolicy, getSignedUrl } = this.props;
    let fileName = file.name;
    const me = this;
    if (checkNameExp && Object.prototype.toString.call(checkNameExp).slice(8, -1) === 'RegExp') {
      if (!checkNameExp.test(file.name) && expName) {
        fileName = `${expName}${file.name}`
      }
    }
    getPolicy({ fileName, ...queryParams }, getPolicyUrl).then(response => {
      if (!response) {
        this.uploadError(file, null, 'error');
        return;
      }
      // 获取后台签名上传oss
      const fd = new FormData();
      const { OSSAccessKeyId, host, policy, signature, startsWith, objectName } = dealResponseData(response);
      fd.append('OSSAccessKeyId', OSSAccessKeyId);
      fd.append('policy', policy);
      fd.append('signature', signature);
      fd.append('key', `${objectName}`);
      fd.append('success_action_status', 200);
      fd.append('file', file, objectName);
      const xhr = new XMLHttpRequest();
      xhr.open('post', host, true);
      xhr.upload.addEventListener(
        'progress',
        evt => {
          const { filesList } = me.state;
          const progressPercent = Math.round((evt.loaded * 100) / evt.total);
          const currentFile = filesList.filter(ele => ele.uid === file.uid);
          if (currentFile[0]) {
            currentFile[0].percent = progressPercent;
          }
          this.setState({ filesList });
        },
        false
      );
      xhr.addEventListener(
        'load',
        e => {
          if (e.target.status !== 200) {
            return;
          }
          if (e.target.status === 200) {
            const imgUrl = `${host}/${objectName}`;
            const { fileTypeCode } = me.props;
            if (fileTypeCode * 1 !== 4) {
              // 私有桶查看文件
              getSignedUrl({ url: imgUrl }).then(res => {
                me.uploadSuccess(file, dealResponseData(res));
              });
            } else {
              me.uploadSuccess(file, imgUrl);
            }
          }
        },
        false
      );

      xhr.addEventListener('error', e => {
        this.uploadError(file, null, 'error');
      });
      xhr.send(fd);
    });
  };

  getChangingData = (file, imgUrl, status) => {
    const { filesList } = this.state;
    const currentFile = filesList.filter(ele => ele.uid === file.uid);
    if (currentFile[0]) {
      currentFile[0].status = status;
      currentFile[0].url = imgUrl;
    }
    const data = {
      fileList: filesList,
      file: {
        status,
        response: {
          success: true,
          result: {
            url: imgUrl,
          },
        },
      },
    };
    return data;
  };

  uploadSuccess = (file, imgUrl) => {
    const mockSuccesData = this.getChangingData(file, imgUrl, 'done');
    this.handleChange(mockSuccesData);
  };

  uploadError = (file, imgUrl) => {
    const mockSuccesData = this.getChangingData(file, imgUrl, 'error');
    this.handleChange(mockSuccesData);
  };

  customRequest = data => {
    const { fileTypeCode, queryPolicyParams = {} } = this.props;
    const { file } = data;
    if (this.beyondFileLength()) return false;
    this.getPolicyUpload(file, { fileTypeCode, ...queryPolicyParams })();
  };

  beforeUpload = file => {
    const { fileSize = 2, accept } = this.props;
    if (this.beyondFileLength()) return false;
    const acceptTypes = (accept && accept.split(',')) || [];
    const acceptAll = !acceptTypes.filter(ele => ele).length;
    const fileType = this.getFileTypeByName(file.name);
    const canAccept = acceptAll || this.noMatchUpperOrLower(acceptTypes, fileType);

    if (!canAccept) {
      showMessage('warning', `上传的文件格式不正确`);
    }

    const isPass = file.size / 1024 / 1024 < fileSize * 1;
    if (!isPass && canAccept) {
      showMessage('warning', `文件上传不能超过${fileSize}MB`);
    }
    return isPass && canAccept;
  };

  del = data => {
    const { filesList } = this.state;
    const list = filesList.filter(ele => ele !== data);
    this.onChange(list);
  };

  setFirst = data => {
    const { filesList } = this.state;
    const list = filesList.filter(ele => ele !== data);
    list.unshift(data);
    this.onChange(list);
  };

  renderButton() {
    const { filesList } = this.state;
    const { children, fileLength } = this.props;
    const loading = filesList.filter(ele => ele.status === 'uploading').length;
    let renderDom = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    if (children) {
      renderDom = React.cloneElement(children, { loading: !!loading });
    }
    return filesList.length >= fileLength ? null : renderDom;
  }

  render() {
    const { filesList } = this.state;
    const {
      listType = 'picture-card',
      multiple,
      outDisplay,
      beforeUpload,
      accept = '*',
      disabled,
      actionTexts = [],
      showUploadList,
      customShow,
      getExtendHeaders,
    } = this.props;
    const { actionPath, data } = this.props;
    const [mianPicText, setMainPicText] = actionTexts;
    let extendProps = {};
    // 导入需求
    if (actionPath) {
      extendProps = { action: actionPath };
    } else {
      extendProps = { customRequest: this.customRequest };
    }
    return (
      <Fragment>
        <span className="upload_form" style={{ display: outDisplay || 'inline-block' }}>
          <Upload
            multiple={multiple}
            showUploadList={showUploadList}
            onRemove={() => !disabled}
            accept={accept}
            data={data}
            beforeUpload={beforeUpload || this.beforeUpload}
            headers={{ ...getExtendHeaders() }}
            listType={listType}
            fileList={filesList}
            onChange={this.handleChange}
            disabled={disabled}
            {...extendProps}
          >
            {this.renderButton()}
          </Upload>
        </span>
        {!showUploadList && customShow ? (
          <div className="ant-upload-list ant-upload-list-picture-card custom">
            {filesList.map((ele, i) =>
              ele.status === 'done' ? (
                <div key={-i} className="ant-upload-list-item ant-upload-list-item-done">
                  <div className="ant-upload-list-item-info">
                    <a
                      className="ant-upload-list-item-thumbnail"
                      href={ele.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={ele.url} alt={ele.name} />
                    </a>
                  </div>
                  <span className="ant-upload-list-item-actions">
                    <a href={ele.url} target="_blank" rel="noopener noreferrer" title="预览文件">
                      <Icon style={{ color: 'rgba(255, 255, 255, 0.85)' }} type="eye" />
                    </a>
                  </span>
                  <span
                    className="ant-upload-list-item-extend-actions"
                    style={{ fontSize: '12px', color: '#fff', zIndex: 10 }}
                  >
                    {i === 0 ? (
                      <span>{mianPicText || '主图'}</span>
                    ) : (
                      <span
                        onClick={() => {
                            this.setFirst(ele);
                          }}
                        className="pointer"
                      >
                        {setMainPicText || '设为主图'}
                      </span>
                      )}
                    <span
                      style={{ marginLeft: '8px' }}
                      onClick={() => {
                        this.del(ele);
                      }}
                      className="pointer"
                    >
                      删除
                    </span>
                  </span>
                </div>
              ) : null
            )}
          </div>
        ) : null}
      </Fragment>
    );
  }
}

UploadForm.defaultProps = {
  getPolicy: null,
  getSignedUrl: null,
  getExtendHeaders: () => {},
  listType: 'picture-card',
  fileType: 'img',
  type: '',
  fileSize: 999, // 文件大小，单位 M
  fileLength: 999, // 上传的文件数
  actionPath: null,
  dealResponseData: (response) => response.result,
  isSupportCover: false, // 是否支持覆盖操作,不需要手动删除文件，直接覆盖所有
  disabled: false,
  fileTypeCode: 4, // 目前 4为普通图片(上传即可查看), 1,2,3为加密图片
  queryPolicyParams: {},
  checkNameExp: '', // 校验name的正则
  expName: '', // 期望的文件名开头
  multiple: false,
  getPolicyUrl: null, // !!! 后端自定义获取特殊凭证接口, 仅商品模型使用|
};

export default UploadForm;
