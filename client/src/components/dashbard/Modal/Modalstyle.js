import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  /* color: red; */

  .mymodal{
    /* position: absolute; */
    /* padding: 0 9%; */
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    margin-left: 30%;
    margin-top: 13%;
    width: 30rem;
    height: 25rem;
    /* background-color: red; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .correct{ 
    box-sizing: border-box;
width: 100%;
height: 96px;
margin: 26px 0; 
  }
.sucestext{
    color: #21334F;
    margin:0 0 2% 0;
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
}
.createdtext{
    color: #21334F;
    margin:0 20%;
    line-height:24px;
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 400;
font-size: 14px;
}
.done{
    padding: 15px 10px;
    margin: 5% 4rem;
    border:none;
    background: rgba(226, 0, 16, 0.05);
    color:#DE3D6D;

}
  
`;