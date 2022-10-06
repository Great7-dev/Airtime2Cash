import styled from "styled-components";

export const SellAirtimeFormStyle = styled.form`
  margin-top: 2rem;
  .sel {
    display: flex;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 2rem;
  }
  .sellAirtime-header {
    width: 83%;
    display: flex;
    margin: 0;

    justify-content: space-between;
  }
  .viewacctselect {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px 0px 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #de3d6d;
  }
  .clkdecs {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-color: #4285f4;
  }
  .sellairtimeform {
    display: flex;
    margin: auto;
    width: 100%;
    flex-direction: column;

    font-size: 1rem;
  }
  // input {
  //   width:100%;
  //   padding: 1rem;
  //   margin: 8px 0px 16px 0px;
  //   opacity: 0.3;
  //   font:Inter;
  //   font-weight:400;
  //   font-style:normal;
  //   font-size:14px;
  //   line-height:16.94px;
  //   font-color:#C4C4C4;
  // }
  .special {
    background-color: rgba(0, 0, 0, 0.04);
    border-style: solid;
    border-color: #fff;
    font: Inter;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 16.94px;
    font-color: #c4c4c4;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #012a4a;
    width: 100%;
  }
  .btnnn {
    cursor: pointer;
    display: flex;
    margin-top: 15px;
    margin-bottom: 25px;
    padding: 16.5px 71px;
    align-self: start;
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    align-items: center;
    border: none;
  }
  .selections {
    outline: none;
    width: 100%;
    text-align: justify;
    font: Inter;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 16.94px;
    font-color: #c4c4c4;
  }
  .btnnn {
    cursor: pointer;
    display: flex;
    margin-top: 50px;
    padding: 16.5px 71px;
    align-self: start;
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    align-items: center;
    border: none;
  }
  /* @media (max-width: 601px) {
    .texts {
      display: flex;
      margin: 0 2rem;
    }
    input {
      max-width: 100%;
    }
    .selections {
      max-width: 100%;
    }
    .Acct {
      margin-top: 1.5rem;
      font-size: 12px;
    }
    .viewacctselect {
      font-size: 10px;
    }
  } */
  @media (max-width: 621px) {
    .bank-header {
      margin: 0 2rem;
    }
  }
  @media (max-width: 612px) {
    .texts {
      display: flex;
      margin: 0 2rem;
    }
    input {
      display: flex;
      margin: 8px 32px 16px 32px;
      gap: 10px;
    }
    .selections {
      margin: 0 2rem;
    }
    .btnnn {
      margin: 40px 32px 0 32px;
    }
  }
  @media (max-width: 600px) {
    .texts {
      display: flex;
      margin: 0 -1rem;
    }
  }
  @media (max-width: 302px) {
    .texts {
      display: flex;
      margin: 0 1rem;
    }
    input {
      font-color: #c4c4c4;
      display: flex;
      width: 250px;
      margin: 8px 4rem 16px 4rem;
      /* margin: 8px 32px 16px 32px; */
    }
    .selections {
      margin: 8px 4rem 16px 4rem;
      width: 250px;
    }
    .btnnn {
      /* margin: 50px 42px 0 42px; */
      /* padding: 16.5px 50px;
      margin-top: 1rem; */
    }
  }
  @media (max-width: 369px) {
    .btnnn {
      margin: 1rem 2rem;
      /* margin-bottom: 5rem; */
    }
  }
  @media (max-width: 302px) {
    .btnnn {
      margin: 1rem 4rem;
      /* margin-bottom: 5rem; */
    }
    .bank-header {
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
    .Acct {
      margin-bottom: 1rem;
    }
    .viewacctselect {
      margin-top: 0;
    }
  }
  @media (max-width: 280px) {
    // margin: 10px 10px 10px 10px;
    width: 100%;
    label {
      margin-left: 15px;
    }
    .sel {
      margin-left: 60px;
    }
    input {
      margin-left: 0px;
    }
  }
`;

export const CustomStyle = {
  control: (base) => ({
    ...base,
    // border: "1px solid #DE3D6D",
    minHeight: 48,
    marginBottom: 15,
    marginTop: 10,
    fontSize: 13,
    "&:hover": {
      // borderColor: "#DE3D6D",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 6px",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#c4c4c4",
  }),
};

export const Label = styled.label`
  label {
    float: left;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #012a4a;
  }
`;

export const ModalPopupStyle = styled.form`
  body.active-modal {
    overflow-y: hidden;
  }

  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
`;
