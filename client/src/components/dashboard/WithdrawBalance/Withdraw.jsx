import React, { useState } from "react";
import { WithdrawStyle, CustomStyle } from "./WithdrawStyle";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from "react-select";
import { useEffect } from "react";
import { getUserBanks } from "../../../api/auth";


const Withdraw = () => {
  const [banks, setBanks] = useState([])
  const [formData, setFormData]= useState({})

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
  // console.log(selectedOption)
  setFormData({...formData, accName: selectedOption.bank.accName, accNumber: selectedOption.bank.accNumber})
}

  console.log(formData)
  useEffect(()=> {
    caller();
  }, [])

  const accounts = ['Current', 'Savings', 'Fixed Deposit', 'Joint', 'Domiciliary', 'Corporate', 'Non-resident Nigerian']

    const validationSchema = Yup.object({
      account: Yup.string().required('please select an account').oneOf(accounts),
      account_name: Yup.string().required('please enter an account name'),
      accountNumber: Yup.number().min(11).max(11).required(),
      amount: Yup.number().required(),
      password: Yup.string().required(),
    })
  // INITIAL VALUES

  const initialValues = {
    account: '',
    account_name: '',
    accountNumber: '',
    amount: '',
    password: '',
  }
  //SUBMIT

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }
  // MAPPING NETWORK ARRAY
  const accountOpts = accounts.map((account, key) => (
    <option value={account} key={key}>
      {account}
    </option>
  ))
  
    // ERROR MESSAGE
    const renderError = (message) => <p className='is_danger' style={{color:'red'}}>{message}</p>

  return (
    <WithdrawStyle>
      <div className="sellAirtime-header">
        <h1 className="Acct">Withdraw</h1>
        
      </div>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
      await onSubmit(values)
      resetForm()
      }}
      >
        <Form action="" className="bankform">
          <label htmlFor="">Select Account</label>
          <Select
            className="selections"
            styles={CustomStyle}
            onChange={handleChange}
            options={bankOptions}
            placeholder="Select Account"
            acountname="Network"
          
          />

          <ErrorMessage name='account' render={renderError} />

          <label htmlFor="">Account Name</label>
          <input
            type='text'
            placeholder='BabatundeOla'
            name='account_name'
            className='withdraw_input_background'
            defaultValue={formData.accName}
            />
          <ErrorMessage name='account_name' render={renderError} />
          
          <label htmlFor="">Account Number</label>
          <input
          type='text'
          placeholder='1234567890'
          className='withdraw_input_background withdraw_input'
          name='accountNumber'
          defaultValue={formData.accNumber}

          />
          <ErrorMessage name='accountNumber' render={renderError} />
          <label htmlFor="">Amount</label>
          <Field
          type='text'
          placeholder='NGN'
          className='withdraw_input'
          name='amount'
          />
          <ErrorMessage name='amount' render={renderError} />
          <label htmlFor="">Password</label>
          <Field
          type='password'
          placeholder='Password'
          className='withdraw_input'
          name='password'
          />
          <ErrorMessage
          name='password'
          render={renderError}
          />
          
          <button type="submit" className="btnnn">
            Withdraw
          </button>
        </Form>
      </Formik>
        
      

      
    </WithdrawStyle>
  );
};
export default Withdraw;
