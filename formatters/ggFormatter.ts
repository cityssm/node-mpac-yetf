import * as lookups from '@cityssm/mpac-tools/codes'

import type * as types from '../types.js'

export function formatGG(
  recordGG: types.RawYetfRecordGG
): types.FormattedYetfRecordGG {
  const formattedYetfRecordGG = recordGG as types.FormattedYetfRecordGG

  // Identifier

  formattedYetfRecordGG.identifierName =
    lookups.identifierNames[formattedYetfRecordGG.identifier]

  // Occupancy Status

  formattedYetfRecordGG.occupancyStatusName =
    lookups.occupancyStatusNames[formattedYetfRecordGG.occupancyStatus]

  // School Support

  formattedYetfRecordGG.schoolSupportName =
    lookups.schoolSupportNames[formattedYetfRecordGG.schoolSupport]

  // Residency Code

  formattedYetfRecordGG.residencyCodeDescription =
    lookups.residencyCodeDescriptions[formattedYetfRecordGG.residencyCode]

  // Month of Birth

  formattedYetfRecordGG.monthOfBirthName =
    lookups.monthOfBirthNames[formattedYetfRecordGG.monthOfBirth]

  return formattedYetfRecordGG
}
