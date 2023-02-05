import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="rounded border text-center px-3 expense-date">
      <div className="font-weight-bold fs-6">{month}</div>
      <div>{year}</div>
      <div className="font-weight-bold fs-5">{day}</div>
    </div>
  );
};

export default ExpenseDate;
