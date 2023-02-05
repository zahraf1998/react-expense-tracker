import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="d-flex flex-column flex-sm-row justify-content-between align-items-center bg-dark text-light my-3 p-2 px-4 gap-2 gap-sm-5">
      <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
      </div>
      <div className="bg-light rounded text-dark text-center fs-6 p-2 px-3 expense-price">
        ${props.price}
      </div>
    </Card>
  );
};

export default ExpenseItem;
