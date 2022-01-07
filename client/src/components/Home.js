import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Form from "./Navbar";
import DataTable from "react-data-table-component";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux";
import { getOperationsDb } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  let income = 0;
  let expense = 0;

  const getOp = useSelector(({ getOperations }) => getOperations);
  console.log("getOp: ", getOp);
  getOp.map((i) => {
    if (i.type === "Income") {
      return (income = income + i.amount);
    }
    if (i.type === "Expense") {
      return (expense = expense + i.amount);
    }
  });

  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Concept",
      selector: (row) => row.concept,
      sortable: true,
    },
    {
      name: "Income",
      selector: (row) => {
        if (row.type === "Income") {
          return row.amount;
        }
      },
      sortable: true, with:"10%",
      conditionalCellStyles: [
        {
          when: (row) => row.amount > 0,
          style: {
            color: "green",
          },
        },
      ],
    },
    {
      name: "Expense",
      selector: (row) => {
        if (row.type === "Expense") {
          return row.amount;
        }
      },
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.amount > 0,
          style: {
            color: "red",
          },
        },
      ],
    },
    {
      cell: ({ row }) => (
        <div
      
          aria-label="edit"
          color="secondary"
          // onClick={() => editRow(row)}
        >
          <AiFillEdit size="2rem"/>
        </div>
      ),
    },
    {
      cell: ({ row }) => (
        <div
          aria-label="delete"
          color="secondary"
          
          // onClick={() => editRow(row)}
        >
          <MdDelete size="2rem"/>
        </div>
      ),
    },
  ];

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
      {/* <h2>{income}</h2>
      <h2>{expenses}</h2> */}

      <DataTable columns={columns} data={getOp} title="Register Operations" />
      <h3>{income - expense}</h3>

    </div>
  );
};

export default Home;
