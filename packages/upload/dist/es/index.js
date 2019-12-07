import 'antd/es/upload/style';
import _Upload from 'antd/es/upload';
import 'antd/es/message/style';
import _message from 'antd/es/message';
import React, { Fragment, Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// import {
//   urlMapToFileList,
//   simplifyUrlMapToFileList,
//   fileListTourlMap,
// } from 'cattle-util';
var showMessage = function showMessage(methodName, content, onClose) {
  _message[methodName](content, 1.5, onClose);
};

var UploadForm =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadForm, _Component);

  _createClass(UploadForm, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if ('value' in nextProps) {
        var fileTypeCode = nextProps.fileTypeCode;
        var fileList = 11;
        var filesList = state.filesList;
        var uploadingFiles = [];

        if (filesList && filesList.length) {
          uploadingFiles = filesList.filter(function (ele) {
            return ele.status === 'uploading';
          });
          fileList = [].concat(_toConsumableArray(uploadingFiles), _toConsumableArray(fileList));
        }

        return {
          filesList: fileList
        };
      }

      return null;
    }
  }]);

  function UploadForm(props) {
    var _this;

    _classCallCheck(this, UploadForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          valueChange = _this$props.valueChange,
          fileLength = _this$props.fileLength; // let selfValue = fileListTourlMap(value);
      // if (selfValue.length) {
      //   selfValue = fileLength * 1 === 1 ? selfValue[0] : selfValue; // 上传为一个数据的时候直接返回一个string, 不用返回数组
      // } else {
      //   selfValue = null;
      // }
      // if (onChange) {
      //   onChange(selfValue);
      // }
      // if (valueChange) {
      //   valueChange(selfValue);
      // }
    });

    _defineProperty(_assertThisInitialized(_this), "beyondFileLength", function () {
      var fileLength = _this.props.fileLength;
      var filesList = _this.state.filesList;
      if (filesList.length >= fileLength) return true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (data) {
      var _this$props2 = _this.props,
          isSupportCover = _this$props2.isSupportCover,
          fileLength = _this$props2.fileLength,
          successDo = _this$props2.successDo,
          fail = _this$props2.fail;
      var file = data.file;
      var fileList = data.fileList;

      if (_this.beyondFileLength()) {
        fileList = fileList.filter(function (ele) {
          return ele.uid !== file.uid;
        });
      }

      if (isSupportCover) {
        // 支持覆盖，移除旧数据，
        fileList = fileList.slice(-fileLength);
      }

      if (file.status === 'done') {
        var response = file.response;

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
        fileList = fileList.filter(function (ele) {
          return ele.url;
        });
      }

      _this.setState({
        filesList: fileList
      });

      _this.onChange(fileList);
    });

    _defineProperty(_assertThisInitialized(_this), "getFileTypeByName", function (name) {
      var index = name.lastIndexOf('.');
      return name.slice(index);
    });

    _defineProperty(_assertThisInitialized(_this), "noMatchUpperOrLower", function (matchArr, fileType) {
      var lower = fileType.toLowerCase();
      var upper = fileType.toUpperCase();
      return matchArr.indexOf(lower) > -1 || matchArr.indexOf(upper) > -1;
    });

    _defineProperty(_assertThisInitialized(_this), "getPolicyUpload", function (file, queryParams) {
      return function () {
        var _this$props3 = _this.props,
            checkNameExp = _this$props3.checkNameExp,
            expName = _this$props3.expName,
            getPolicyUrl = _this$props3.getPolicyUrl,
            dealResponseData = _this$props3.dealResponseData,
            getPolicy = _this$props3.getPolicy,
            getSignedUrl = _this$props3.getSignedUrl;
        var fileName = file.name;

        var me = _assertThisInitialized(_this);

        if (checkNameExp && Object.prototype.toString.call(checkNameExp).slice(8, -1) === 'RegExp') {
          if (!checkNameExp.test(file.name) && expName) {
            fileName = "".concat(expName).concat(file.name);
          }
        }

        getPolicy(_objectSpread2({
          fileName: fileName
        }, queryParams), getPolicyUrl).then(function (response) {
          if (!response) {
            _this.uploadError(file, null, 'error');

            return;
          } // 获取后台签名上传oss


          var fd = new FormData();

          var _dealResponseData = dealResponseData(response),
              OSSAccessKeyId = _dealResponseData.OSSAccessKeyId,
              host = _dealResponseData.host,
              policy = _dealResponseData.policy,
              signature = _dealResponseData.signature,
              startsWith = _dealResponseData.startsWith,
              objectName = _dealResponseData.objectName;

          fd.append('OSSAccessKeyId', OSSAccessKeyId);
          fd.append('policy', policy);
          fd.append('signature', signature);
          fd.append('key', "".concat(objectName));
          fd.append('success_action_status', 200);
          fd.append('file', file, objectName);
          var xhr = new XMLHttpRequest();
          xhr.open('post', host, true);
          xhr.upload.addEventListener('progress', function (evt) {
            var filesList = me.state.filesList;
            var progressPercent = Math.round(evt.loaded * 100 / evt.total);
            var currentFile = filesList.filter(function (ele) {
              return ele.uid === file.uid;
            });

            if (currentFile[0]) {
              currentFile[0].percent = progressPercent;
            }

            _this.setState({
              filesList: filesList
            });
          }, false);
          xhr.addEventListener('load', function (e) {
            if (e.target.status !== 200) {
              return;
            }

            if (e.target.status === 200) {
              var imgUrl = "".concat(host, "/").concat(objectName);
              var fileTypeCode = me.props.fileTypeCode;

              if (fileTypeCode * 1 !== 4) {
                // 私有桶查看文件
                getSignedUrl({
                  url: imgUrl
                }).then(function (res) {
                  me.uploadSuccess(file, dealResponseData(res));
                });
              } else {
                me.uploadSuccess(file, imgUrl);
              }
            }
          }, false);
          xhr.addEventListener('error', function (e) {
            _this.uploadError(file, null, 'error');
          });
          xhr.send(fd);
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getChangingData", function (file, imgUrl, status) {
      var filesList = _this.state.filesList;
      var currentFile = filesList.filter(function (ele) {
        return ele.uid === file.uid;
      });

      if (currentFile[0]) {
        currentFile[0].status = status;
        currentFile[0].url = imgUrl;
      }

      var data = {
        fileList: filesList,
        file: {
          status: status,
          response: {
            success: true,
            result: {
              url: imgUrl
            }
          }
        }
      };
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "uploadSuccess", function (file, imgUrl) {
      var mockSuccesData = _this.getChangingData(file, imgUrl, 'done');

      _this.handleChange(mockSuccesData);
    });

    _defineProperty(_assertThisInitialized(_this), "uploadError", function (file, imgUrl) {
      var mockSuccesData = _this.getChangingData(file, imgUrl, 'error');

      _this.handleChange(mockSuccesData);
    });

    _defineProperty(_assertThisInitialized(_this), "customRequest", function (data) {
      var _this$props4 = _this.props,
          fileTypeCode = _this$props4.fileTypeCode,
          _this$props4$queryPol = _this$props4.queryPolicyParams,
          queryPolicyParams = _this$props4$queryPol === void 0 ? {} : _this$props4$queryPol;
      var file = data.file;
      if (_this.beyondFileLength()) return false;

      _this.getPolicyUpload(file, _objectSpread2({
        fileTypeCode: fileTypeCode
      }, queryPolicyParams))();
    });

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var _this$props5 = _this.props,
          _this$props5$fileSize = _this$props5.fileSize,
          fileSize = _this$props5$fileSize === void 0 ? 2 : _this$props5$fileSize,
          accept = _this$props5.accept;
      if (_this.beyondFileLength()) return false;
      var acceptTypes = accept && accept.split(',') || [];
      var acceptAll = !acceptTypes.filter(function (ele) {
        return ele;
      }).length;

      var fileType = _this.getFileTypeByName(file.name);

      var canAccept = acceptAll || _this.noMatchUpperOrLower(acceptTypes, fileType);

      if (!canAccept) {
        showMessage('warning', "\u4E0A\u4F20\u7684\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E");
      }

      var isPass = file.size / 1024 / 1024 < fileSize * 1;

      if (!isPass && canAccept) {
        showMessage('warning', "\u6587\u4EF6\u4E0A\u4F20\u4E0D\u80FD\u8D85\u8FC7".concat(fileSize, "MB"));
      }

      return isPass && canAccept;
    });

    _defineProperty(_assertThisInitialized(_this), "del", function (data) {
      var filesList = _this.state.filesList;
      var list = filesList.filter(function (ele) {
        return ele !== data;
      });

      _this.onChange(list);
    });

    _defineProperty(_assertThisInitialized(_this), "setFirst", function (data) {
      var filesList = _this.state.filesList;
      var list = filesList.filter(function (ele) {
        return ele !== data;
      });
      list.unshift(data);

      _this.onChange(list);
    });

    _this.state = {// filesList: urlMapToFileList(props.value || []),
    };
    return _this;
  }

  _createClass(UploadForm, [{
    key: "renderButton",
    value: function renderButton() {
      var filesList = this.state.filesList;
      var _this$props6 = this.props,
          children = _this$props6.children,
          fileLength = _this$props6.fileLength;
      var loading = filesList.filter(function (ele) {
        return ele.status === 'uploading';
      }).length;
      var renderDom = React.createElement("div", null, React.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20"));

      if (children) {
        renderDom = React.cloneElement(children, {
          loading: !!loading
        });
      }

      return filesList.length >= fileLength ? null : renderDom;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filesList = this.state.filesList;
      var _this$props7 = this.props,
          _this$props7$listType = _this$props7.listType,
          listType = _this$props7$listType === void 0 ? 'picture-card' : _this$props7$listType,
          multiple = _this$props7.multiple,
          outDisplay = _this$props7.outDisplay,
          beforeUpload = _this$props7.beforeUpload,
          _this$props7$accept = _this$props7.accept,
          accept = _this$props7$accept === void 0 ? '*' : _this$props7$accept,
          disabled = _this$props7.disabled,
          _this$props7$actionTe = _this$props7.actionTexts,
          actionTexts = _this$props7$actionTe === void 0 ? [] : _this$props7$actionTe,
          showUploadList = _this$props7.showUploadList,
          customShow = _this$props7.customShow,
          getExtendHeaders = _this$props7.getExtendHeaders;
      var _this$props8 = this.props,
          actionPath = _this$props8.actionPath,
          data = _this$props8.data;

      var _actionTexts = _slicedToArray(actionTexts, 2),
          mianPicText = _actionTexts[0],
          setMainPicText = _actionTexts[1];

      var extendProps = {}; // 导入需求

      if (actionPath) {
        extendProps = {
          action: actionPath
        };
      } else {
        extendProps = {
          customRequest: this.customRequest
        };
      }

      return React.createElement(Fragment, null, React.createElement("span", {
        className: "upload_form",
        style: {
          display: outDisplay || 'inline-block'
        }
      }, React.createElement(_Upload, _extends({
        multiple: multiple,
        showUploadList: showUploadList,
        onRemove: function onRemove() {
          return !disabled;
        },
        accept: accept,
        data: data,
        beforeUpload: beforeUpload || this.beforeUpload,
        headers: _objectSpread2({}, getExtendHeaders()),
        listType: listType,
        fileList: filesList,
        onChange: this.handleChange,
        disabled: disabled
      }, extendProps), this.renderButton())), !showUploadList && customShow ? React.createElement("div", {
        className: "ant-upload-list ant-upload-list-picture-card custom"
      }, filesList.map(function (ele, i) {
        return ele.status === 'done' ? React.createElement("div", {
          key: -i,
          className: "ant-upload-list-item ant-upload-list-item-done"
        }, React.createElement("div", {
          className: "ant-upload-list-item-info"
        }, React.createElement("a", {
          className: "ant-upload-list-item-thumbnail",
          href: ele.url,
          rel: "noopener noreferrer",
          target: "_blank"
        }, React.createElement("img", {
          src: ele.url,
          alt: ele.name
        }))), React.createElement("span", {
          className: "ant-upload-list-item-actions"
        }, React.createElement("a", {
          href: ele.url,
          target: "_blank",
          rel: "noopener noreferrer",
          title: "\u9884\u89C8\u6587\u4EF6"
        })), React.createElement("span", {
          className: "ant-upload-list-item-extend-actions",
          style: {
            fontSize: '12px',
            color: '#fff',
            zIndex: 10
          }
        }, i === 0 ? React.createElement("span", null, mianPicText || '主图') : React.createElement("span", {
          onClick: function onClick() {
            _this2.setFirst(ele);
          },
          className: "pointer"
        }, setMainPicText || '设为主图'), React.createElement("span", {
          style: {
            marginLeft: '8px'
          },
          onClick: function onClick() {
            _this2.del(ele);
          },
          className: "pointer"
        }, "\u5220\u9664"))) : null;
      })) : null);
    }
  }]);

  return UploadForm;
}(Component);

UploadForm.defaultProps = {
  getPolicy: null,
  getSignedUrl: null,
  getExtendHeaders: function getExtendHeaders() {},
  listType: 'picture-card',
  fileType: 'img',
  type: '',
  fileSize: 999,
  // 文件大小，单位 M
  fileLength: 999,
  // 上传的文件数
  actionPath: null,
  dealResponseData: function dealResponseData(response) {
    return response.result;
  },
  isSupportCover: false,
  // 是否支持覆盖操作,不需要手动删除文件，直接覆盖所有
  disabled: false,
  fileTypeCode: 4,
  // 目前 4为普通图片(上传即可查看), 1,2,3为加密图片
  queryPolicyParams: {},
  checkNameExp: '',
  // 校验name的正则
  expName: '',
  // 期望的文件名开头
  multiple: false,
  getPolicyUrl: null // !!! 后端自定义获取特殊凭证接口, 仅商品模型使用|

};

export default UploadForm;
