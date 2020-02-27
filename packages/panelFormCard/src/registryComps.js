import React from "react"
import { registerFormField, connect } from "@uform/react-schema-renderer"
import PanelSelect from 'cattle-panel-select'
import PanelInput from 'cattle-panel-input'
import PanelInputNumber from 'cattle-panel-inputnumber'
import PanelImgRadio from 'cattle-panel-imgradio'
import PanelSudoku from 'cattle-panel-sudoku'
import PanelSwitch from 'cattle-panel-switch'
import 'cattle-panel-select/dist/css/bundle.css' // TODO: 为什么会走style-loader
// import 'cattle-panel-input/dist/css/bundle.css'
import 'cattle-panel-inputnumber/dist/css/bundle.css'
import 'cattle-panel-imgradio/dist/css/bundle.css'
import 'cattle-panel-sudoku/dist/css/bundle.css'
// import 'cattle-panel-switch/dist/css/bundle.css'

const panelInputField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelInput)

const PanelInputNumberField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelInputNumber)

const panelSelectField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelSelect)

const PanelImgRadioField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelImgRadio)

const PanelSudokuField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelSudoku)

const PanelSwitchField = connect({
  getProps: (outputProps, fieldProps) => {
    
  },
})(PanelSwitch)

export const fields = {
  "panelInput": panelInputField, 
  "panelSelect": panelSelectField,
  "PanelInputNumber": PanelInputNumberField,
  "PanelImgRadio": PanelImgRadioField,
  "PanelSudoku": PanelSudokuField,
  "PanelSwitch": PanelSwitchField,
}
// registerFormField(
//   "panelInput",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelInput)
// );
// registerFormField(
//   "panelInputNumber",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelInputNumber)
// );
// registerFormField(
//   "panelSelect",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelSelect)
// );

// registerFormField(
//   "PanelImgRadio",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelImgRadio)
// );
// registerFormField(
//   "PanelSudoku",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelSudoku)
// );
// registerFormField(
//   "PanelSwitch",
//   connect({
//     getProps: (outputProps, fieldProps) => {
      
//     },
//   })(PanelSwitch)
// );