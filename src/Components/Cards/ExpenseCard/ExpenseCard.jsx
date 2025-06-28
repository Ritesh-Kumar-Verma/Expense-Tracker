import React, { useRef } from 'react'
import './ExpenseCard.css'


const ExpenseCard = ({expenseList,addExpense}) => {
  const inputTitleRef = useRef(null);
  const inputAmountRef = useRef(null);


  const addExpenseToList = (inputTitle , inputAmount)=>{
    const title = inputTitle.current.value;
    const amount = parseFloat(inputAmount.current.value);
  
    addExpense(prevData => ([...prevData, {title,amount}]));
    inputTitleRef.current.value = '';
    inputAmountRef.current.value ='';
  
  }


  return (
    <div className="add-expense-card">
        <div className="title">
            <p>Add Expense</p>
        </div>
        
        <input type="text" ref={inputTitleRef} placeholder='Enter Title'/>
        <input type="text" ref={inputAmountRef} placeholder='Enter Amount'/>
        <button onClick={()=>{addExpenseToList(inputTitleRef , inputAmountRef);console.log(expenseList)}}>Add</button>
        
    </div>
  )
}

export default ExpenseCard