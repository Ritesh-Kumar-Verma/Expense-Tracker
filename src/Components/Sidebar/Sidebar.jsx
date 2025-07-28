import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
const Sidebar = ({tab,openTab}) => {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
          <img src={assets.boy} alt="" />
        </div>

        <div className="menu">
          <div className={`home menu-item ${(tab === "Home")?"active":""}`} onClick={()=>{openTab("Home");}}>
            <img src={assets.home}  alt="" />
            <p>Home</p>
          </div>
          <div className={`expense menu-item ${(tab === 'ExpensesSetting')? "active": ""}`} onClick={()=>{openTab("ExpensesSetting");}}>
            <img src={assets.expense} alt="" />
            <p>Expense</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;



// "home menu-item "