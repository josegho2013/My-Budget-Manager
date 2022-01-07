import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/Create">
        <button> Crear Operations </button>
      </Link>
    </div>
  );
};

export default Navbar;
