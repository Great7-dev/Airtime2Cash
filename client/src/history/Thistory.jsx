import React,{useState,useEffect} from 'react'
import { Parent } from './WithdrawalCard.style'
import { Container } from './WithdrawalHistory.style'
import { getThistory } from '../api/auth'

function Thistory() {
  const [transactionHistory,setTransactionHistory]= useState([])

  const  getTransactionHistory = async () =>{
    const data = await getThistory()
    //console.log(data,"before");
    setTransactionHistory(data)
   }
  useEffect(() =>{
    getTransactionHistory()
  },[])
//console.log("after",transactionHistory);


  return (
    <Parent>
   
     {
     transactionHistory.map((value, index)=> {
      return  <Container className='media'>
      <div className='box'>
      <p className='left-side-p'><b>{new Date(value.createdAt).toLocaleDateString('ng', {
                                    weekday: 'long'
                                })},</b> {new Date(value.createdAt).toLocaleTimeString('ng', {
                                    hour: '2-digit', minute: '2-digit'
                                })}</p>
        <p className='left-side-p'>{value.network}</p>
        <p className='left-side-p'>{new Date(value.createdAt).toDateString()}</p>
      </div><div>
          <p className='received'>{value.uStatus}</p>
          <p >{value.airtimeAmount}</p>
        </div> 
    </Container>
      })
    } 
    </Parent>
    )
}

export default Thistory