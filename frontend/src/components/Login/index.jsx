import React, {useState} from 'react'
import axios from 'axios';
import "./Login.css"

function Login() {
  
        const [user, setUser] = useState({ email: "", password: "" });
 

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, //[] => dynamic way of key in obj
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5000/api/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((data) => console.log(data)); //backend api
  };


  return (
    <div className="login-form">
    
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
  )
}

export default Login