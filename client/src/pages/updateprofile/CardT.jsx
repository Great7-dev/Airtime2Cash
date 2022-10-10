import React from 'react'
import styled from "styled-components"
import layer5 from "./images/Layer5.svg"
import layer11 from "./images/Layer11.svg"
import vector from "./images/Vector.svg"
import vector2 from "./images/Vector2.svg"
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
position: absolute;
bottom: -11em;
right: 1em;
ul{
  display:${props => props.display};
  flex-direction:column;
  justify-content: space-between;
  float:right;
  margin:50px;
  background: #FFFFFF;
  height: 9rem;
  width: 10rem;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.06);
  padding:1em;
  align-items: flex-start;
}
a{
  text-decoration:none;
  color:black;
  transition: color .5s;
}
a:hover{
  color:#DE3d6d;
  cursor:pointer;
}

`


function CardT({display}) {
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/')
  }
        return (
          <Container display={display}>
            <ul>
                <a href='/profile'><img src={layer5} alt="icon" />  Account</a>
                <a href='/#'><img src={layer11} alt="icon" /> Setting</a>
                <a href='/#'><img src={vector} alt="icon"/> Help center</a>
      
                <a href="/"><img src={vector2} alt="icon"/> Logout</a> 
            </ul>
          </Container>
        )
      }
export default CardT