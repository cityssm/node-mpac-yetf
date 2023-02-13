export function formatPC(recordPC) {
    const formattedYetfRecordPC = recordPC;
    formattedYetfRecordPC.realtyPortionFrenchPublicDollars = Number.parseInt(formattedYetfRecordPC.realtyPortionFrenchPublic, 10);
    formattedYetfRecordPC.realtyPortionFrenchSeparateDollars = Number.parseInt(formattedYetfRecordPC.realtyPortionFrenchSeparate, 10);
    return formattedYetfRecordPC;
}
