import * as React from 'react';
import { Input, Button , Upload} from 'antd';

interface InputButtonProps {
  placeholder: string
}

const InputButton = ({placeholder}: InputButtonProps) => (
  <div>
    <Input placeholder={placeholder} />
    <Button>Submit</Button>
    <Upload>上传</Upload>
  </div>
)

export default InputButton;
