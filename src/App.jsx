import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import ExpensesSetting from './Components/ExpensesSettings/ExpensesSetting'
import { useEffect, useState } from "react";


const App = () => {
  const [expenseList, addExpense] = useState([]);

  useEffect(()=>{
    const storedList = localStorage.getItem("expenseList");
    if(storedList){
      addExpense(JSON.parse(storedList));
    }
  },[]);

  const [tab , openTab] = useState("Home");


  const displayTab=()=>{return (tab ==="Home") ? (<Home expenseList={expenseList} addExpense={addExpense}/>) : (<ExpensesSetting expenseList={expenseList} addExpense={addExpense}/>)};


  return (
    <>
      <Sidebar tab={tab} openTab={openTab}/>
      
      {displayTab()}
      
      
    </>
  )
}

export default App