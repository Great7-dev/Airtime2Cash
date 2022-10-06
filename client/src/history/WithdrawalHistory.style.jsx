import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
margin: 10px 10px 10px 10px;
margin-top: 20px;
padding: 1em 1em;
span{
    color: #21334F;
    font-size: 14px;
}
p{
    margin-top: 4px;
    margin-left: 5px;
    margin-right: 10px;
    font-size: 12px;

}
.box{
    text-align: left;
}
.left-side-p{
    margin-top: 2p;
}
.received{
font-family: 'Inter';
font-style: normal;
color: #34A853;
background: rgba(52, 168, 83, 0.1);
border-radius: 150px;

padding: 5px;
}
@media screen and (max-width: 900px) {
p{
    font-size: 10px;
}
span{
    font-size: 10px;
}
.media{
    width: 100%
}
}
@media screen and (max-width: 800px) {
    font-size: 10;
}
`