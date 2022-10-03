import {
    atom
} from 'recoil';

export const bankFormState = atom({
    key: 'bankFormState', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
});

export const userBanks = atom({

    key: "userBanks", // unique ID (with respect to other atoms/selectors)

    default: [], // default value (aka initial value)

});