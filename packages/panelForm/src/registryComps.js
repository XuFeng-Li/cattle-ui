import React from "react"
import { registerFormField, connect } from "@uform/react-schema-renderer"
import PanelSelect from '@cattle/panelSelect'
import PanelInput from '@cattle/panelInput'
import PanelInputNumber from '@cattle/panelInputNumber'

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