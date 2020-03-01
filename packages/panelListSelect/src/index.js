import React from "react";
import { Icon, Drawer } from 'antd';
import cs from "classnames";
import List from "./list";
import styles from "./index.less";


class ModalSelect extends React.PureComponent {
  static getDerivedStateFromProps(nextProps) {
    if ("value" in nextProps) {
      return {
        value: nextProps.value || null
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || null,
      isSelecting: false,
      cloudRaceList: {},
      cloudRaceListSearchForm: {
        keyWords: ''
      }
    };
  }

  async componentDidMount() {
    await this.fetchCloudRaceList({})
  }

  async componentDidUpdate(nextProps) {
    const { propsParams: { categoryId: preId} } = this.props
    const { propsParams: { categoryId: currentId}} = nextProps
    if(currentId !== preId ) {
      await this.fetchCloudRaceList({})
    }
  }

  async fetchCloudRaceList (params) {
    const { fetcher, api, propsParams } = this.props
    const res = await fetcher.get(api, {
      propsParams,
      ...params
    })
    if(res) {
      this.setState({
        cloudRaceList: res.data,
      })
    }
  }

  select = () => {
    this.setState({
      isSelecting: true
    })
  }

  delete = (event) => {
    console.log('delete')
    event.stopPropagation()
    const { onChange } = this.props;
    if (!("value" in this.props)) {
      this.setState({
        value: null
      });
    }
    onChange && onChange(null);
  }

  cloudRaceFormSubmit = (cloudRaceListSearchForm) => {
    console.log('cloudRaceListSearchForm: ', cloudRaceListSearchForm);
    const params = {
      ...cloudRaceListSearchForm,
      pageNo: 1
    };
    this.setState({
      cloudRaceListSearchForm: cloudRaceListSearchForm,
    })
    this.fetchCloudRaceList(params)
  }

  cloudRacePageChange = (pageInfo) => {
    const { pageNo, pageSize } = pageInfo
    this.fetchCloudRaceList({
      pageNo: pageNo,
      pageSize: pageSize
    })
  }

  cloudRaceItemClick = (item) => {
    const { onChange } = this.props
    if (!("value" in this.props)) {
      this.setState({
        value: { 
          itemInfo: item
        }
      });
    }
    onChange && onChange({ 
      itemInfo: item
    });
    this.setState({
      isSelecting: false
    })
  }

  closeModal = () => {
    this.setState({
      isSelecting: false
    })
  }

  render() {
    const { propsParams, onChange, value, placement = 'left', ...rest } = this.props;
    const { value: stateValue, isSelecting, cloudRaceList, cloudRaceListSearchForm } = this.state;
    const { categoryName } = propsParams 
    console.log('stateValue: ', stateValue);
    const { className = "", ...other } = rest;
    const containerCs = cs({
      [styles["container"]]: true,
      [className]: true
    });
    let displayName = categoryName
    if(stateValue !== null) {
      displayName = `${categoryName}(${stateValue.itemInfo.name})`
    }
    return (
      <div className={containerCs} {...other}>
        {stateValue === null ? (
          <div className={`${styles["item"]} ${styles["item-empty"]}`} onClick={this.select}>
            <Icon type="plus"/>
          </div>
        ) : (
          <div className={`${styles["item"]} ${styles["item--active"]}`} onClick={this.select}>
            <div className={styles["item__hover"]} >
              <Icon className={styles["item__icon"]} type="edit" onClick={this.select}/> 
              <Icon className={styles["item__icon"]} type="delete" onClick={this.delete}/>
            </div>
            <div className={styles["item__img"]}>
              <img src={stateValue.itemInfo.img} />
            </div>
            <p className={`${styles["item__desc"]} ellipsis`} title={displayName}>{displayName}</p>
          </div>
        )}
        { 
          isSelecting && 
          <Drawer
            title={<div style={{textAlign:'center', fontSize: '18px'}}>样式选择</div>}
            visible={isSelecting}
            placement={placement}
            onClose={this.closeModal}
            width="328px"
            bodyStyle={{paddingTop: 0, height: 'calc(100% - 56px)'}}
          >
            <List
              data={cloudRaceList}
              cloudRaceListSearchForm={cloudRaceListSearchForm}
              onFormSubmit={this.cloudRaceFormSubmit}
              onPageChange={this.cloudRacePageChange}
              onItemClick={this.cloudRaceItemClick}
          />
          </Drawer>
        }
        
      </div>
    );
  }
}

export default ModalSelect;
