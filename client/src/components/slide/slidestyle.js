import styled from "styled-components";

export const Slidestyle = styled.div `
  width: 80%;
  height: 300px;
  margin: 0px auto;

  .slide {
    display: flex;
    flex-direction: column;
    margin: 10px;
    background: #f5f5f5;
    padding: 9% 8%;
    height: 13em;
  }
  .rec.rec-arrow {
    background-color: #f5f5f5;
  }
  .rec.rec-arrow:hover {
    background-color: #bcb8b8 !important;
  }
  .slide__text1 {
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #012a4a;
  }
  .text1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #012a4a;
    line-height: 24px;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #012a4a;
    line-height: 24px;
  }

  @media (max-width: 525px) {
    .slide {
      padding: 5% 7%;
      height: 11em;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
    .text2 {
      font-size: 12px;
      line-height: 20px;
    }
  }

  @media (max-width: 417px) {
    .slide {
      /* font-size: 14px; */
      height: 12rem;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
  }
  @media (max-width: 360px) {
    .slide {
      padding: 2% 2%;
      height: 12rem;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
    .text2 {
      margin-bottom: 0;
    }
  }
  @media (max-width: 280px) {
    .text2 {
      font-size: 10px;
      line-height: 15px;
    }
  }
`;