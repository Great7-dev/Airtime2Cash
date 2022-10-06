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
import { ToastContainer, toast } from "react-toastify";


const Bankform = () => {
  const [accName, setaccName] = useState("");
  const [accNumber, setaccNumber] = useState("");
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
  const myBankForm = async (accName,accNumber) => {
    try {
      if (bankInfo.accName === "" || bankInfo.accNumber === "") {
        return toast.error("No field should be left empty, please fill all fields");
      } 
  } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      myBankForm(accName,accNumber);
      if(!toast.error)
      e.stopPropagation();
      const response = await handleAddBank(bankInfo);
      setModal(true);
      console.log(bankInfo)
      
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
          <label htmlFor="" className="texts">Bank Name</label>
          {/* <input type="text" placeholder="Bank Name" name="Bankname"  onChange={handleChange}  /> */}

          <Select
            className="selections"
            styles={CustomStyle}
            options={bankOptions}
            placeholder="Select Bank"
            name="Bankname"
            onChange={handleBankChange}
          />

          <label htmlFor="" className="texts">Account Name</label>
          <input
            type="text"
            placeholder="Account Name"
            name="accName"
            onChange={handleChange}
          />
          <label htmlFor="" className="texts">Account Number</label>
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
      <ToastContainer />
    </BankForm>
  );
};
export default Bankform;
