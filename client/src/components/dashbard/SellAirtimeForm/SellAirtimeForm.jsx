import React from "react";
import { SellAirtimeFormStyle, CustomStyle } from "./SellAirtimeFormStyle";
import Select from "react-select";
import { networkProvidersOptions } from "../../../utils/networkproviders";

const SellAirtimeForm = () => {
  
  return (
    <SellAirtimeFormStyle>
      <div className="sellAirtime-header">
        <h1 className="Acct">Sell Airtime</h1>
        
      </div>
      
        <form action="" className="bankform">
          <label htmlFor="">Network</label>
          <Select
            className="selections"
            styles={CustomStyle}
            options={networkProvidersOptions}
            placeholder="Select Network"
            name="Network"
          
          />

          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="accName"
            
          />
          <label htmlFor="">Amount to Sell</label>
          <input
            type="text"
            placeholder="NGN"
            name="amount-to-sell"
          
          />
          <label htmlFor="">USSD</label>
          <input
            type="text"
            placeholder="*780*amount*09088756433*5000#"
            name="ussd"
            
          />
          <label htmlFor="">Amount to Receive</label>
          <input
            type="text"
            placeholder="NGN"
            name="amount-to-receive"
          
          />
          <label htmlFor="">Destination Phone Number</label>
          <input
            type="text"
            placeholder="Destination Phone Number"
            name="destination-phone-number"
            
          />
          <button type="submit" className="btnnn">
            Sell Airtime
          </button>
        </form>
      

      
    </SellAirtimeFormStyle>
  );
};
export default SellAirtimeForm;
