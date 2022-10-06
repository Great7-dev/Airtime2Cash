import styled from "styled-components";

<<<<<<< HEAD
export const Navbarstyle = styled.div`
<<<<<<< HEAD
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 190px 13px 150px;
  box-sizing: border-box;
  position: relative;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
=======
=======
export const Navbarstyle = styled.div `
>>>>>>> 3e3d281b1ec1af2e2daddfab99e9ec7d2ad7bffe
width :100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 190px 10px 150px;
box-sizing: border-box;
position:fixed;
background-color: #ffffff; 
z-index: 50;
top: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);

ul {
list-style-type: none;
margin: 0;
padding: 0;
}
.currentUser {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #012A4A;
}
.currentUSer:onHover{
  background-color:red;
}

.navbar__links{
display: flex;
align-items: center;
gap: 30px;
color: #012A4A;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
}
>>>>>>> 9b415f3cb6e656605f9f1e677944708a1940113a

  .navbar__links {
    display: flex;
    align-items: center;
    gap: 30px;
    color: #012a4a;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

<<<<<<< HEAD
  .Home {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #de3d6d;
  }
  .btn {
    background: linear-gradient(101.31deg, #de3d6d 42.62%, #f5844c 104.19%);
    border-radius: 4px;
    padding: 10px 25px 10px 25px;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
  }
=======
.Home{
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #DE3D6D;
}
.btnn{
  cursor: pointer;
background:linear-gradient(101.31deg, #DE3D6D 42.62%, #F5844C 104.19%);
border-radius: 4px;
padding: 10px 25px 10px 25px;
color: #ffffff;
font-style: normal;
font-weight: 600;
font-size: 16px;
border: none;
}
>>>>>>> 9b415f3cb6e656605f9f1e677944708a1940113a

  @media (max-width: 1105px) {
    padding: 13px 100px;
    .hide {
      display: none;
    }
  }

  @media (max-width: 740px) {
    padding: 13px 100px;
    .navbar__logo {
      width: 150px;
    }

    .btn {
      padding: 5px 12px 5px 12px;
    }
  }

  @media (max-width: 570px) {
    padding: 13px 100px;
    .navbar__logo {
      width: 100px;
    }

    .btn {
      padding: 2px 6px 2px 6px;
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    padding: 13px 100px;
  }

  @media (max-width: 400px) {
    padding: 13px 50px;
  }
`;