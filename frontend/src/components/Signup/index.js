import React, { useState, useContext } from "react";
import { Datas } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//styles
import "./Signup.css";

function SignUp() {

  const { userSignup, setUserSignup } = useContext(Datas);

  /*  const [user, setUser] = useState({ username: "", email: "", password: "" }); */
  const [checkPassword, setCheckPassword] = useState(false);

  const fetchApi = async () => {
    //fetch data from backend

    const response = await axios.post("http://localhost:8095/api/signup", {
      username: userSignup.username,
      email: userSignup.email,
      password: userSignup.password,
    });
    //backend api
    return response.data;
  };
 
  const handleChange = (e) => {
    setUserSignup(
      { ...userSignup, [e.target.name]: e.target.value } //[] => dynamic way of key in obj
    );
  };

  const navigate = useNavigate(); // to navigate to home page after successful addition of user

  const handleSubmit = (e) => {
    //multiple things on clicking signup form
    e.preventDefault();
    if (checkPassword) {
      //1. check checkpwd is true, then
      fetchApi().then((data) => {
        if (data.success) {
          navigate("/login"); //once the signup button pressed if user doesn't exist already , user will be added to db and signup page is navigated to home page
          /* , { state: data.user } */
        }
      });
    }
  };
console.log("sign up datas:",userSignup)
  return (
    <div className="signup-form">
      <h1>E-Commerce Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <span>Username:</span>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your username"
            name="username"
            required
          />
        </div>
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
        <div className="confirm-password">
          <span>Confirm Password:</span>
          <input
            onChange={(e) =>
              e.target.value === userSignup.password
                ? setCheckPassword(true)
                : setCheckPassword(false)
            }
            type="password"
            placeholder="Re enter your password"
            name="password"
            required
          />
        </div>
        <div className="button">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
