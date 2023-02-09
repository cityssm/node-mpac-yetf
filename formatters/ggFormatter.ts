import * as ggLookups from '../lookups/ggLookups.js'

import type * as types from '../types'

export function formatGG(
  recordGG: types.RawYetfRecordGG
): types.FormattedYetfRecordGG {
  const formattedYetfRecordGG = recordGG as types.FormattedYetfRecordGG

  // Identifier

  formattedYetfRecordGG.identifierName =
    ggLookups.identifierNames[formattedYetfRecordGG.identifier]

  // Occupancy Status

  formattedYetfRecordGG.occupancyStatusName =
    ggLookups.occupancyStatusNames[formattedYetfRecordGG.occupancyStatus]

  // School Support

  formattedYetfRecordGG.schoolSupportName =
    ggLookups.schoolSupportNames[formattedYetfRecordGG.schoolSupport]

  // Residency Code

  formattedYetfRecordGG.residencyCodeDescription =
    ggLookups.residencyCodeDescriptions[formattedYetfRecordGG.residencyCode]

  return formattedYetfRecordGG
}
