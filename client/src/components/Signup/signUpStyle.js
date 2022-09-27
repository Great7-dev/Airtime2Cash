import styled from "styled-components"




export const SignupWrapper = styled.div`
background-color: #E5E5E5;
padding: 5% 20%;
display: flex;
justify-content: center;

& .signup  {
padding: 5% 25%;
 background-color: #fff;
 width: 50rem;
 /* max-width: 100%; */
display: flex;
justify-content: center;
flex-direction: column; 
}

& .CreateLabel{
    color: #21334F;
    margin: 8% 0;
    font-size:18px;
    font-weight: 700;
}

& a{
    text-decoration: none;
}

& .bck_btn{
    color:rgb(50, 49, 49);
    background-color: #f7f7f7;
    border: none;
    border-radius: 95px;
    padding: 0.5rem;
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    /* line-height: 15px; */
    color: #21334F;
    width: 6rem;
    margin: 1% 0 5% 0;
    & .Icon{
        width: 10.67px;
    }
}


& .sign_in{
    color: #DE3D6D;
}


& .frame10{
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 40px;
border-radius: 6px; 
}

& .SignUpFooter{
    width:100%;
    text-align: center;
    color: #21334F;
    margin: 10% 0;
}

`

export const StyledForm = styled.form`
   & .input-label {
        color: #21334F;
        text-align: left;
        font-size: 12px;
        position: relative;
}

`

export const StyleInput = styled.input`

        background: #ffffff;
        border: solid #d9d9d9;
        border-width: 1px;
        padding: 8px 16px 8px 16px;
        margin: 1.5% 0 4% 0; 
        outline: none;
        width: 100%;
        height: 48px; 
      
`


export const StyledButton = styled.button`
border:none;
background-image: linear-gradient(to right,#DE3D6D 40% ,#F5844C );
color: #F5F5F5;
width: 100%;
height: 48px;
margin: 4% 0;
box-sizing: border-box;
font-weight:600;
line-height:14.52px ;
`

