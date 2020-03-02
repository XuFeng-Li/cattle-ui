import React from "react";
import PropTypes from "prop-types";
import {
  SchemaForm,
  Submit,
  mapStyledProps,
  mapTextComponent
} from "@uform/antd";
import { fields, virtualFields } from "./registryComps";
import styles from "./index.less";

const PanelForm = props => {
  const { schema, children, fetcher, ...others } = props;
  return (
      <SchemaForm
        labelCol={4}
        wrapperCol={16}
        {...others}
        fields={fields}
        virtualFields={virtualFields}
        schema={schema}
      >
        {children}
      </SchemaForm>
  );
};

PanelForm.propTypes = {};
PanelForm.defaultProps = {};

export default PanelForm;
