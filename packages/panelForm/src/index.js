import React from "react";
import PropTypes from "prop-types";
import { SchemaForm, Submit, mapStyledProps, mapTextComponent } from "@uform/antd";
import { fields } from './registryComps'
import styles from "./index.less";

const PanelForm = (props) => {
  const { schema, children, ...others } = props
  return (
    <SchemaForm 
      labelCol={4}
      wrapperCol={16}
      {...others}
      fields={fields}
      
      schema={schema}
    >
      {children}
    </SchemaForm>
  );
};

PanelForm.propTypes = {
  
};
PanelForm.defaultProps = {
  
};



export default PanelForm