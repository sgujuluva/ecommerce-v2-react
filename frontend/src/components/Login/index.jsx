import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
//axios

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    //backend api
    console.log(response.data);
  };
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, //[] => dynamic way of key in obj
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
  };

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
