import React, { useState } from "react";
import axios from "axios"
//styles
import "./Signup.css"

function SignUp() {
    const [user,setUser] = useState({username:"", email:"", password:""})

    const handleChange = (e) => {
        setUser(prev => ({
            ...prev,
            [e.target.name]:e.target.value //[] => dynamic way of key in obj
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:5000/api/signup",{
            method:"POST",
            body : JSON.stringify(user),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(data => console.log(data)) //backend api

    }
  return <div className="signup-form">
    <form onSubmit={handleSubmit}>
        <div className="username">
        <span>Username:</span>
       <input onChange={handleChange} type="text" placeholder="Enter your username" name = "username" required />
       </div>
       <div className="email">
       <span>Email:</span>
       <input onChange={handleChange} type="email" placeholder="Enter your Email" name = "email" required />
       </div>
       <div className="password">
       <span>Password:</span>
       <input onChange={handleChange} type="password" placeholder="Enter your password" name = "password" required/>
       </div>
       <div className="button">
       <button>Sign Up</button>
       </div>
       
    </form>
  </div>;
}

export default SignUp;
