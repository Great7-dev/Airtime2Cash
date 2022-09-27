
import styled from 'styled-components';

export const Textstyle = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
width:705px;
text-align: center;
margin: 80px auto 60px auto;


    p{
    margin: 0;
    padding: 0;
}

.text{
font-style: normal;
font-weight: 700;
font-size: 40px;
color: #03435F;
margin-bottom: 24px;
}
.text1{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #03435F;
}

@media (max-width: 740px) {
    width:500px;
    .text{
        font-size: 25px;
    }
  }
  @media (max-width: 505px) {
    width:280px;
    .text{
        font-size: 16px;
    }
    .text1{
        font-size: 12px;
    }
  }
`