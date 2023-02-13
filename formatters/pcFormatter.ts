import type * as types from '../types'

export function formatPC(
  recordPC: types.RawYetfRecordPC
): types.FormattedYetfRecordPC {
  const formattedYetfRecordPC = recordPC as types.FormattedYetfRecordPC

  formattedYetfRecordPC.realtyPortionFrenchPublicDollars = Number.parseInt(
    formattedYetfRecordPC.realtyPortionFrenchPublic,
    10
  )

  formattedYetfRecordPC.realtyPortionFrenchSeparateDollars = Number.parseInt(
    formattedYetfRecordPC.realtyPortionFrenchSeparate,
    10
  )

  return formattedYetfRecordPC
}
