import styled from "styled-components";

export const WithdrawStyle = styled.form`
  margin-top: 2rem;
  .Acct {
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
  .bankform {
    display: flex;
    margin: auto;
    width: 100%;
    flex-direction: column;

    font-size: 1rem;
  }
  input,
  select {
    width: 100%;
    padding: 1rem;
    margin: 8px 0px 16px 0px;
    opacity: 0.3;
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
  .withdraw_input_background,
  select {
    background: rgba(0, 0, 0, 0.04);
    border: none;
  }
  .withdraw_input_background,
  select {
    background: rgba(0, 0, 0, 0.04) !important;
    border: none;
  }
  input .input {
    padding: 1rem;
    margin: 20px 0 0 0;
    font-size: 1rem;
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
    text-align: justify;
    font: Inter;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 16.94px;
    font-color: #c4c4c4;
  }
  .is_danger {
    text-align: left;
    font-size: 0.8rem;
    margin: -0.8rem 0 0.8rem;
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
    background: "rgba(0,0,0,0.01)",
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
