const networkProvidersList = [
    { "id": "1", "name": "9mobile", "code": "9MOBILE" },
    { "id": "2", "name": "Airtel", "code": "AIRTEL" },
    { "id": "3", "name": "Glo", "code": "GLO" },
    { "id": "4", "name": "MTN", "code": "MTN" },
]

export const networkProvidersOptions = networkProvidersList.map((network) => {
    return {
        value: network.name,
        label: network.name
    }
})