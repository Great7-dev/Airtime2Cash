import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { amount, id, MaxEditFormState } from "../../../../atoms/bankFormAtom";
import { minModalState } from "../../../../atoms/successModalAtom";
import Transactions from "../Transactions/Transactions";
import { Editstyle } from "./Editstyle";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { confirmAmount } from "../../../../api/auth";
import { currentTransactionState } from "../../../../atoms/currentTransactionAtom";

const Edit = ({ alldetails }) => {
  const [EditformState, setEditFormState] = useRecoilState(MaxEditFormState);
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const [airtimeAmount, setAirtimeAmount] = useRecoilState(amount);
  const [myId, setMyId] = useRecoilState(id);
  const navigate = useNavigate();
  const [currentTransaction, setCurrentTransaction] = useRecoilState(
    currentTransactionState
  );

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      const response = await confirmAmount(
        airtimeAmount,
        currentTransaction.id
      );
      navigate('/admin/transactions')
      setEditFormState(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEditFormState(false);
    setShowModal(false);
  };

  const handleEdit = (e) => {
    setAirtimeAmount(e.target.value);
  };



  return (
    <Editstyle>
      <div className="mymodal">
        <div className="acctsuccess">
          <p className="sucestext">Enter an amount</p>
          <MdOutlineCancel className="cancel" onClick={handleClick} />
        </div>
        <form>
          <label htmlFor="amount-sent" className="texts">
            Amount Sent
          </label>
          <input
            type="text"
            id="amount-sent"
            placeholder=""

            name="AmountSent"
            onChange={(e) => handleEdit(e)}
          />
          <label htmlFor="" className="texts">
            Amount Recieve
          </label>
          <input
            type="text"
            id="amount-receive"
            placeholder=""
            value={airtimeAmount * 0.7}
            name="AmountRecieve"
            disabled
          />

          <button type="submit" className="btnnn" onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </Editstyle>
  );
};

export default Edit;
