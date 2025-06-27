import React from 'react'
import './Main.css'
import ExpenseCard from '../Cards/ExpenseCard/ExpenseCard'
import ListOfExpense from '../Cards/ListOfExpense/ListOfExpense'

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

          
          <ExpenseCard/>
          <ListOfExpense expenseList = {expenseList}/>

        </div>

    </div>
  )
}

export default Main