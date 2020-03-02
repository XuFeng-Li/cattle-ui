import * as React from "react";

const ConfigContext = React.createContext({}); 

function ConfigProvider(props) {
  const { children } = props
  
  const { fetcher } = props
  const config = {
    fetcher
  }
  return <ConfigContext.Provider value={config} >
    {children}
  </ConfigContext.Provider>
}

export const ConfigConsumer = ConfigContext.Consumer
export default ConfigProvider;
