import { useState } from "react";
import "./dashboard.css";
//import Tab from "./Tab";
import Navbar from "../Navbar/NavBar";
import SellAirtimeForm from "./SellAirtimeForm/SellAirtimeForm";
import Withdraw from "./WithdrawBalance/Withdraw";
//import TransactionHistory from "../transaction-history/TransactionHistory";

function Dashboard() {
  const menu = [
    "Sell airtime",
    "Withdraw Balance",
    "Manage Bank Account",
    "Transaction History",
  ];
  const [active, setActive] = useState(menu[0]);
  return (
    <div className="App">
      <Navbar />
      <div className="rectangle2">   </div>
      {/* <h1></h1>
      <h1></h1> */}
      {/* div.banner-container */}
      <div className="frame1">
        {active === menu[0] || active === menu[1] ? (
          <>
         
            <h1>Dashboard</h1>
            <div className="money">
              <h5 className="walletBalance">Wallet balance</h5>
              <h1 className="fig">N21,350.00 </h1>
              <h5 className="account">Account is active</h5>
              </div>
           
          </>
        ) : (
          <h1>{active}</h1>
        )}
        <div className="l">
          <div className="nav">
            {menu.map((item, index) => (
              <div onClick={() => setActive(item)}>{item}</div>
            ))}
          </div>
          <div className="outlet">
            {active === menu[0] ? (
              // <h3> Sell Airtime component here</h3>
              <SellAirtimeForm/>
            ) : active === menu[1] ? (
              // <h3> WIthdraw </h3>
               <Withdraw/>
            ) : active === menu[2] ? (
              <h3> Manage Bank Account component here</h3>
            ) : (
              <h3>Transaction History come here</h3>
              // <TransactionHistory/>
            )}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Dashboard;
