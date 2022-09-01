import React from "react";
//styles
import "./Signup.css"

function SignUp() {
  return <div>
    <form>
        <span>Username:</span>
       <input type="text" placeholder="Enter your username" required />
       <span>Email:</span>
       <input type="email" placeholder="Enter your Email" required />
       <span>Password:</span>
       <input type="password" placeholder="Enter your password"  required/>
       <button>Sign Up</button>
    </form>
  </div>;
}

export default SignUp;
