import * as React from 'react';
import { Input, Button , Upload} from 'antd';
interface InputButtonProps {
  placeholder: string,
  children: any
}

const InputButton = ({placeholder, children}: InputButtonProps) => (
  <div className='cattle_test_ts'>
    <Input placeholder={placeholder} />
    {children}
  </div>
)

export default InputButton;
