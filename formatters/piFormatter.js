export function formatPI(recordPI) {
    const formattedYetfRecordPI = recordPI;
    formattedYetfRecordPI.phaseInStartingPointDollars = Number.parseInt(formattedYetfRecordPI.phaseInStartingPoint, 10);
    formattedYetfRecordPI.phaseInValueDollars = Number.parseInt(formattedYetfRecordPI.phaseInValue, 10);
    formattedYetfRecordPI.phaseInDestinationValueDollars = Number.parseInt(formattedYetfRecordPI.phaseInDestinationValue, 10);
    return formattedYetfRecordPI;
}
