import React from "react"
import { registerFormField, connect } from "@uform/react-schema-renderer"
import PanelSelect from 'cattle-panel-select'
import PanelInput from 'cattle-panel-input'
import PanelInputNumber from 'cattle-panel-inputnumber'
import PanelImgRadio from 'cattle-panel-imgradio'
import PanelSudoku from 'cattle-panel-sudoku'
import PanelSwitch from 'cattle-panel-switch'

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

registerFormField(
  "PanelImgRadio",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelImgRadio)
);
registerFormField(
  "PanelSudoku",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelSudoku)
);
registerFormField(
  "PanelSwitch",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelSwitch)
);