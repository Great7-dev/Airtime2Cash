import React from 'react'
import { Container } from './TransactionHistoryCard.style'


function TransactionHistoryCard(props) {
  return (
    <Container>
      <h1>Transactions</h1>
<table>
  <tr>
    <th>Phone Number</th>
    <th>Amount sent</th>
    <th>Date</th>
    <th>Network</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>07089678855</td>
    <td>N2,000</td>
    <td>26/8/2022</td>
    <td>MTN</td>
    <td>Canclled</td>
  </tr>
  <tr>
    <td>07089678855</td>
    <td>N2,000</td>
    <td>26/8/2022</td>
    <td>Etisalat</td>
    <td>Sent</td>
  </tr>
  <tr>
    <td>07089678855</td>
    <td>N2,000</td>
    <td>20/8/2022</td>
    <td>Etisalat</td>
    <td>Sent</td>
  </tr>
  <tr>
    <td>07089678855</td>
    <td>N2,000</td>
    <td>26/9/2022</td>
    <td>Glo</td>
    <td>Sent</td>
  </tr>
</table>

    </Container>
  )
}

export default TransactionHistoryCard