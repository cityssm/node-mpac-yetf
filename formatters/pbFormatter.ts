import type * as types from '../types'

export function formatPB(
  recordPB: types.RawYetfRecordPB
): types.FormattedYetfRecordPB {
  const formattedYetfRecordPB = recordPB as types.FormattedYetfRecordPB

  formattedYetfRecordPB.realtyPortionEnglishPublicDollars = Number.parseInt(
    formattedYetfRecordPB.realtyPortionEnglishPublic,
    10
  )

  formattedYetfRecordPB.realtyPortionEnglishSeparateDollars = Number.parseInt(
    formattedYetfRecordPB.realtyPortionEnglishSeparate,
    10
  )

  formattedYetfRecordPB.realtyPortionNoSupportDollars = Number.parseInt(
    formattedYetfRecordPB.realtyPortionNoSupport,
    10
  )

  return formattedYetfRecordPB
}
