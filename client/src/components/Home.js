import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Form from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getOperationsDb } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  let income = 0;
  let expenses = 0;

  const getOp = useSelector(({ getOperations }) => getOperations);
  console.log("getOp: ", getOp);
  getOp.map((i)=>{
    if(i.type === "Ingreso"){
      return income = income + i.amount
    }
    if(i.type === "Egreso"){
      return expenses = expenses + i.amount
    }
  })


  return (
    <div>
      <Navbar />
      {getOp.length > 0 ? (
        getOp.map((i) => {
          return <div key={i.amount}>{i.amount}</div>;
        })
      ) : (
        <div>Loading...</div>
      )}
      <h2>{income}</h2>
      <h2>{expenses}</h2>

      <h3>{income - expenses}</h3>
    </div>
  );
};

export default Home;
