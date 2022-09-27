import styled from "styled-components";

export const BankForm = styled.form`
  margin-top: 2rem;
  .Acct {
    display: flex;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
  }
  .bank-header {
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
  .bankform {
    display: flex;
    flex-direction: column;
    margin: 20px 0px 0px 0px;
    font-size: 1rem;
  }
  input {
    padding: 1rem;
    margin: 8px 0px 16px 0px;
    /* opacity: 0.4; */
    border: 1px solid gray;
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
  .selections {
    outline: none;
    max-width: 100%;
    /* border: 1px solid red;
    height: 40%; */
    /* width: 100%; */
    /* display: flex;
    justify-content: space-between; */
    /* padding: 1rem;
    margin: 8px 0px 16px 0px; */
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
    .bank-header{
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
    .Acct{
      margin-bottom: 1rem;
    }
    .viewacctselect{
      margin-top: 0;
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
  placeholder: (base) => ({
    ...base,
    textAlign: "left",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#c4c4c4",
  }),
};
