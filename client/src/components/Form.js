import React from "react";

const Form = () => {
  return (
    <div>
        <h1> Register Operations</h1>
      <form>
        <div>
          <label> Type Operations: </label>
          <select>
            <option>Ingreso</option>
            <option>Egreso</option>
          </select>
        </div>
        <div>
          <label>Concept: </label>
          <textarea></textarea>
        </div>

        <div>
          <label>Amount: </label>
          <input></input>
        </div>
        <div>
          <label>Date: </label>
          <input></input>
        </div>
      </form>
      
        <button>Save Operation</button>
     

    </div>
  );
};

export default Form;
