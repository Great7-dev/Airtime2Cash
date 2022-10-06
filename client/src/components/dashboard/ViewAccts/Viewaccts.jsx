import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { getSingleUser } from "../../../api/auth";
import { bankFormState, userBanks } from "../../../atoms/bankFormAtom";
import BankInfo from "../Bank/Bank";
import { Viewacct } from "./Viewacctstyle";
const Viewaccts = () => {
  const [formState, setFormState] = useRecoilState(bankFormState);
  const [userBankState, setUserBankState] = useRecoilState(userBanks);
  const id = localStorage.getItem("id");
  const fetcher = async () => {
    const response = await getSingleUser(id);
    setUserBankState(response.data.record.accounts);
  };
  // console.log(userBankState);
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <Viewacct>
      <div className="info-bank">
      {userBankState?.map((bank) => (
        <BankInfo key={bank.id} bank={bank} />
      ))}
      </div>
      <button className="btnnnn" onClick={() => setFormState(true)}>
        Add New Bank
      </button>
    </Viewacct>
  );
};
export default Viewaccts;