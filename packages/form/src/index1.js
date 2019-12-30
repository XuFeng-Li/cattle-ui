import { connect, registerFormField } from '@uform/react'
import { mapStyledProps, mapTextComponent } from '@uform/antd'
import { Cascader} from 'antd'
import { trim, beforeTrim } from '@/utils/utils'
import SearchButton from './fields/SearchButton'
import CsSelect from './fields/Select'
import SearchSelect from './serverFields/SearchSelect'
import TimeRange from './fields/TimeRange'
import CsInput from './fields/Input'
import CsTextArea from './fields/TextArea'
import RangePicker from './fields/RangePicker'
import HouseTypeSelect from '@/components/HouseTypeSelect/HouseTypeSelect';
import SvCascader from './serverFields/Cascader';
import Upload from './fields/upload';

// 正常为 'string'
registerFormField(
  'csInput',
  connect({
    getProps: (outputProps, fieldProps) => {
        mapStyledProps(outputProps, fieldProps);
        let value = trim(outputProps.value);
        if(outputProps.maxlen) {
          value = value.substring(0, outputProps.maxlen);
        }  
        outputProps.value =  value
    },
    getComponent: mapTextComponent
  })(CsInput)
)

registerFormField(
  'csTimeRange',
  connect({
    getComponent: mapTextComponent
  })(TimeRange)
)

registerFormField(
  'csRangePicker',
  connect({
    getComponent: mapTextComponent
  })(RangePicker)
)

registerFormField('csearchButton', 
  connect()(SearchButton)
)

registerFormField('csSelect', 
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
    },
    getComponent: mapTextComponent
  })(CsSelect)
)

registerFormField('searchSelect', 
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
    },
    getComponent: mapTextComponent
  })(SearchSelect)
)

registerFormField('csCascader', 
  connect({
    getComponent: mapTextComponent
  })(Cascader)
)

registerFormField('csTextArea', 
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
      let value = beforeTrim(outputProps.value);
      if(outputProps.maxlen) {
        value = value.substring(0, outputProps.maxlen);
      }
      outputProps.value = value
    },
    getComponent: mapTextComponent
  })(CsTextArea)
)

registerFormField('houseTypeSelect', 
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
    },
    getComponent: mapTextComponent
  })(HouseTypeSelect)
)

registerFormField('svCascader', 
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
    },
    getComponent: mapTextComponent
  })(SvCascader)
)

registerFormField(
  'csUpload',
  connect({
    getProps: mapStyledProps,
    getComponent: (Target, props, { editable, name }) => {
      // const { value } = props;
      // if(editable === false) {
      //   return UploadPreview
      // }
      return Target;
    }
  })(Upload)
)
