import './App.css';
import React from "react";
import { Route } from "react-router-dom";
// import Form from "./components/Form"
// import Home from "./components/Home"
// import Login from "./components/Login"
// import Navbar from "./components/Navbar"
import Register from "./components/Register"

function App() {
  return (
    <div >
      <h1>aqui</h1>h1
      <Route exact path="/" components={Register}/>
      {/* <Route exact path="/Register" components={Login} />
      <Route path="/Home" components={Navbar} />
      <Route exact path="/Home" components={Home} />
      <Route exact path="/create" components={Form} /> */}
    
    </div>
  );
}

export default App;
