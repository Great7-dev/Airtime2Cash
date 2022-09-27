import React, { useState } from "react";
import { BankForm, CustomStyle } from "./Bankformstyle";
import Select from "react-select";
import { bankOptions } from "../../../utils/listofbanks";
import { bankFormState } from "../../../atoms/bankFormAtom";
import { useRecoilState } from "recoil";
import Viewaccts from "../ViewAccts/Viewaccts";
import { handleAddBank } from "../../../api/auth";
import Mymodal from "../Modal/Modal";
import { successModalState } from "../../../atoms/successModalAtom";

const Bankform = () => {
  const [bankInfo, setBankInfo] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };
  const handleBankChange = (selectedOption) => {
    setBankInfo({ ...bankInfo, bankName: selectedOption.value });
  };
  const [formState, setFormState] = useRecoilState(bankFormState);
  const [modal, setModal] = useRecoilState(successModalState);
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      const response = await handleAddBank(bankInfo);
      setModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BankForm>
      <div className="bank-header">
        <h1 className="Acct">Bank Account</h1>
        <p className="viewacctselect" onClick={() => setFormState(false)}>
          View Bank accounts
        </p>
      </div>
      {formState ? (
        <form action="" className="bankform">
          <label htmlFor="">Bank Name</label>
          {/* <input type="text" placeholder="Bank Name" name="Bankname"  onChange={handleChange}  /> */}

          <Select
            className="selections"
            styles={CustomStyle}
            options={bankOptions}
            placeholder="Select Bank"
            name="Bankname"
            onChange={handleBankChange}
          />

          <label htmlFor="">Account Name</label>
          <input
            type="text"
            placeholder="Account Name"
            name="accName"
            onChange={handleChange}
          />
          <label htmlFor="">Account Number</label>
          <input
            type="text"
            placeholder="Account Number"
            name="accNumber"
            onChange={handleChange}
          />
          <button type="submit" className="btnnn" onClick={handleSubmit}>
            Add bank
          </button>
        </form>
      ) : (
        <Viewaccts />
      )}

      {modal && <Mymodal />}
    </BankForm>
  );
};
export default Bankform;
