import { atom } from "recoil";

export const bankFormState = atom({
  key: "bankFormState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
export const MaxEditFormState = atom({
  key: "MaxEditFormState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const amount = atom({
  key: "amount", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export const id = atom({
  key: "id", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

// export const bankID = atom({
//   key: 'bankID', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

export const userBanks = atom({

    key: "userBanks", // unique ID (with respect to other atoms/selectors)

    default: [], // default value (aka initial value)

});
