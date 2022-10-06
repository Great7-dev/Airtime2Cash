import styled from 'styled-components';

export const OverviewContainer = styled.div`

table {
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin-top: 10px;
  margin-left: 140px;
  width: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
}
.ad-dash{
  color: #03435F;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5em;
}

table td,
table th {
  color:  #012A4A;
  padding: 15px;
  text-align: center;
}


table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color:  rgba(0, 0, 0, 0.04);

  color:#012A4A;
}
.act:hover{
 font-size: 30px;
 opacity: 0.5;
}
@media(max-width: 846px){
  table {
    margin-left:10px;
  }
}
@media(max-width: 603px){
    .ad-dash{
      margin-left:40px;
    }
}
@media(max-width: 404px){
  .ad-dash{
    margin-right:50px;
  }
}
`;
