import styled from "styled-components";

export const Slidestyle = styled.div`
  width: 80%;
  height: 300px;
  margin: 0px auto;

  .slide {
    display: flex;
    flex-direction: column;
    margin: 10px;
    background: #f5f5f5;
    padding: 9% 8%;
    height: 10em;
    /* border: 1px solid black; */
  }
  .rec.rec-arrow {
    background-color: #f5f5f5;
  }
  .rec.rec-arrow:hover {
    background-color: #bcb8b8 !important;
  }
  .slide__text1 {
    /* display: flex; */
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* line-height: 26px; */
    color: #012a4a;
    /* border: 1px solid red; */
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
    /* border: 1px solid green; */
  }

  @media (max-width: 525px) {
    .slide {
      /* font-size: 14px; */
      padding: 5% 5%;
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
      height: 11rem;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
  }
  @media (max-width: 360px) {
    .slide {
      /* font-size: 14px; */
      padding: 2% 2%;
      height: 11rem;
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
