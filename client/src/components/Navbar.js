import React from "react";
import { Link } from "react-router-dom";
import {RiHandCoinLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <div>
      <h1> My Budget Manager</h1>
     <RiHandCoinLine
     size="5rem"/>


      <Link to="/Create">
        <button> Crear Operations </button>
      </Link>
    </div>
  );
};

export default Navbar;
