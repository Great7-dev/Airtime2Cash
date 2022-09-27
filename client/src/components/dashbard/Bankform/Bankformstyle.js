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
    opacity: 0.3;
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
    /* border: 1px solid red;
    height: 40%; */
    /* width: 100%; */
    /* display: flex;
    justify-content: space-between; */
    /* padding: 1rem;
    margin: 8px 0px 16px 0px; */
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
