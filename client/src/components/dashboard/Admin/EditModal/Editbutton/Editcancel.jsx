import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cancelTransactions } from "../../../../../api/auth";
import { currentTransactionState } from "../../../../../atoms/currentTransactionAtom";
import {
  editModalState,
  minModalState,
} from "../../../../../atoms/successModalAtom";
import Edit from "../Edit";
import { EditcancelStyle } from "./EditcancelStyle";

const Editcancel = ({ alldetails }) => {
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const [EditModal, setEditModal] = useRecoilState(editModalState);
  const [currentTransaction, setCurrentTransaction] = useRecoilState(
    currentTransactionState
  );
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      const response = await cancelTransactions(
        currentTransaction.id
      );
      navigate('/admin/transactions')
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditcancelStyle>
      <ul>
        <li
          className="green"
          onClick={(e) => {
            e.preventDefault();
            setEditModal(true);
          }}
        >
          Edit
        </li>
        <li
          className="orange"
          onClick={handleSubmit}
        >
          Cancel
        </li>
      </ul>
      {EditModal && <Edit alldetails={alldetails} />}
    </EditcancelStyle>
  );
};

export default Editcancel;
