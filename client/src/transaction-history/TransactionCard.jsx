import React from 'react'

import { Container } from './TransactionHistory.style'

function WithdrawFund() {
  return (
    <Container className='media'>
    <div>
        <p className='left-side-p'><span>Today</span>,10:25AM</p>
        <p className='left-side-p'>Withdraw fund</p>
        <p className='left-side-p'>25/5/2022</p>
    </div>
    <div>
        <p className='received'>Received</p>
        <p>N,5000</p>
    </div>  
    </Container>
  )
}

export default WithdrawFund