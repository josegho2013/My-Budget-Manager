import { Route, Routes } from "react-router-dom";
import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />        
        <Route exact path="/Create" element={<Form />} />
        <Route exact path="/update/:id" element={<Form edit={true} />} />
      </Routes>
    </div>
  );
}

export default App;
