import React from 'react'
import { Card } from 'antd'

const PanelFormBlock = (props) => {
  return({children,...props})=>{
    return <Card {...props.schema.getExtendsComponentProps()}>{children}</Card>
  }
};

PanelFormBlock.propTypes = {
  
};
PanelFormBlock.defaultProps = {
  
};



export default PanelFormBlock