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

  let id= 0
  const columns = [
    {
      name: "Id",
      selector: () => id++,
      sortable: true,
    },
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
          return row.amount + " $";
        }
      },
      right: true,
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
      right: true,
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
          <AiFillEdit size="1rem"/>
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
          <MdDelete size="1rem"/>
        </div>
      ),
    },
  ];
  {getOp.length > 0 ? (
    getOp.map((i) => {
      return <div key={i.amount}>{i.amount}</div>;
    })
  ) : (
    <div>Loading...</div>
  )}

  return (
    <div>
      <Navbar />
     
      <DataTable columns={columns} data={getOp} title="Register Operations" />
      <div>
      <h2>Balance :</h2>
      <h2>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(income - expense)}</h2>
      </div>
    </div>
  );
};

export default Home;
