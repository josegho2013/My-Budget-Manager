import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteOperation, getOperationsDb } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    id = 1;
  }, []);

  let income = 0;
  let expense = 0;

  const getOp = useSelector(({ getOperations }) => getOperations);
  const data = getOp.slice(-10);

  data.map((i) => {
    if (i.type === "Income") {
      return (income = income + i.amount);
    }
    if (i.type === "Expense") {
      return (expense = expense + i.amount);
    }
    return
  });

  let id = 1;
  const columns = [
    {
      name: "Id",
      selector: () => id++,
      sortable: true,
      width: "9%",
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
      wrap: true,
      width: "25%",
    },
    {
      name: "Income",
      selector: (row) => {
        if (row.type === "Income") {
          return row.amount + " $";
        }
      },
      right: true,
      sortable: true,
      width: "12%",
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
      right: true,
      sortable: true,
      width: "12%",
      selector: (row) => {
        if (row.type === "Expense") {
          return row.amount + " $";
        }
      },
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
      cell: (row) => (
        <Link to={`/update/${row.id}`}>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            <AiFillEdit size="1rem" />
          </button>
        </Link>
      ),
      name: "Edit",
      center: true,
      sortable: true,
      width: "14%",
    },
    {
      cell: (row) => (
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleDelete(row.id)}
        >
          <MdDelete size="1rem" />
        </button>
      ),
      name: "Delete",
      center: true,
      sortable: true,
      width: "14%",
    },
  ];

  const handleDelete = (id) => {
    dispatch(deleteOperation(id));
    setDeleted(true);
  };

  const reset = () => {
    dispatch(getOperationsDb());
    setDeleted(false);
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10px", padding: "4%" }}>
        <DataTable
          columns={columns}
          data={data}
          title="Registered Operations"
        />
      </div>
      <div className="balance">
        <h2>Balance of Operations</h2>
        <hr />
        <h2>
          Income:{" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(income)}
        </h2>
        <h2>
          Expense:{" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(expense)}
        </h2>
        <hr />
        <h2>
          Total Balance:{" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(income - expense)}
        </h2>
      </div>

      {deleted ? (
        <div className="popUp" transition={{ duration: 0.2 }}>
          <h1>
            GOOD <br />
            JOB
          </h1>

          <p>The register has been successfully eliminated!</p>
          <Link to="/home">
            <button onClick={() => reset()} className="button">
              Close
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
