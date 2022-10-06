import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deleteSingleInfo, getSingleUser } from "../../../api/auth";
import { userBanks } from "../../../atoms/bankFormAtom";
import { Bank } from "./Bankstyle";
const BankInfo = ({ bank }) => {
  const [userBankState, setUserBankState] = useRecoilState(userBanks);
  const [removed, setRemoved] = useState(false);
  const id = localStorage.getItem("id");
  const fetcher = async () => {
    const response = await getSingleUser(id);
    setUserBankState(response.data.record.accounts);
  };
  useEffect(() => {
    fetcher();
  }, [removed]);
  return (
    <Bank>
      {/* <div className='views'> */}
      <div className="acctinfo">
        <p>{bank.bankName}</p>
        <p>{bank.accNumber}</p>
        <p>{bank.accName}</p>
      </div>
      <button
        className="btnn"
        onClick={(e) => {
          e.preventDefault();
          deleteSingleInfo(bank.id);
          setRemoved(!removed);
        }}
      >
        Remove
      </button>
      {/* </div> */}
    </Bank>
  );
};
export default BankInfo;