import type * as types from '../types.js'

export function formatPI(
  recordPI: types.RawYetfRecordPI
): types.FormattedYetfRecordPI {
  const formattedYetfRecordPI = recordPI as types.FormattedYetfRecordPI

  formattedYetfRecordPI.phaseInStartingPointDollars = Number.parseInt(
    formattedYetfRecordPI.phaseInStartingPoint,
    10
  )

  formattedYetfRecordPI.phaseInValueDollars = Number.parseInt(
    formattedYetfRecordPI.phaseInValue,
    10
  )

  formattedYetfRecordPI.phaseInDestinationValueDollars = Number.parseInt(
    formattedYetfRecordPI.phaseInDestinationValue,
    10
  )

  return formattedYetfRecordPI
}
