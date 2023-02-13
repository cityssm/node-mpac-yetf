import type * as types from '../types'

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
