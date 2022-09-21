import styled from 'styled-components';

const ResetPasswordStyle = styled.div`

    width: 1440px;
    height: 1024px;
    background: #E5E5E5;
    border:1px solid #E5E5E5;
    margin:0;
    padding:0;

    .main-container{
        width:860px;
        height:620px;
        background: #FFFFFF;
        border:1px solid #E5E5E5;
        margin: 184px 300px;
        

    }

    .container{
        margin: 80px 212px;
        display:flex;
        flex-direction:column;
        background:#FFFFFF;
        border:1px solid #FFFFFF;
    }

   h2{
    width: 141px;
    height: 22px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */


    color: #21334F;

   }

   .h2{
    margin-left:55px;
   }

   .label{
        margin: 40px 0 0 0;
        width: 85px;
        height: 15px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #21334F;

   }

   .one{
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;

        width: 320px;
        height: 48px;

        background: #FFFFFF;
        border: 1px solid #D9D9D9;

   }

   button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    margin: 24px 0 0 0;

    width: 320px;
    height: 48px;

    background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);

   }

   .container .image-div{
    display:flex;
    justify-content: center;
}

.button{
    border-color: #fff;
    border-style: solid;
    
} 

.input-group{
    margin-top: 40px
}

   @media screen and (max-width: 1050px){
    .container{
        flex-direction:column;
    }
   }

   @media screen and (max-width: 650px){
    .container h2{
        font-size:16px;
        line-height:20px;
    }
    .container input{
        width: 300px;
        height: 40px;
    }
    .container button{
        width: 300px;
        height: 40px;
    }
   }

@media screen and (max-width: 550px){
    .container h2{
        font-size:15px;
        line-height:19px;
    }
    .container input{
        width: 290px;
        height: 37px;
    }
    .container button{
        width: 290px;
        height: 37px;
    }   
}

@media screen and (max-width: 490px){
    .container h2{
        font-size:13px;
        line-height:16px;
    }
    input ::placeholder {
        color: red;
        font-size:5px;
      }
    .container input{
        width: 280px;
        height: 30px;
    }
    .container button{
        width: 280px;
        height: 30px;
    }        
}

`

export default ResetPasswordStyle