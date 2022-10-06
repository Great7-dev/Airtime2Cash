const networkProvidersList = [
    { "id": "1", "name": "9mobile", "number": "09092000192", "ussd": `*223*PIN*Amount*09092000192#` },
    { "id": "2", "name": "Airtel", "number": "07019655163", "ussd": `*432*08021500111*AMOUNT#` },
    { "id": "3", "name": "Glo", "number": "09154291928", "ussd": `*131*09154291928*amount*pin#` },
    { "id": "4", "name": "MTN", "number": "08131338486", "ussd": `*777*08131338486*amount*pin#` },
]

export const networkProvidersOptions = networkProvidersList.map((network) => {
    return {
        value: network,
        label: network.name
    }
})