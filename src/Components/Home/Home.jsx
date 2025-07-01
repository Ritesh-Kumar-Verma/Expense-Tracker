import "./Home.css";
import ExpenseCard from "../Cards/ExpenseCard/ExpenseCard";
import ListOfExpense from "../Cards/ListOfExpense/ListOfExpense";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import OverallExpense from "../OverallExpense/OverallExpense";

const Home = ({expenseList,addExpense}) => {
  
  return (
    <div className="main-and-header">
      <div className="header"></div>

      <div className="main">

        <div className="left">

        <ExpenseCard expenseList={expenseList} addExpense = {addExpense} />
        <OverallExpense expenseList={expenseList}/>
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
