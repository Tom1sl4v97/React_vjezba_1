import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const openNewExpenseHandler = () => {
    setNewExpense(true);
  };

  const closeNewExpenseHandler = () => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {newExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancleNewExpense={closeNewExpenseHandler}
        />
      ) : (
        <button onClick={openNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
