export function formatPB(recordPB) {
    const formattedYetfRecordPB = recordPB;
    formattedYetfRecordPB.realtyPortionEnglishPublicDollars = Number.parseInt(formattedYetfRecordPB.realtyPortionEnglishPublic, 10);
    formattedYetfRecordPB.realtyPortionEnglishSeparateDollars = Number.parseInt(formattedYetfRecordPB.realtyPortionEnglishSeparate, 10);
    formattedYetfRecordPB.realtyPortionNoSupportDollars = Number.parseInt(formattedYetfRecordPB.realtyPortionNoSupport, 10);
    return formattedYetfRecordPB;
}
