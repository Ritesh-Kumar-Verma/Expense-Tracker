import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
const Sidebar = ({tab,openTab}) => {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
          <img src={assets.boy} alt="" />
          <p>Expense Tracker</p>
        </div>

        <div className="menu">
          <div className="home menu-item" onClick={()=>{openTab("Home");}}>
            <img src={assets.home}  alt="" />
            <p>Home</p>
          </div>
          <div className="expense menu-item" onClick={()=>{openTab("ExpensesSetting");}}>
            <img src={assets.expense} alt="" />
            <p>Expense</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
