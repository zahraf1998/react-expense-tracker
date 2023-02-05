import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      price: +price,
      date: new Date(date),
    };

    props.onAddExpense(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-6">
          <input
            className="form-control my-2"
            type="text"
            value={title}
            placeholder="Title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="col-6">
          <input
            className="form-control my-2"
            type="number"
            value={price}
            placeholder="Price"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="col-6">
          <input
            className="form-control my-2"
            type="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-8">
              <input
                className="my-2 btn btn btn-secondary form-control"
                type="submit"
                value="Add"
              />
            </div>
            <div className="col-4">
              <button
                className="my-2 btn btn btn-secondary form-control"
                type="button"
                onClick={props.onCancelEditing}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
