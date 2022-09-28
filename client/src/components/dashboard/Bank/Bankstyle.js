import styled from "styled-components";

export const Bank = styled.div`
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  justify-content: space-between;
  padding: 0.5rem 1rem;
  p {
    margin: 0;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .acctinfo {
    /* font-family: 'Inter'; */

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #012a4a;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 1rem;
  }
  .acctinfo p {
    text-align: left;
  }
  .btnn {
    align-self: center;
    background-color: #0000000d;
    font-size: 14px;
    color: #012a4a;
    padding: 10px;
    border-radius: 100px;
  }
  @media(max-width: 599px){
    p{
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 360px) {
    .acctinfo {
      font-size: 9px;
      margin-left: 2rem;
    }
    .btnn{
      font-size: 9px;
    }
  }
`;
