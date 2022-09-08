import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//axios


function Login() {

  let navigate = useNavigate();
  /* input user */
  const [user, setUser] = useState({ email: "", password: "" });

  //getting data from api
  const [apiUser, setApiUser] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("http://localhost:8095/api/login");
    const json = await response.json();
    return json;
    //backend api
  
  };
  const handleChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value });//[] => dynamic way of key in obj //name is the attribute of input
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   if(apiUser.some(item => item.email === user.email)){
navigate("/")
   }else{
    alert("Please enter the correct details")
   }
  };

useEffect(() => {
  fetchApi().then(res => setApiUser(res))
})

  return (
    <div className="login-form">
      <h1>Welcome to Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <span>Email:</span>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
          />
        </div>
        <div className="password">
          <span>Password:</span>
          <input
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>

        <div className="button">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
