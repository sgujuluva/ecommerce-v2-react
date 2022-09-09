import { createContext, useState } from "react";

export const Datas = createContext();



function Context({ children }) {
    //login form
     //getting data from api
  const [apiUser, setApiUser] = useState([]);
/* login user*/
const [loginUser, setLoginUser] = useState({ email: "", password: "" });
//signinform
const [userSignup, setUserSignup] = useState({ username: "", email: "", password: "" });

  return (
<Datas.Provider value={{apiUser, setApiUser,loginUser,setLoginUser,userSignup, setUserSignup}}>{children}</Datas.Provider>
  );
}
export default Context;
