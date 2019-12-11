import * as React from 'react';
import { Input, Button , Upload} from 'antd';
require('./index.less')
interface InputButtonProps {
  placeholder: string
}

const InputButton = ({placeholder}: InputButtonProps) => (
  <div className='cattle_test_ts'>
    <Input placeholder={placeholder} />
    <Button>Submit</Button>
    <Upload>上传</Upload>
    211
  </div>
)

export default InputButton;
