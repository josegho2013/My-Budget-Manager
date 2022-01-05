import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Navbar/>} />
        <Route exact path="/Home" element={<Home/>} />
        {/* <Route exact path="/create" element={<Form/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
