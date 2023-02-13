export function formatPD(recordPD) {
    const formattedYetfRecordPD = recordPD;
    formattedYetfRecordPD.realtyPortionProtestantSeparateDollars = Number.parseInt(formattedYetfRecordPD.realtyPortionProtestantSeparate, 10);
    return formattedYetfRecordPD;
}
