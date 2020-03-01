import React from 'react'

export default class CustomImg extends React.PureComponent {
  img 
  flag
  constructor(props) {
    super(props)
    this.flag = false
    this.img = React.createRef()

  }
  static defaultProps = {
    defaultImg: 'https://img.asman.com.cn/assets/1567388823451_58545.png?x-oss-process=image/resize,m_fixed,h_114,w_114'
  }

  onError = () => {
    if(this.flag) return  // 避免死循环
    if(this.img && this.img.current && this.img.current.src) {
      // TODO: 已经有了默认的defaultImg, TS 仍然认为它可以为undefined
      this.img.current.src = this.props.defaultImg || ''
    }
    this.flag = true
  }

  render() {
    const { src, ossProcess , defaultImg , ...others } = this.props
    const imgSrc = `${src}?${ossProcess}`
    return (
      <img 
        ref={this.img} 
        src={imgSrc} 
        alt="img not found" 
        onError={this.onError}
        {...others}
      />
    )
  }
}