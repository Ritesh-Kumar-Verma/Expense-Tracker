import React from 'react'
import './OverallExpense.css'
const OverallExpense = ({expenseList}) => {

  const groupExpense = expenseList.map((acc, currentExpense)=>{
    if(acc[currentExpense.title]){
      acc[currentExpense.title]+=currentExpense.amount;
    }
    else{
      acc[currentExpense.title] = currentExpense.amount; 
    }
    return acc;
  },{});


  return (
    <div className='expense-grid'>
        <div className="grid-header">Expense Title</div>
        <div className="grid-header">Amount</div>

        {
          groupExpense.map((data,index)=>{return <React.Fragment  key="index">
            
            <div grid-cell>{data.title}</div>
            <div>{data.amount}</div>
            
            </React.Fragment>
          })
        }

    </div>
  )
}

export default OverallExpense