//lib
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Cart from "./components/Cart";

//styles
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";

function App() {
 
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
