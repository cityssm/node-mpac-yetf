import * as lookups from '@cityssm/mpac-tools/codes';
export function formatGG(recordGG) {
    const formattedYetfRecordGG = recordGG;
    // Identifier
    formattedYetfRecordGG.identifierName =
        lookups.identifierNames[formattedYetfRecordGG.identifier];
    // Occupancy Status
    formattedYetfRecordGG.occupancyStatusName =
        lookups.occupancyStatusNames[formattedYetfRecordGG.occupancyStatus];
    // School Support
    formattedYetfRecordGG.schoolSupportName =
        lookups.schoolSupportNames[formattedYetfRecordGG.schoolSupport];
    // Residency Code
    formattedYetfRecordGG.residencyCodeDescription =
        lookups.residencyCodeDescriptions[formattedYetfRecordGG.residencyCode];
    // Month of Birth
    formattedYetfRecordGG.monthOfBirthName =
        lookups.monthOfBirthNames[formattedYetfRecordGG.monthOfBirth];
    return formattedYetfRecordGG;
}
