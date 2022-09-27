import React from 'react'
import { Bank } from './Bankstyle'

const BankInfo = () => {
  return (
    <Bank>
    {/* <div className='views'> */}
        <div className='acctinfo'> 
        <p >First Bank</p>
        <p>2435273863</p>
        <p>Babatunde Makinde</p>
        </div>
        <button className='btnn'>Remove</button>
    {/* </div> */}
    
    </Bank>
  )
}

export default BankInfo