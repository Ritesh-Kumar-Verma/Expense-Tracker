import "./Main.css";
import ExpenseCard from "../Cards/ExpenseCard/ExpenseCard";
import ListOfExpense from "../Cards/ListOfExpense/ListOfExpense";
import TimeCard from "../Cards/TimelyExpense/TimeCard";
import { useState } from "react";

const Main = () => {
  const [expenseList, addExpense] = useState([
    { title: "Vegetables", amount: 240 },
    { title: "Petrol", amount: 100 },
    { title: "Egg Roll", amount: 40 },
  ]);

  return (
    <div className="main-and-header">
      <div className="header"></div>

      <div className="main">


        <ExpenseCard expenseList={expenseList} addExpense = {addExpense} />
        <ListOfExpense expenseList={expenseList} />
        <TimeCard />

        
        
      </div>
    </div>
  );
};

export default Main;
