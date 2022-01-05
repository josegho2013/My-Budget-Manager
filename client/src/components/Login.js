import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <form>
      <div>
        <label>User Name: </label>
        <input></input>
      </div>
      <div>
        <label>Password: </label>
        <input></input>
      </div>
      </form>
      <Link to="/Home">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;
