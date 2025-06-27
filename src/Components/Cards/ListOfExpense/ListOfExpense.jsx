import React from "react";
import "./ListOfExpense.css";

const ListOfExpense = ({ expenseList }) => {
  const total = Object.values(expenseList).reduce(
    (sum, amount) => sum + amount,
    0
  );

  return (
    <div className="expense-grid">
      <div className="grid-header">Expense Title</div>
      <div className="grid-header">Amount (₹)</div>

      {Object.entries(expenseList).map(([title, amount], index) => (
        <React.Fragment key={index}>
          <div className="grid-cell">{title}</div>
          <div className="grid-cell">₹{amount}</div>
        </React.Fragment>
      ))}

      <div className="total">Total</div>
      <div className="total-value">₹{total}</div>
    </div>
  );
};

export default ListOfExpense;
