import React from "react";
import PropTypes from "prop-types";
import { SchemaForm, Submit, mapStyledProps, mapTextComponent } from "@uform/antd";
import './registryComps'
import styles from "./index.less";

const PanelForm = (props) => {
  
  const { schema, ...others } = props
  return (
    <SchemaForm 
      {...others}
      labelCol={4}
      wrapperCol={16}
      schema={schema}
    >
      <Submit >修改</Submit>
    </SchemaForm>
  );
};

PanelForm.propTypes = {
  
};
PanelForm.defaultProps = {
  
};



export default PanelForm