import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOperationsDb } from "../redux/actions/actions";
import "../styles/Login.css";
import "../App.css";

const validate = (input) => {
  let error = {};

  if (input.userName.length < 1) {
    error.userName = "Required Field";
  }
  if (input.password.length < 1) {
    error.password = "Required Field";
  }
  return error;
};

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getOperationsDb());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    const loginData = {
      userName: input.userName,
      password: input.password,
    };

    if (!error.password || !error.userName) {
      e.preventDefault();
      setInput({
        userName: "",
        password: "",
      });
    } else {
      e.preventDefault();
      alert("You have empty input`s!");
    }
  }

  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Username: </label>
          <input
            name="userName"
            type="text"
            onChange={(e) => handleChange(e)}
            value={input.userName || ""}
            required
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            onChange={(e) => handleChange(e)}
            value={input.password || ""}
            required
          ></input>
        </div>
      </form>
      <Link to="/Home">
        <button type="submit">Login</button>
      </Link>
    </div>
  );
};

export default Login;
