//lib
import {Routes, Route} from "react-router-dom"
//components
import SignUp from "./components/Signup";
//styles
import "./App.css";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/signup" element = { <SignUp />}/>
        </Routes>
     
    </div>
  );
}

export default App;
