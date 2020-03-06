import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { transformDataSourceKey } from "./utils.js";
import PanelSelect from "cattle-panel-select";
import PanelInput from "cattle-panel-input";
import PanelInputNumber from "cattle-panel-inputnumber";
import PanelImgRadio from "cattle-panel-imgradio";
import PanelButtonRadio from "cattle-panel-buttonradio";
import PanelSudoku from "cattle-panel-sudoku";
import PanelSwitch from "cattle-panel-switch";
import PanelListSelect from "cattle-panel-list-select";
import PanelCard from "cattle-panel-card";
import PanelBlock from "cattle-panel-block";
import "cattle-panel-select/dist/css/bundle.css"; // TODO: 为什么会走style-loader
// import 'cattle-panel-input/dist/css/bundle.css'
import "cattle-panel-inputnumber/dist/css/bundle.css";
import "cattle-panel-imgradio/dist/css/bundle.css";
import "cattle-panel-sudoku/dist/css/bundle.css";
// import 'cattle-panel-switch/dist/css/bundle.css'
import "cattle-panel-list-select/dist/css/bundle.css";
import "cattle-panel-block/dist/css/bundle.css";

const panelInputField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelInput);

const PanelInputNumberField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelInputNumber);

const panelSelectField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelSelect);

const PanelImgRadioField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelImgRadio);

const PanelButtonRadioField = connect({
  getProps: (outputProps, fieldProps) => {}
})(transformDataSourceKey(PanelButtonRadio, "options"));

const PanelSudokuField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelSudoku);

const PanelSwitchField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelSwitch);

const PanelListSelectField = connect({
  getProps: (outputProps, fieldProps) => {}
})(PanelListSelect);

// const Card = ({ children, ...props }) => {
//   return (
//     <PanelCard {...props.schema.getExtendsComponentProps()}>
//       {children}
//     </PanelCard>
//   );
// };
// const Block = ({ children, ...props }) => {
//   return (
//     <PanelBlock {...props.schema.getExtendsComponentProps()}>
//       {children}
//     </PanelBlock >
//   );
// };

export const fields = {
  panelInput: panelInputField,
  panelSelect: panelSelectField,
  PanelInputNumber: PanelInputNumberField,
  PanelImgRadio: PanelImgRadioField,
  PanelSudoku: PanelSudokuField,
  PanelSwitch: PanelSwitchField,
  PanelListSelect: PanelListSelectField,
  PanelButtonRadio: PanelButtonRadioField
};
export const virtualFields = {
  card: PanelCard,
  block: PanelBlock
};
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
