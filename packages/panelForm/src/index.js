import React from "react";
import PropTypes from "prop-types";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
// import './registryComps'
import styles from "./index.less";

const PanelForm = (props) => {
  
  const { schema } = props
  return (
    <SchemaForm 
      labelCol={4}
      wrapperCol={16}
      schema={schema}
    />
  );
};

PanelForm.propTypes = {
  
};
PanelForm.defaultProps = {
  
};



export default PanelForm