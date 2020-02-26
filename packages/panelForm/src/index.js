import React from "react";
import PropTypes from "prop-types";
import { SchemaForm, Submit, mapStyledProps, mapTextComponent } from "@uform/antd";
import { fields } from './registryComps'
import styles from "./index.less";

const PanelForm = (props) => {
  const { schema, ...others } = props
  return (
    <SchemaForm 
      {...others}
      fields={fields}
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