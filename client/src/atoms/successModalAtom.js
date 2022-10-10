import { atom } from "recoil";

export const successModalState = atom({
  key: "successModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const minModalState = atom({
  key: "minModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const editModalState = atom({
  key: "editModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});


