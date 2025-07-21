import React from 'react';
import './OverallExpense.css';

const OverallExpense = ({ expenseList }) => {
  const groupExpense = expenseList.reduce((acc, currentExpense) => {
    if (acc[currentExpense.title]) {
      acc[currentExpense.title] += currentExpense.amount;
    } else {
      acc[currentExpense.title] = currentExpense.amount;
    }
    return acc;
  }, {});

  return (
    <div className="expense-grid">
      <div className="grid-header">Expense Title</div>
      <div className="grid-header">Amount</div>

      {Object.entries(groupExpense).map(([title, amount], index) => (
        <React.Fragment key={index}>
          <div className="grid-cell">{title}</div>
          <div className="grid-cell">{amount}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverallExpense;
