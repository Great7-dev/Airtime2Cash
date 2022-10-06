import React,{useEffect,useState} from 'react'
import { Container } from './WithdrawalHistory.style'
import { Parent } from './WithdrawalCard.style'
import { getwithdrwalhistory } from '../api/auth'

function WithdrawCard() {
  const [withdrwalHistory,setWithdrwalHistory]= useState([])

  const withdrawHistory = async () =>{
    const data = await getwithdrwalhistory()
    console.log(data,"before");
    setWithdrwalHistory(data)
   }
  useEffect(() =>{
    withdrawHistory()
  },[])
return (
  <Parent>
   {
   withdrwalHistory.map((value, index)=> {
    return  <Container className='media'>
    <div className='box'>
    <p className='left-side-p'><b>{new Date(value.createdAt).toLocaleDateString('ng', {
          weekday: 'long'
      })},</b> {new Date(value.createdAt).toLocaleTimeString('ng', {
        hour: '2-digit', minute: '2-digit'
    })}</p>
      <p className='left-side-p'>Withdraw Fund</p>
      <p className='left-side-p'>{new Date(value.createdAt).toDateString()}</p>
    </div><div>
        <p className='received'>{value.bankName}</p>
        <p >{value.amount}</p>
      </div> 
  </Container>
    })
  } 
  </Parent>
  )
}
export default WithdrawCard