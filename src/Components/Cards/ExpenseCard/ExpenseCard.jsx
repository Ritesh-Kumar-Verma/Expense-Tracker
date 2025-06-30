import React, { useRef } from "react";
import "./ExpenseCard.css";

const ExpenseCard = ({ expenseList, addExpense }) => {
  const inputTitleRef = useRef(null);
  const inputAmountRef = useRef(null);

  const addExpenseToList = () => {
    const title = inputTitleRef.current.value.trim();
    const amount = parseFloat(inputAmountRef.current.value);

    if (!title || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid title and a positive number for amount.");
      return;
    }

    addExpense((prevData) => {
      const updated = [...prevData, { title, amount }];
      localStorage.setItem("expenseList", JSON.stringify(updated));
      return updated;
    });

    inputTitleRef.current.value = "";
    inputAmountRef.current.value = "";
  };

  return (
    <div className="add-expense-card">
      <div className="title">
        <p>Add Expense</p>
      </div>

      <input type="text" ref={inputTitleRef} placeholder="Enter Title" />
      <input type="number" ref={inputAmountRef} placeholder="Enter Amount" />
      <button onClick={addExpenseToList}>Add</button>
    </div>
  );
};

export default ExpenseCard;
