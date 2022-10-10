import styled from "styled-components";

export const Navbarstyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 190px 10px 150px;
  box-sizing: border-box;
  position: fixed;
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #012a4a;
  }
  .currentUSer:onhover {
    background-color: red;
  }

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

  .Home {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #de3d6d;
  }
  .btnn {
    cursor: pointer;
    background: linear-gradient(101.31deg, #de3d6d 42.62%, #f5844c 104.19%);
    border-radius: 4px;
    padding: 10px 25px 10px 25px;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
  }

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
