import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../redux/actions/actions";
import { RiHandCoinLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "../styles/Register.css";
import "../styles/Form.css";
import "../App.css";
import {
  
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const validate = (input) => {
  let error = {};
  if (!/^[A-Za-z]+$/.test(input.name) && input.name.length > 0) {
    error.name = "The name can only contain letters";
  }
  if (!/^[A-Za-z]+$/.test(input.last_name) && input.last_name.length > 0) {
    error.name = "The name can only contain letters";
  }
  return error;
};

const Register = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const [error, setError] = useState({
    name: "",
    last_name: "",
  });

  const [input, setInput] = useState({
    name: "",
    last_name: "",
    email: "",
    userName: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    genre: "",
  });

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
    const newUser = {
      name: input.name,
      last_name: input.last_name,
      email: input.email,
      userName: input.userName,
      password: input.password,
      confirm_password: input.confirm_password,
      date_of_birth: input.date_of_birth,
      genre: input.genre,
    };

    if (!error.name || !error.last_name) {
      e.preventDefault();
      dispatch(addUser(newUser));

      setInput({
        name: "",
        last_name: "",
        email: "",
        userName: "",
        password: "",
        confirm_password: "",
        date_of_birth: "",
        genre: "",
      });

      setCreate(true);
    } else {
      e.preventDefault();
      alert("You have empty input`s!");
    }
  }

  return (
    <div>
      <Navbar form={true} />
      <div className="form">
        <div className="in-flex">
          <h1>Registration</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                required
                pattern="[a-zA-Z ]{3,15}"
              />
              {!error.name ? null : (
                <span>
                  <p className="name_error_add">{error.name}</p>
                </span>
              )}
            </div>

            <div>
              <label>Last name: </label>
              <input
                type="text"
                name="last_name"
                placeholder="last_Name"
                value={input.last_name}
                onChange={(e) => handleChange(e)}
                required
                pattern="[a-zA-Z ]{3,15}"
              />
              {!error.name ? null : (
                <span>
                  <p className="name_error_add">{error.last_name}</p>
                </span>
              )}
            </div>

            <div>
              <label>Username: </label>
              <input
                type="text"
                name="userName"
                placeholder="userName"
                value={input.userName}
                onChange={(e) => handleChange(e)}
                required
                maxLength="10"
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={input.password}
                onChange={(e) => handleChange(e)}
                required
                maxLength="10"
              />
            </div>
            <div>
              <label>Confirm Password: </label>
              <input
                type="password"
                name="confirm_password"
                placeholder=" Confirm Password"
                value={input.confirm_password}
                onChange={(e) => handleChange(e)}
                required
                maxLength="10"
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={(e) => handleChange(e)}
                required
                maxLength="10"
              />
            </div>
            <div>
              <label>Date of birth: </label>
              <input
                type="date"
                name="date_of_birth"
                placeholder="Date of Birth"
                value={input.date_of_birth}
                onChange={(e) => handleChange(e)}
                required
                maxLength="10"
              />
            </div>

            <div>
              <label>Genre: </label>
              <select
                name="genre"
                value={input.genre}
                onChange={(e) => handleChange(e)}
              >
                <option default>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div className="formButton">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        {create ? (
          <div className="popUp" transition={{ duration: 0.2 }}>
            <h1>
              <RiHandCoinLine size="5rem" />
              GOOD <br />
              JOB
            </h1>
            <p>Your user was created successfully!</p>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Register;
