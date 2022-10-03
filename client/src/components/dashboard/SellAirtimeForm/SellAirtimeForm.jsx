import React, { useState } from "react";
import { SellAirtimeFormStyle, CustomStyle } from "./SellAirtimeFormStyle";
import Select from "react-select";
import { networkProvidersOptions } from "../../../utils/networkproviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputField from "../../utils/Input/Input";

const SellAirtimeForm = ({ ...props }) => {



  const [network, setNetwork] = useState({});
  const [phoneNumber, setphoneNumber] = useState("");
  const [amountToSell, setamountToSell] = useState("");
  const [amountToReceive, setamountToReceive] = useState("");
  const [ussd, setussd] = useState("");
  const [destinationPhoneNumber, setdestinationPhoneNumber]=useState("");
  

  
 
  const handleChange = (selectedOption) => {
        
    setNetwork({...network, name: selectedOption.network.name, number: selectedOption.network.number})


    console.log("handleChange")
  }
  const sellAirtime = async (network, phoneNumber,amountToSell,amountToReceive,ussd,destinationPhoneNumber) => {
    try {

      // eslint-disable-next-line no-useless-escape
      

     
     
      
      if ( phoneNumber === ""||amountToSell===""||amountToReceive===""||ussd==="") {
        return toast.error("No field should be left empty, please fill all fields");
      } 


toast.success("Airtime successfully sold")
console.log(phoneNumber,amountToSell,amountToReceive,ussd)
        
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
            change={handleChange}
            value={network.name}
          
          />
          
                <InputField
                  type="input"
                  class="input"
                  label="Phone Number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  change={(e) => setphoneNumber(e.target.value)}
                  value={phoneNumber}
                />


              <InputField
                  type="input"
                  class="input"
                  label="Amount to Sell"
                  placeholder="NGN"
                  name="amountToSell"
                  change={(e) => setamountToSell(e.target.value)}
                  value={amountToSell}
                />

              <InputField
                  type="input"
                  class="input"
                  label="USSD"
                  placeholder="*780*amount*09088756433*5000#"
                  name="ussd"
                  change={(e) => setussd(e.target.value)}
                  value={ussd}
                />

          

                <InputField
                  type="input"
                  class="input"
                  label="Amount to Receive"
                  placeholder="NGN"
                  name="amountToReceive"
                  change={(e) => setamountToReceive(e.target.value)}
                  value={amountToReceive}
                />          

                <InputField
                  type="input"
                  class="input"
                  label="Destination Phone Number"
                  placeholder="Destination Phone Number"
                  name="destinationPhoneNumber"
              defaultValue={destinationPhoneNumber}
              
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
