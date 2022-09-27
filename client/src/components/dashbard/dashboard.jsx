import { useState } from "react";
// import "./dashboard.css";
import Tab from "./Tab";
import Navbar from "../../components/Navbar/NavBar";
// import TransactionHistory from "../transaction-history/TransactionHistory";
import Bankform from "./Bankform/Bankform";
<<<<<<< HEAD
import SellAirtimeForm from "./SellAirtimeForm/SellAirtimeForm";
=======
>>>>>>> d9b190483708dc0a6d59cd55f823202e3af19df1
import { IoArrowBackSharp } from "react-icons/io5";
import { bankFormState } from "../../atoms/bankFormAtom";
import { successModalState } from "../../atoms/successModalAtom";
import { useRecoilState } from "recoil";
import { HeadingStyle } from "./ViewAccts/Viewacctstyle";
<<<<<<< HEAD
import Withdraw from "./WithdrawBalance/Withdraw";
=======
import TransactionHistory from "../../transaction-history/TransactionHistory";

function Dashboard() {
  const [formState, setFormState] = useRecoilState(bankFormState);
  const menu = [
    "Sell airtime",
    "Withdraw Balance",
    "Manage Bank Account",
    "Transaction History",
  ];
>>>>>>> d9b190483708dc0a6d59cd55f823202e3af19df1

  const [active, setActive] = useState(menu[0]);

<<<<<<< HEAD
function Dashboard() {
  const [formState, setFormState] = useRecoilState(bankFormState);
  const menu = [
    "Sell airtime",
    "Withdraw Balance",
    "Manage Bank Account",
    "Transaction History",
  ];

  const [active, setActive] = useState(menu[0]);
=======
>>>>>>> d9b190483708dc0a6d59cd55f823202e3af19df1
  return (
    <div className="App">
      <Navbar />
      <div className="rectangle2">
<<<<<<< HEAD
        <h1></h1>
       
=======
>>>>>>> d9b190483708dc0a6d59cd55f823202e3af19df1
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
<<<<<<< HEAD
                <SellAirtimeForm/>
              ) : active === menu[1] ? (
                // <h3> WIthdraw Balance component here</h3>
                <Withdraw />
              ) : active === menu[2] ? (
                // <h3> Manage Bank Account component here</h3>
                <Bankform />
              ) : (
                <h3>Transaction History comt here</h3>
                // <TransactionHistory/>
=======
                <h3> Sell Airtime component here</h3>
              ) : active === menu[1] ? (
                <h3> WIthdraw Balance component here</h3>
              ) : active === menu[2] ? (
                <Bankform />
              ) : (
                <TransactionHistory/>
>>>>>>> d9b190483708dc0a6d59cd55f823202e3af19df1
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
