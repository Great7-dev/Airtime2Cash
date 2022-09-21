import styled from "styled-components";

export const Footerstyle = styled.div`
  border: 1px solid #21334f;
  background-color: #21334f;
  padding-top: 40px;

  p {
    margin: 0;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 34px;
  }

  .links {
    width: 1278px;
    padding-top: 24px;
    border-top: 1px solid #e5e5e5;
    margin: 0 auto 2rem auto;
  }
  .secondary-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: #f2f2f2;
    margin-bottom: 34px;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #21334f;
    padding: 3rem 3rem;
  }

  .info-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    color: #f2f2f2;
    margin: 0 9px;
  }

  .footer-logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .footer-copyright {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 -40px 0;
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }

  .text3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: "liga" off;
    color: #ffffff;
  }

  @media (max-width: 1278px) {
    .links {
      width: 900px;
    }
  }

  @media (max-width: 900px) {
    .links {
      width: 500px;
    }
  }

  @media (max-width: 500px) {
    .links {
      width: 280px;
    }
    .info-links {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
  }

  @media (max-width: 340px) {
    .secondary-text-container p {
        font-size: 13px;
    }
  }
`;
