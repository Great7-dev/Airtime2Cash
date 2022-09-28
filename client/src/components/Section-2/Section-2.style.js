import styled from "styled-components";

export const Section2style = styled.div`
  width: 1140px;
  height: 512px;
  margin: 80px auto;
  border-radius: 24px;
  background-image: linear-gradient(to right, #d8e8bf, #cfadf5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inner-container {
    margin-left: 100px;
  }

  .images {
    position: relative;

  }

  .attach {
    position: absolute;
    top: 140px;
    left: 150px;
    object-fit: cover;
  }
  .rectangle {
    display: flex;
    position: absolute;
    margin-left: 785px;
    margin-top: 130px;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  .done {
    display: flex;
    position: absolute;
    margin-left: 835px;
    margin-top: 135px;
  }
  .sold {
    display: flex;
    position: absolute;
    margin-left: 820px;
    margin-top: 157px;
  }
  .amount {
    display: flex;
    position: absolute;
    margin-left: 825px;
    margin-top: 170px;
  }
  .text {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #03435f;
    margin-bottom: 24px;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #03435f;
    margin-bottom: 24px;
    max-width: 388px;
  }

  .btn {
    cursor: pointer;
    padding: 14.5px 40px;
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    border: none;
  }

  @media (max-width: 1150px) {
    width: 700px;

      .text {
        font-size: 25px;
      }
      .btn {
        padding: 8px 20px;
        font-size: 12px;
      } 
  }
  @media (max-width: 700px) {
    justify-content: center;
    height: 300px;
    width: 600px;

    .images {
        display: none;
    }
  }

  @media (max-width: 600px) {
    height: 400px;
    width: 400px;
    .inner-container {
        margin-left: 0;
        text-align: center;
    }
  }
  @media (max-width: 400px) {
    width: 275px;
  }
  

`;
