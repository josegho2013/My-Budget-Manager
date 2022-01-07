import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addOperations } from "../redux/actions/actions";

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

  console.log("ppopopo: ", props);
  console.log("params: ", params);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (params.id) {
      const dataById = getOp.filter((i) => {
        if (i.id === params.id) {
          return i;
        }
      });
      console.log("dataById: ", dataById);

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
    dispatch(addOperations(newOperations));
    setInput({
      type: "",
      concept: "",
      amount: "",
      date: "",
    });

    setCreate(true);
  }

  return (
    <div>
      <h1> Register Operations</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> Type Operations: </label>
          <select
            name="type"
            value={input.type}
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
        <button type="submit">Save Operation</button>
      </form>
    </div>
  );
};

export default Form;
