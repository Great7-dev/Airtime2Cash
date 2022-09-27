import React from "react";
import {SellAirtimeStyle} from "./SellAirtimeStyle";
import "./sellairtimeStyle.css";

const Sellairtime = () => {
  return (
    <SellAirtimeStyle>
      <form>
        <label for="network"> Network </label>
        <select name="network" class="sellairtimeInputs">
         
          <option value=""> Select </option>
          <option value="9mobile"> 9 mobile </option>
          <option value="Airtel"> Airtel </option>
          <option value="Glo"> Glo </option> <option value="MTN"> MTN </option>
        </select>   
        <label> Phone Number </label>
        <input
          class="sellairtimeInputs"
          placeholder="
        Phone Number "
        />
        <label> Amount to Sell </label>
        <input
          class="sellairtimeInputs"
          placeholder="
        NGN "
        />
        <label> USSD </label>
        <input
          class="sellairtimeInputs"
          placeholder=" *
        780 * amount * 090 88756433 * 5000# "
          readonly="
        readonly "
        />
        <label> Amount to Receive </label>
        <input
          class="sellairtimeInputs"
          placeholder="
        NGN "
          readonly="
        readonly "
        />
        <label> Destination Phone Number </label>
        <input
          class="sellairtimeInputs"
          placeholder="
        Destination Phone Number "
          readonly="
        readonly "
        />
        <button class="sellairtimeBtn">
          <span class="sellairtimetext"> Sell Airtime </span>
        </button>
      </form>
    </SellAirtimeStyle>
  );
};

export default Sellairtime;
