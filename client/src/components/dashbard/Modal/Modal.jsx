import React from "react";
import { Modal } from "./Modalstyle";
import Logo from "../../../assets/Success.png";
import { useRecoilState } from "recoil";
import { successModalState } from "../../../atoms/successModalAtom";
import { bankFormState } from "../../../atoms/bankFormAtom";

const Mymodal = () => {
  const [modal, setModal] = useRecoilState(successModalState);
  const [bankForm, setBankForm] = useRecoilState(bankFormState);
  return (
    <Modal>
      <div className="mymodal">
        <img src={Logo} alt="Success" className="correct" />
        <div className="acctsuccess">
          <p className="sucestext">Bank Account Successful</p>
          <p className="createdtext">
            Your bank account has been added successfully
          </p>
        </div>
        <button
          className="done"
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
            setBankForm(false);
          }}
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default Mymodal;
