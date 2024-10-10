import { createContext, useState } from "react";

export const Dataprovider = createContext();

const ContextProvider = ({ children }) => {
  let [light, setLight] = useState(false);
  let [data, setData] = useState([]);
  const changeMode = () => {
    setLight(!light);
  };
  const addData = (userData) => {
    setData([...data, userData]);
  };
  return (
    <Dataprovider.Provider value={{ light, changeMode, data, addData }}>
      {children}
    </Dataprovider.Provider>
  );
};

export default ContextProvider;
