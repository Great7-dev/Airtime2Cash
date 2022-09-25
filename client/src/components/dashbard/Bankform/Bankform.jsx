import React, { useState } from "react";
import { BankForm, CustomStyle } from "./Bankformstyle";
import Select from 'react-select'
import { bankOptions } from "../../../utils/listofbanks";
import { bankFormState } from "../../../atoms/bankFormAtom";
import { useRecoilState } from "recoil";
import Viewaccts from "../ViewAccts/Viewaccts";


const Bankform = ()=>{
    const [bankInfo, setBankInfo] = useState({})
    console.log(bankInfo);
    const handleChange = (e) => {
        const {name, value} = e.target
        setBankInfo({...bankInfo, [name]: value})
    }
    const handleBankChange = (selectedOption) => {
        setBankInfo({...bankInfo, bankName: selectedOption.value})
    }
    const [formState, setFormState] = useRecoilState(bankFormState);
    return( 
        <BankForm>
        <div className="bank-header">
        <h1 className="Acct">Bank Account</h1>
                <p className="viewacctselect" onClick={() => setFormState(false)}>View Bank accounts</p>
              </div>
              {formState ? <form action="" className="bankform">
                    <label htmlFor="">Bank Name</label>
                    {/* <input type="text" placeholder="Bank Name" name="Bankname"  onChange={handleChange}  /> */}

                   <Select className="selections" styles={CustomStyle} options={bankOptions} placeholder="Select Bank" name="Bankname"  onChange={handleBankChange}  />

                    <label htmlFor="">Account Name</label>
                    <input  type="text" placeholder="Account Name" name="Accountname" onChange={handleChange} />
                    <label htmlFor="">Account Number</label>
                    <input type="text" placeholder="Account Number" name="Accountnumber" onChange={handleChange}  />
                <button className="btnnn">Add bank</button>
                </form> : <Viewaccts/>}
               
               {/* {!formState && <Viewaccts/>} */}
             
        </BankForm>
        ) 
}
export default Bankform;

