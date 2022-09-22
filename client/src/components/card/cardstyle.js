
import styled from 'styled-components';

export const Cardstyle = styled.div`
width:80%;
margin: 2rem auto 1rem auto;
background: #fff;
display: flex;
flex-direction: column;


.steps {
    display: flex;
}

.content{
    display: block;
}
.text{
font-style: normal;
font-weight: 700;
font-size: 34px;
color: #03435F;
margin-left: 10px;
}

.text1{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #03435F;
margin-left: 10px;
}

.boxes{
    margin-top: 3rem;
    display: flex;
    gap: 3.5rem;
}
.box {
    min-width: 280px;

}

.login {
    padding:3%;
    width: 334px;
background: rgba(226, 0, 16, 0.05);
}
.text2{
 /* font-family: 'Inter'; */
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 15px;
color: #03435F;
margin-top: 25px;
}
.text3{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #03435F;
margin-top:25px;
}

.deposit {
    padding:3%;
    width: 334px;
    /* height: 240px; */
background: rgba(245, 132, 76, 0.05);

}

.convert {
    padding:3%;
    width: 334px;
    /* height: 240px; */
background: rgba(85, 166, 48, 0.05);

}
@media (max-width: 1280px) {
    .box {
        min-width: 250px;
    }
}

@media (max-width: 1160px) {
    .box {
        min-width: 150px;
    }
}

@media (max-width: 900px) {
    .boxes {
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
  }

@media (max-width: 400px) {
    .box {
        max-width: 250px;
    }
  }
`;