import React, { useState } from "react";
import { WithdrawStyle, CustomStyle } from "./WithdrawStyle";
//import * as Yup from 'yup'
//import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputField from '../../utils/Input/Input';
import {Label} from '../SellAirtimeForm/SellAirtimeFormStyle'
import Select from "react-select";
import { useEffect } from "react";
import { getUserBanks ,withdrawBalance} from "../../../api/auth";
//import axios from "axios";



const Withdraw = () => {
  const [banks, setBanks] = useState([])
  const [formData, setFormData]= useState({})
  const [data, setData]= useState({})


  const caller = async () => {
  const res = await getUserBanks();
  setBanks(res)
  }
const bankOptions = banks.map((bank) => {
  return {
    value: bank.bankName,
    label: `${bank.bankName} - ${bank.accNumber}`,
    bank: bank
  }
})


const handleChange = (selectedOption) => {
   
  setFormData({...formData, accName: selectedOption.bank.accName, accNumber: selectedOption.bank.accNumber, bankName:selectedOption.bank.bankName,})
}

const bankName = formData.bankName
const accNumber = formData.accNumber
  
  useEffect(()=> {
    caller();
  }, [])

  const handleChange2 = (e) => {
    const {name,value} = e.target
    setData({...data, [name]:value})
  }
  let amount=data.amount;
  
    console.log(bankName,accNumber,amount)
      const handleSubmit= async (e)=> {
      e.preventDefault();
      console.log(bankName,accNumber,amount)
      const res = await withdrawBalance({accNumber,bankName,amount}) 
      console.log(res)
      //setFormData(res)
      localStorage.setItem('wallet',res.newwallet)

    }

  return (
    <>
    <WithdrawStyle>
      <div className="sellAirtime-header">
        <h1 className="Acct">Withdraw</h1>
      </div>

      <form className="bankform">
      <label htmlFor="Network">Select Account</label>
      <Select
        className="selections"
        styles={CustomStyle}
        onChange={handleChange}
        options={bankOptions}
        placeholder="Select Account"
        name="bankName"
        value={formData.label}
       />

              <Label>
              <InputField
                  type="input"
                  className="input"
                  label="Account Name"
                  placeholder="BabatundeOla"
                  name="account_name"
                  //change={(e) => setphoneNumber(e.target.value)}
                  value={formData.accName}
                />

                <InputField
                  type="input"
                  className="input"
                  label="Account Number"
                  placeholder="1234567890"
                  name="accNumber"
                  //change={(e) => setphoneNumber(e.target.value)}
                  value={formData.accNumber}
                />

                <InputField
                  type="input"
                  className="input"
                  label="Amount"
                  placeholder="NGN"
                  name="amount"
                  change={handleChange2}
                  value={amount}
                />
      
                <InputField
                  type="password"
                  className="input"
                  label="Password"
                  name="password"
                  change={handleChange2}
                  //value={formData.accNumber}
                />
              </Label>
      <button type="submit" className="btnnn" onClick={handleSubmit}>
               Withdraw
      </button>


       
      </form> 

    </WithdrawStyle>
    </>
  )
}

export default Withdraw;








