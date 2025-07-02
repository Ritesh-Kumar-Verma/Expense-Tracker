import React from "react";
import "./ExpensesSetting.css";
const ExpensesSetting = ({ expenseList, addExpense }) => {
  const deleteExpenseItem = (index) => {
    const newExpenseList = expenseList.filter((_, i) => i !== index);
    addExpense(newExpenseList);
    localStorage.setItem("expenseList", JSON.stringify(newExpenseList));
  };

  return (
    <div className="expenses-setting">
      <div className="header"></div>
      <div className="main">
        <div className="item-table">
          <div className="grid-header">Expense Title</div>
          <div className="grid-header">Amount (₹)</div>
          <div className="X"></div>
          {expenseList.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="grid-cell" key={index}>
                  {data.title}
                </div>
                <div className="grid-cell" key={index}>
                  {data.amount}
                </div>
                <button
                  className="delete-button"
                  key={index}
                  onClick={() => {
                    deleteExpenseItem(index);
                  }}
                >
                  Del
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpensesSetting;
