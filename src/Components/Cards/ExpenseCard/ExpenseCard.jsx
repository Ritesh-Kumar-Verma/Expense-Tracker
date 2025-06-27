import React from 'react'
import './ExpenseCard.css'


const ExpenseCard = () => {
  return (
    <div className="add-expense-card">
        <div className="title">
            <p>Add Expense</p>
        </div>
        
        <input type="text" placeholder='Enter Title'/>
        <input type="text" placeholder='Enter Amount'/>
        <button>Add</button>
        
    </div>
  )
}

export default ExpenseCard