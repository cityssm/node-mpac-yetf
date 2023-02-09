import * as ggLookups from '../lookups/ggLookups.js';
export function formatGG(recordGG) {
    const formattedYetfRecordGG = recordGG;
    formattedYetfRecordGG.identifierName =
        ggLookups.identifierNames[formattedYetfRecordGG.identifier];
    formattedYetfRecordGG.occupancyStatusName =
        ggLookups.occupancyStatusNames[formattedYetfRecordGG.occupancyStatus];
    formattedYetfRecordGG.schoolSupportName =
        ggLookups.schoolSupportNames[formattedYetfRecordGG.schoolSupport];
    formattedYetfRecordGG.residencyCodeDescription =
        ggLookups.residencyCodeDescriptions[formattedYetfRecordGG.residencyCode];
    return formattedYetfRecordGG;
}
