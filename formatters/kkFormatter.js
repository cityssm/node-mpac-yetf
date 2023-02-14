import { formatCivicAddress } from '@cityssm/civic-address-format';
export function formatKK(recordKK) {
    const formattedYetfRecordKK = recordKK;
    if (formattedYetfRecordKK.streetNumber !== '') {
        formattedYetfRecordKK.civicAddress = formatCivicAddress({
            civicNumber: Number.parseInt(formattedYetfRecordKK.streetNumber, 10).toString(),
            streetName: formattedYetfRecordKK.streetName,
            unitNumber: formattedYetfRecordKK.unitNumber,
            qualifier: formattedYetfRecordKK.qualifier
        });
    }
    return formattedYetfRecordKK;
}
