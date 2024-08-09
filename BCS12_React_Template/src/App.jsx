
import { message } from "antd";
import React from "react";
import DemoFormReact from "./components/DemoFormReact/DemoFormReact";

export const NotificationContext = React.createContext();

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    });
  };
  return (
    <>
      <NotificationContext.Provider
        value={{
          abc: "Linh đa",
          handleNotification,
        }}
      >
        <DemoFormReact/>
        {contextHolder}
      </NotificationContext.Provider>
      
    </>
  );
  
}

export default App;
