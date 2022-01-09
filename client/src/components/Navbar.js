import React from "react";
import { Link } from "react-router-dom";
import { RiHandCoinLine } from "react-icons/ri";
import "../styles/Navbar.css";

const Navbar = (props) => {

  return (
    <div className="navbar">
      <h1>
        {" "}
        <RiHandCoinLine size="4rem" />
        MY BUDGET <br />
        MANAGER
      </h1>

      <Link to="/Create" hidden={props.form ? true : false}>
        <button>Create Operation</button>
      </Link>

      <Link to="/home" hidden={props.home ? false : true}>
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default Navbar;
