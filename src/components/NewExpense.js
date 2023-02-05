import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  const addExpenseHandler = () => {
    setIsEditing(true);
  };

  const addExpense = (expense) => {
    props.changeExpenses(expense);
    setIsEditing(false);
  };
  return (
    <div className="bg-dark rounded p-2 mb-3">
      {isEditing ? (
        <ExpenseForm
          onAddExpense={addExpense}
          onCancelEditing={cancelEditingHandler}
        />
      ) : (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-secondary my-3"
            onClick={addExpenseHandler}
          >
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
