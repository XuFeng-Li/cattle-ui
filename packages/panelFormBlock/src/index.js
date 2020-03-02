import React from 'react'
import styles from './index.less'
const PanelFormBlock = ({children,...props})=>{
  const { title } = props.schema.getExtendsComponentProps()
  return <div className={styles["block__container"]}>
    <div className={styles["block__header"]}>{title}</div>
    <div className={styles["block__body"]}>
      {children}
    </div>
  </div>
}

PanelFormBlock.propTypes = {
  
};
PanelFormBlock.defaultProps = {
  
};



export default PanelFormBlock