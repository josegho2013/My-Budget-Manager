import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>My Budget Manager</h1>
      <form>
        <label> Name: </label>
        <input></input>

        <div>
          <label>Last Name: </label>
          <input></input>
        </div>

        <div>
          <label>user Name: </label>
          <input></input>
        </div>
        <div>
          <label>Password: </label>
          <input></input>
        </div>
        <div>
          <label> Confirm Password: </label>
          <input></input>
        </div>
        <div>
          <label>Date_of_birth: </label>
          <input></input>
        </div>
        <div>
          <label>Genre: </label>
          <input></input>
        </div>
      </form>
      <Link to="/Login">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Register;
