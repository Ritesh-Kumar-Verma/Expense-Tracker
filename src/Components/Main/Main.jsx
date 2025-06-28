import React from 'react'
import './Main.css'
import ExpenseCard from '../Cards/ExpenseCard/ExpenseCard'
import ListOfExpense from '../Cards/ListOfExpense/ListOfExpense'
import TimeCard from '../Cards/TimelyExpense/TimeCard';

let expenseList = {
  "Vegetables" : 240,
  "Petrol" :100,
  "Egg Roll" : 40

};

const Main = () => {
  return (
    <div className="main-and-header">
        <div className="header">
            
        </div>
        
        <div className="main">

          
          <ExpenseCard expenseList={expenseList}/>
          <ListOfExpense expenseList = {expenseList}/>
          <TimeCard/>

        </div>

    </div>
  )
}

export default Main