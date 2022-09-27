import React from 'react'
import { Parent } from './TransactionCard.style'
import WithdrawFund from './TransactionCard'


function TransactionHistory() {
  return (
    <Parent>
        {/* <h1>Transactios</h1> */}
        <WithdrawFund />
        <WithdrawFund />
        <WithdrawFund />
        <WithdrawFund />
    </Parent>
  )
}

export default TransactionHistory