import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiHandCoinLine } from "react-icons/ri";
import {
  addOperations,
  updateOperations,
  getOperationsDb,
} from "../redux/actions/actions";
import Navbar from "./Navbar";
import "../styles/Form.css";
import "../App.css";

const Form = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [create, setCreate] = useState(false);
  const getOp = useSelector(({ getOperations }) => getOperations);

  const [input, setInput] = useState({
    type: "",
    concept: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (params.id) {
      const dataById = getOp.filter((i) => {
        if (i.id === params.id) {
          return i;
        }
        return i;
      });

      setInput({
        type: dataById[0].type,
        concept: dataById[0].concept,
        amount: dataById[0].amount,
        date: dataById[0].date,
      });
    }
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    const newOperations = {
      type: input.type,
      concept: input.concept,
      amount: input.amount,
      date: input.date,
    };

    e.preventDefault();
    if (props.edit) {
      dispatch(updateOperations(newOperations, params.id));
    } else {
      dispatch(addOperations(newOperations));
    }
    setInput({
      type: "",
      concept: "",
      amount: "",
      date: "",
    });

    setCreate(true);
  }

  const reset = () => {
    dispatch(getOperationsDb());
  };

  return (
    <div>
      <Navbar form={true} home={true} />
      <div className="form">
        <div className="in-flex">
          <h1>{props.edit ? "Edit Operation" : "Register Operations"}</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Type Operations: </label>
              <select
                name="type"
                value={input.type}
                disabled={props.edit ? true : false}
                onChange={(e) => handleChange(e)}
              >
                <option default>Select</option>
                <option>Income</option>
                <option>Expense</option>
              </select>
            </div>
            <div>
              <label>Concept: </label>
              <textarea
                type="text"
                name="concept"
                placeholder="concept"
                value={input.concept}
                onChange={(e) => handleChange(e)}
                required
                maxLength="200"
              />
            </div>
            <div>
              <label>Amount: </label>
              <input
                required
                type="number"
                name="amount"
                placeholder="Amount"
                value={input.amount}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Date: </label>
              <input
                required
                type="date"
                name="date"
                placeholder="Date"
                maxLength="200"
                value={input.date}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formButton">
              <button type="submit">
                {props.edit ? "Update Operation" : "Save Operation"}
              </button>
            </div>
          </form>
        </div>
        {create ? (
          <div className="popUp" transition={{ duration: 0.2 }}>
            <h1>
              {" "}
              <RiHandCoinLine size="4rem" />
              GOOD <br />
              JOB
            </h1>
            <p>
              Your register was {props.edit ? "edited" : "created"}{" "}
              successfully!
            </p>
            <Link to="/home">
              <button onClick={() => reset()} className="button">
                Home
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Form;
