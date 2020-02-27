import React from 'react'
import { Card } from 'antd'

const PanelFormCard = (props) => {
  return({children,...props})=>{
    return <Card {...props.schema.getExtendsComponentProps()}>{children}</Card>
  }
};

PanelFormCard.propTypes = {
  
};
PanelFormCard.defaultProps = {
  
};



export default PanelFormCard