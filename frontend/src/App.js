//lib
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header"
import SignUp from "./components/Signup";
import Home from "./components/Home"
//styles
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;