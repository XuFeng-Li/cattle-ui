import React from "react"
import { registerFormField, connect } from "@uform/react-schema-renderer"
import PanelSelect from 'cattle-panel-select'
import PanelInput from 'cattle-panel-input'
import PanelInputNumber from 'cattle-panel-inputNumber'

registerFormField(
  "panelInput",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelInput)
);
registerFormField(
  "panelInputNumber",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelInputNumber)
);
registerFormField(
  "panelSelect",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelSelect)
);