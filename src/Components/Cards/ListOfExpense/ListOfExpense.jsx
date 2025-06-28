import React from "react";
import "./ListOfExpense.css";

const ListOfExpense = ({ expenseList }) => {
  const total = expenseList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="expense-grid">
      <div className="grid-header">Expense Title</div>
      <div className="grid-header">Amount (₹)</div>

      {expenseList.map((data, index) => (
        <React.Fragment key={index}>
          <div className="grid-cell">{data.title}</div>
          <div className="grid-cell">₹{data.amount}</div>
        </React.Fragment>
      ))}

      <div className="total">Total</div>
      <div className="total-value">₹{total}</div>
    </div>
  );
};

export default ListOfExpense;
