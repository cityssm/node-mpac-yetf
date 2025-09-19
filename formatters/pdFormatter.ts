import type * as types from '../types.js'

export function formatPD(
  recordPD: types.RawYetfRecordPD
): types.FormattedYetfRecordPD {
  const formattedYetfRecordPD = recordPD as types.FormattedYetfRecordPD

  formattedYetfRecordPD.realtyPortionProtestantSeparateDollars = Number.parseInt(
    formattedYetfRecordPD.realtyPortionProtestantSeparate,
    10
  )
  return formattedYetfRecordPD
}
