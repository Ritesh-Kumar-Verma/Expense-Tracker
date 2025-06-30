import "./Home.css";
import ExpenseCard from "../Cards/ExpenseCard/ExpenseCard";
import ListOfExpense from "../Cards/ListOfExpense/ListOfExpense";
import TimeCard from "../Cards/TimelyExpense/TimeCard";
import { useEffect, useState } from "react";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const Home = () => {
  const [expenseList, addExpense] = useState([]);

  useEffect(()=>{
    const storedList = localStorage.getItem("expenseList");
    if(storedList){
      addExpense(JSON.parse(storedList));
    }
  },[]);

  
  return (
    <div className="main-and-header">
      <div className="header"></div>

      <div className="main">

        <div className="left">

        <ExpenseCard expenseList={expenseList} addExpense = {addExpense} />
        <TimeCard />
        </div>
        <div className="mid">
        <ListOfExpense expenseList={expenseList} />
        </div>
        <div className="right">
          <ExpenseChart expenses={expenseList} />
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;
