import React from 'react'
import cs from 'classnames'
import styles from './index.less'

const sudokoBoxWH = 44

class Sudoko extends React.PureComponent {
  static defaultProps = {
    // 横轴，纵轴各多少
    config: {
      col: 3,
      row: 3
    },
    // 基准点
    datumPoint: {
      colPoint: 1,
      rowPoint: 1
    },
    value: {
      columnIndex: 0,
      rowIndex: 0
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleChange(arr) {
    if (!('value' in this.props)) {
      this.setState({
        value: arr
      })
    }
    const onChange = this.props.onChange
    if (onChange) {
      onChange(arr)
    }
  }

  render() {
    const {
      config: { row, col },
      datumPoint: { colPoint, rowPoint },
      value,
      onChange,
      ...rest
    } = this.props
    const { className, ...other } = rest
    const { value: theVal } = this.state
    const rowArr = new Array(row).fill('row')
    const colArr = new Array(col).fill('col')

    // 根据value中的横列index计算背景图偏移量
    // 0.1是因为bg缩小了92%。所以移动位置也要做调整，0.1是个初略值
    const offsetX = (theVal[0] - colPoint + 0.1) * sudokoBoxWH + 'px'
    const offsetY =
      (theVal[1] - rowPoint + 0.1) * sudokoBoxWH + 0.1 * sudokoBoxWH + 'px'
    const bgPos = {
      backgroundPositionX: offsetX,
      backgroundPositionY: offsetY
    }
    const sudokuClass = cs({
      [styles["sudoku"]]: true,
      [className]: true
    })
    return (
      <div className={sudokuClass} {...other} style={{ ...bgPos }}>
        {rowArr.map((item, index) => {
          return (
            <div className={styles["sudoku_row"]} key={item + index}>
              {colArr.map((itemCol, indexCol) => {
                return (
                  <div
                    className={styles["sudoku_col"]}
                    key={itemCol + indexCol}
                    onClick={this.handleChange.bind(this, [indexCol, index])}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
export default Sudoko
