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
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={(e) => handleChange(e)}
          required
          maxlength="10"
        />

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="last_name"
            placeholder="last_Name"
            value={input.last_name}
            onChange={(e) => handleChange(e)}
            required
            maxlength="10"
          />
        </div>

        <div>
          <label>user Name: </label>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            value={input.userName}
            onChange={(e) => handleChange(e)}
            required
            maxlength="10"
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
            maxlength="10"
          />
        </div>
        <div>
          <label> Confirm Password: </label>
          <input
            type="password"
            name="confirm_password"
            placeholder=" Confirm Password"
            value={input.confirm_password}
            onChange={(e) => handleChange(e)}
            required
            maxlength="10"
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
            maxlength="10"
          />
        </div>
        <div>
          <label>Date_of_birth: </label>
          <input
            type="date"
            name="date_of_birth"
            placeholder="Date of Birth"
            value={input.date_of_birth}
            onChange={(e) => handleChange(e)}
            required
            maxlength="10"
          />
        </div>
        <div>
          <label>Genre: </label>
          <select
           name="genre"
           placeholder="genre"
           value={input.genre}
          >
            <option value= {input.genre}> Female</option>
            <option value= {input.genre}> Male</option>
            <option value= {input.genre}> Other</option>
          </select>
        </div>
          <button type="submit">Register</button>
        {/* <Link to="/Login">
        </Link> */}
      </form>
    </div>
  );
};

export default Register;
