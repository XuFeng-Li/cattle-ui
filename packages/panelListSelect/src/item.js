import React from 'react'
import CustomImg from 'components/CustomImg'
import styles from './item.less'

const CloudRaceItem = (props) => {
  const {
    item,
    style,
  } = props
  const onClick = () => {
    const { item, onClick } = props
    onClick && onClick(item)
  }
  return (
    <div key={item.name} className={styles["cloud-race-item"]} style={style} onClick={onClick}>
      <div className={styles["item-img"]}>
        <CustomImg
          src={item.img}
          ossProcess='x-oss-process=image/resize,m_fixed,h_114,w_114' />
      </div>
      <div className={`${styles["item-name"]} ellipsis`} title={item.name}>{item.name}</div>
    </div>
  ) 
}

export default CloudRaceItem
