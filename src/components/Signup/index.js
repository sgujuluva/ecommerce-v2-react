import React, { useState } from "react";
//styles
import "./Signup.css"

function SignUp() {
    const [user,setUser] = useState({username:"", email:"", password:""})
    const handleChange = (e) => {
        setUser(prev => ({
            ...prev,
            [e]:e.target.value //[] => dynamic way of key in obj
        }))
    }
  return <div>
    <form>
        <div className="username">
        <span>Username:</span>
       <input onChange={handleChange} type="text" placeholder="Enter your username" required />
       </div>
       <div className="email">
       <span>Email:</span>
       <input type="email" placeholder="Enter your Email" required />
       </div>
       <div className="password">
       <span>Password:</span>
       <input type="password" placeholder="Enter your password"  required/>
       </div>
       <button>Sign Up</button>
    </form>
  </div>;
}

export default SignUp;
