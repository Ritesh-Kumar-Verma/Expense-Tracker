import React from 'react'

const Trial = () => {
  const expenseList=
  [
    { title: "Vegetables", amount: 240 },
    { title: "Petrol", amount: 100 },
    { title: "Egg Roll", amount: 40 },
  ]
  
  
  
  return (
    <div>
      
      {expenseList.map((data , index)=>{return (<h1 key={index}>{data.title} {data.amount}</h1>)})}



    </div>
  )
}

export default Trial

