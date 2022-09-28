import React, { useState } from "react";
import { SellAirtimeFormStyle, CustomStyle } from "./SellAirtimeFormStyle";
import Select from "react-select";
import { networkProvidersOptions } from "../../../utils/networkproviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellAirtimeForm = ({ ...props }) => {



  const [network, setNetwork] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [amountToSell, setamountToSell] = useState("");
  const [amountToReceive, setamountToReceive] = useState("");
  const [ussd, setussd] = useState("");
  const [destinationPhoneNumber, setdestinationPhoneNumber]=useState("");
 

  const sellAirtime = async (network, phoneNumber,amountToSell,amountToReceive,ussd,destinationPhoneNumber) => {
    try {

      // eslint-disable-next-line no-useless-escape
      

      
      
      if (network === "" || phoneNumber === ""||amountToSell===""||amountToReceive===""||ussd===""||destinationPhoneNumber==="") {
        return toast.error("No field should be left empty, please fill all fields");
      } 

        
  } catch (error) {
      toast.error(error);
    }
  };
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    sellAirtime(network, phoneNumber,amountToSell,amountToReceive,ussd,destinationPhoneNumber);
  };


  
  return (
    <SellAirtimeFormStyle>
      
      
        <form action="" className="sellairtimeform">
        <div className="sellAirtime-header">
        <h1 className="sel">Sell Airtime</h1>
        
      </div>
          <label htmlFor="">Network</label>
          <Select
            className="selections"
            styles={CustomStyle}
            options={networkProvidersOptions}
            placeholder="Select Network"
            name="network"
            change={(e) => setNetwork(e.target.value)}
            //value={network}
          
          />

          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            //value={phoneNumber}
                  change={(e) => setphoneNumber(e.target.value)}
            
          />
          <label htmlFor="">Amount to Sell</label>
          <input
            type="text"
            placeholder="NGN"
            name="amountToSell"
            //value={amountToSell}
                  change={(e) => setamountToSell(e.target.value)}
          
          />
          <label htmlFor="">USSD</label>
          <input
          class="special"
            type="text"
            placeholder="*780*amount*09088756433*5000#"
            name="ussd"
            //value={ussd}
                  change={(e) => setussd(e.target.value)}
            
          />
          <label htmlFor="">Amount to Receive</label>
          <input
          class="special"
            type="text"
            placeholder="NGN"
            name="amountToReceive"
            //value={amountToReceive}
                  change={(e) => setamountToReceive(e.target.value)}
          
          />
          <label htmlFor="">Destination Phone Number</label>
          <input
          class="special"
            type="text"
            placeholder="Destination Phone Number"
            name="destinationPhoneNumber"
            //value={destinationPhoneNumber}
                  change={(e) => setdestinationPhoneNumber(e.target.value)}
            
          />
          <button type="submit" className="btnnn" onClick={handleSubmit}>
            Sell Airtime
          </button>
        </form>
      

        <ToastContainer />
    </SellAirtimeFormStyle>
  );
};
export default SellAirtimeForm;
