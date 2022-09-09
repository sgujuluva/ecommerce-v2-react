import { createContext, useState } from "react";

export const Datas = createContext();



function Context({ children }) {
     //getting data from api
  const [apiUser, setApiUser] = useState([]);

  return (
<Datas.Provider value={{apiUser, setApiUser}}>{children}</Datas.Provider>
  );
}
export default Context;
