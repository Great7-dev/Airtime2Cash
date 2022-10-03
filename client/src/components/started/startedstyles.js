import styled from 'styled-components';

export const Startedstyle = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
box-sizing: border-box;
background: rgba(245, 132, 76, 0.05);

p{
    margin: 0;
    padding: 0;
}
.test {
    margin-top:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 150px;
}
.left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.text{
font-style: normal;
margin-bottom: 2rem;
font-weight: 700;
font-size: 60px;
background: linear-gradient(#DE3D6D, #F5844C 100%) ;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}
.text1{
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #03435F;
margin-bottom: 40px;
}
.btn{
height: 48px;
padding: 14.5px 40px;
align-self: start;
background: linear-gradient(107.45deg, #DE3D6D 47.58%, #F5844C 104.23%);
border-radius: 4px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
align-items: center;
border: none;
}
.navbar_logo{
    margin-right: 40px;
    margin-top:90px
}

@media (max-width: 1290px) {
    justify-content: center;
    .navbar_logo {
        display: none;
    }
    .test {
        margin-left: 0;
    }
    .btn{
        margin-bottom: 2rem;
    }
  }

  @media (max-width: 745px) {
    .text {
        font-size: 30px;
        margin-top: 2rem;
    }
    .text1 {
        /* font-size: 14px; */
        max-width: 350px;
        text-align: center;
    }
    .btn{
        align-self: center;
        margin-bottom: 2rem;
    }
  }
`;