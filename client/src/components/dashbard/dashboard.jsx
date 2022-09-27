import { useState } from "react";
// import "./dashboard.css";
import Tab from "./Tab";
import Navbar from "../../components/Navbar/NavBar";
// import TransactionHistory from "../transaction-history/TransactionHistory";
import Bankform from "./Bankform/Bankform";
import { IoArrowBackSharp } from "react-icons/io5";
import { bankFormState } from "../../atoms/bankFormAtom";
import { successModalState } from "../../atoms/successModalAtom";
import { useRecoilState } from "recoil";
import { HeadingStyle } from "./ViewAccts/Viewacctstyle";

function Dashboard() {
  const [formState, setFormState] = useRecoilState(bankFormState);
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
      <div className="rectangle2">
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
          ) : active === menu[2] && !formState ? (
            <HeadingStyle>
              <IoArrowBackSharp
                size="1.5rem"
                onClick={() => setFormState(true)}
              />
              <h1>Manage Account</h1>
            </HeadingStyle>
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
                <h3> Sell Airtime component here</h3>
              ) : active === menu[1] ? (
                <h3> WIthdraw Balance component here</h3>
              ) : active === menu[2] ? (
                // <h3> Manage Bank Account component here</h3>
                <Bankform />
              ) : (
                <h3>Transaction History comt here</h3>
                // <TransactionHistory/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
