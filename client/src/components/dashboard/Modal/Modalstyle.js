import styled from "styled-components";

export const Modal = styled.div `
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .mymodal {
    width: 510px;
    height: 410px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .correct {
    width: 96px;
    margin: 26px auto;
  }
  .sucestext {
    color: #21334f;
    margin: 0 0 2% 0;
    /* font-family: 'Inter'; */
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
  .createdtext {
    color: #21334f;
    margin: 0 20%;
    line-height: 24px;
    /* font-family: 'Inter'; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
  .done {
    padding: 15px 10px;
    margin: 5% 4rem;
    border: none;
    background: rgba(226, 0, 16, 0.05);
    color: #de3d6d;
  }
`;