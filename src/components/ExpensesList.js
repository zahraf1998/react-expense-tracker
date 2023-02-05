import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="m-2">No expenses.</p>;
  }
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
