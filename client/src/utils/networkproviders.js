const networkProvidersList = [
    { "id": "1", "name": "9mobile", "code": "9MOBILE", "number": "09092000192" },
    { "id": "2", "name": "Airtel", "code": "AIRTEL", "number": "09092000192" },
    { "id": "3", "name": "Glo", "code": "GLO", "number": "09154291928" },
    { "id": "4", "name": "MTN", "code": "MTN", "number": "08131338486" },
]

export const networkProvidersOptions = networkProvidersList.map((network) => {
    return {
        value: network,
        label: network.name
    }
})