import React from "react";
import { WithdrawStyle, CustomStyle } from "./WithdrawStyle";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Withdraw = () => {
  const accounts = ['Current', 'Savings', 'Fixed Deposit', 'Joint', 'Domiciliary', 'Corporate', 'Non-resident Nigerian']

    const validationSchema = Yup.object({
      account: Yup.string().required('Please Select An Account').oneOf(accounts),
      accountName: Yup.string().required('Please Enter an Account Name'),
      accountNumber: Yup.number().min(10).max(11).required(),
      amount: Yup.number().required(),
      password: Yup.string().required(),
    })
  // INITIAL VALUES

  const initialValues = {
    account: '',
    accountName: '',
    accountNumber: '',
    amount: '',
    password: '',
  }
  //SUBMIT

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }
  // MAPPING NETWORK ARRAY
  const networkOptions = accounts.map((account, key) => (
    <option value={account} key={key}>
      {account}
    </option>
  ))
  
    // ERROR MESSAGE
    const renderError = (message) => <p className='is_danger'>{message}</p>

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
          <Field
          name='account'
          as='select'
          className='selections'
          styles={CustomStyle}
          type='text'
          placeholder='Select'
          >
            <option value={''} className='withdraw_input_background'>Select</option>
            {networkOptions}
          </Field>

          <ErrorMessage name='account' render={renderError} />

          <label htmlFor="">Account Name</label>
          <Field
            type='text'
            placeholder='BabatundeOla'
            name='accountName'
            className='withdraw_input_background'
            />
          <ErrorMessage name='accountName' render={renderError} />
          
          <label htmlFor="">Account Number</label>
          <Field
          type='text'
          placeholder='1234567890'
          className='withdraw_input_background withdraw_input'
          name='accountNumber'
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
