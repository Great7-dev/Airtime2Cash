import React from "react";
import { useRecoilState } from "recoil";
import { bankFormState } from "../../../atoms/bankFormAtom";
import BankInfo from "../Bank/Bank";
import { Viewacct } from "./Viewacctstyle";

const Viewaccts = () => {
    const [formState, setFormState] = useRecoilState(bankFormState);
  return (
    <Viewacct>
      <BankInfo />
      <BankInfo />
      <button className='btnnnn' onClick={()=> setFormState(true)}>Add New Bank</button>
    </Viewacct>
  );
};

export default Viewaccts;
