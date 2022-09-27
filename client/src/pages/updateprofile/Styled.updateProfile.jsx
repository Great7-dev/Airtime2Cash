import styled from "styled-components";




//Styled Component
const AfterNavBar = styled.div`
   width: 100vw;
   height: 100px;
   padding-top: 100px;
  background: rgba(222, 61, 109, 0.1);
`;

 const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:40rem;
  margin: auto;
  justify-content:center;
  align-content:center;
  align-items:center;
  background:white;

  @media screen and (max-width: 900px) {
    padding: 45px 140px;
    width: 20rem;
  }
  @media screen and (max-width: 800px) {
    padding: 30px 120px;
    width: 15rem;
  }
  @media screen and (max-width: 500px) {
    padding: 15px 100px;
    width: 10rem;
    
  } ;
`

const InputStyle = styled.input`
 display:flex;
 flex-direction:column;
width: 320px;
height: 48px;
font-size:14px;
padding: 12px 20px;
margin: 15px 0;
box-sizing: border-box;
@media screen and (max-width: 900px) {
    width: 300px;
    height: 40px;
    font-size:12px
  }
@media screen and (max-width: 800px) {
    width: 280px;
    height: 30px;
    font-size:10px;
  }
@media screen and (max-width: 500px) {
    width: 260px;
    height: 25px;
    font-size: 10px
  }
`

const SaveBtnStyle = styled.button`
  width: 198px;
  height: 48px;
  background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
  border: none;
  @media screen and (max-width: 900px) {
    width: 190px;
    height: 48px;
  }
  @media screen and (max-width: 800px) {
    width: 180px;
    height: 48px;
  }
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 50px;
  }
`
export {
    SaveBtnStyle,
    InputStyle,
    Container,
    AfterNavBar
}