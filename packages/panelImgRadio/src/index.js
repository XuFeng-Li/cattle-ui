import React from 'react'
import cs from 'classnames'
import CustomImg from './customImg'
import styles from './index.less'

const defaultProps = {
  valueType: 'value'
}

class ImgRadio extends React.PureComponent {
  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  static defaultProps = defaultProps

  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleCheck(item) {
    const valueType = this.props.valueType
    if (!('value' in this.props)) {
      this.setState({
        value: item[valueType]
      })
    }
    const { onChange } = this.props
    if (onChange) {
      onChange(item[valueType])
    }
  }

  render() {
    const { dataSource, onChange, valueType, value, ...rest } = this.props
    const { value: theVal } = this.state
    const { className = '', ...other } = rest
    const UlClass = cs({
      [styles['radio-list']]: true,
      [className]: true
    })
    
    return (
      <ul className={UlClass} {...other}>
        {dataSource.map((item, index) => {
          const radioItemClass = cs({
            [styles['radio-item']]: true,
            [styles['radio-item--active']]: theVal === item[valueType]
          })
          return (
            <li
              key={index}
              className={radioItemClass}
              onClick={this.handleCheck.bind(this, item)}
            >
              <div className={styles["radio-item__img"]}>
                <CustomImg src={item.img} ossProcess="x-oss-process=image/resize,m_fixed,h_72,w_72"/>
              </div>
              <div className={`${styles["radio-item__desc"]} ellipsis`} title={item.name}>{item.name}</div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ImgRadio
