import React from 'react'
import { Card } from 'antd'

const PanelCard = ({children,...props})=>{
  return <Card {...props.schema.getExtendsComponentProps()}>{children}</Card>
}

PanelCard.propTypes = {
  
};
PanelCard.defaultProps = {
  
};



export default PanelCard