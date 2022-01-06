import React from "react";
import Navbar from "./Navbar";
import Form from "./Navbar";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <h1>soy Home</h1>
    <Link to="/Create">
      <button> Crear Operations </button>
      </Link>
    
      <Navbar />
    </div>
  );
};

export default Home;
