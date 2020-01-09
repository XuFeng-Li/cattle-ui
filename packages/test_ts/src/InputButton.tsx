import * as React from 'react';
import { Input, Button , Upload} from 'antd';
import styles from './index.less';

interface InputButtonProps {
  placeholder: string,
  children: any
}

//className={styles.cattle_test_ts}
const InputButton = ({placeholder, children}: InputButtonProps) => (
  <div className={styles.cattle_test_ts}>
    <Input  placeholder={placeholder} />
    {children}
  </div>
)

export default InputButton;
