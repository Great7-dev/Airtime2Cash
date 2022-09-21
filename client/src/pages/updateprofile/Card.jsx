import React from 'react'
import styled from "styled-components"
import layer5 from "./images/Layer5.svg"
import layer11 from "./images/Layer11.svg"
import vector from "./images/Vector.svg"
import vector2 from "./images/Vector2.svg"

const Container = styled.div`
ul{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  float:right;
  margin:50px;
  background: #FFFFFF;
  height: 9rem;
  width: 10rem;
  border-radius: 10px;
  border: solid black 3px;
  box-shadow: 5px 10px #888888;
}
a{
  text-decoration:none;
  color:black;
}
`
function NavBar() {
        return (
          <Container>
            <ul>
                <a href='/profile'><img src={layer5} alt="" />  Account</a>
                <a href=''><img src={layer11} alt="" /> Setting</a>
                <a href=''><img src={vector} alt=""/> Help center</a>
                <a href=''><img src={vector2} alt=""/> Logout</a>
            </ul>
          </Container>
        )
      }
export default NavBar