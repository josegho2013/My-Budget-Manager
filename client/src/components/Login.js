import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOperationsDb } from "../redux/actions/actions";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOperationsDb());
  }, [dispatch]);

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
