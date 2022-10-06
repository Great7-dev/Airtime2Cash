import { atom } from "recoil";

export const currentTransactionState = atom({
    key: "currentTransactionState", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });