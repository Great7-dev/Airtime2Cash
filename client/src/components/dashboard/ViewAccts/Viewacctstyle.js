import styled from "styled-components";

export const Viewacct = styled.div `
width:100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .btnnnn {
    cursor: pointer;
    display: flex;
    margin-top: 50px;
    padding: 16.5px 71px;
    align-self: start;
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    align-items: center;
    border: none;
  }

  .info-bank {

    display: flex;

    flex-direction: column;

    gap: 24px;

    max-height: 250px;

    overflow-y: scroll;

  }

  @media (max-width: 599px) {
    .btnnnn {
      margin: 40px 32px 0 32px;
    }
  
  }
  @media (max-width: 360px) {
    .btnnnn {
      margin: 50px 40px 0 45px;
    }
  
  }
`;

export const HeadingStyle = styled.div `
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 15%;
  gap: 50px;
  margin-bottom: 2rem;
  margin-top: 60px;
  h1 {
    margin: 0;
  }
`;