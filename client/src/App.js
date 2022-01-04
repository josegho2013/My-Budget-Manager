import './App.css';
import React from "react";
import Form from "./components/Form"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import { Route } from "react-router-dom";

function App() {
  return (
    <div >

      <Route  path="/" component={Register} />
      <Route exact path="/Register" component={Login} />
      <Route path="/Home" component={Navbar} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/create" component={Form} />
     holaa
    </div>
  );
}

export default App;
