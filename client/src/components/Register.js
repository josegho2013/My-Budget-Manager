import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addUser,
  // getUser,
  // updateUser,
  // deleteUser,
} from "../redux/actions/actions";

const Register = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const [input, setInput] = useState({
    name: "",
    last_name: "",
    email: "",
    username: "",
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
  }

  function handleSubmit(e) {
    const newUser = {
      name: input.name,
      last_name: input.last_name,
      email: input.email,
      username: input.username,
      password: input.password,
      confirm_password: input.confirm_password,
      date_of_birth: input.date_of_birth,
      genre: input.genre,
    };


    e.preventDefault();
    dispatch(addUser(newUser));
    setInput({
      name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      date_of_birth: "",
      genre: "",
    });

      setCreate(true);

    // if (!error.name) {
    //   e.preventDefault();
    //   dispatch(addUser(newUser));
    //   setInput({
    //     name: "",
    //     image: "",
    //     temperaments: [],
    //     heightMin: "",
    //     heightMax: "",
    //     weightMin: "",
    //     weightMax: "",
    //     life_SpanMin: "",
    //     life_SpanMax: "",
    //   });

    //   setCreated(true);
    // } else {
    //   e.preventDefault();
    //   alert("You have empty input`s!");
    // }
  }

  return (
    <div>
      <h1>My Budget Manager</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label> Name: </label>

        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          min="3"
          max="10"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />

        <div>
          <label>Last Name: </label>
          <input
            required
            type="text"
            name="last_name"
            placeholder="last_Name"
            min="3"
            max="10"
            value={input.last_name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>user Name: </label>
          <input
            required
            type="text"
            name="username"
            placeholder="username"
            min="3"
            max="10"
            value={input.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            min="3"
            max="10"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label> Confirm Password: </label>
          <input
            required
            type="password"
            name="confirm_password"
            placeholder=" Confirm Password"
            min="3"
            max="10"
            value={input.confirm_password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            min="3"
            max="15"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Date_of_birth: </label>
          <input
            required
            type="date"
            name="date_of_birth"
            placeholder="Date of Birth"
            min="3"
            max="10"
            value={input.date_of_birth}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Genre: </label>
          <select>
            <option> Female</option>
            <option> Male</option>
            <option> Other</option>
          </select>
        </div>
      <Link to="/Login">
        <button type="submit">Register</button>
      </Link>
      </form>
    </div>
  );
};

export default Register;
