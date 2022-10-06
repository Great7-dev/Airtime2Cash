import styled, { css } from 'styled-components';

export const TransactionContainer = styled.div`
      width: 100%;
table {
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    margin-top: 20px;
    margin-left: 140px;
    width: 70%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  }
  .ad-tran{
    color: #03435F;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5em;
  }
  
  table th {
    color:  #012A4A;
    padding: 15px;
    text-align: center;
  }

  table td {
    color:  #012A4A;
    padding: 15px;
    text-align: center;
  }
  
  table tr:hover {
    background-color: #ddd;
  }
  
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color:  rgba(0, 0, 0, 0.04);
  
    color:#012A4A;
  }

  @media(max-width: 958px){
    table {
      margin-left:50px;
    }
    .ad-tran{
      font-size: 30px;
      margin-right: 50px;
    }
  }
  @media(max-width: 827px){
    table {
      margin-left:15px;
    }
  }
  @media(max-width: 280px){
    .ad-tran{
      /* font-size: 30px; */
      margin-right: -250px;
    }
  }

  `;
