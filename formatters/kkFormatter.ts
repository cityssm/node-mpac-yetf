import formatCivicAddress from '@cityssm/civic-address-format'

import type * as types from '../types.js'

export function formatKK(
  recordKK: types.RawYetfRecordKK
): types.FormattedYetfRecordKK {
  const formattedYetfRecordKK = recordKK as types.FormattedYetfRecordKK

  if (formattedYetfRecordKK.streetNumber !== '') {
    formattedYetfRecordKK.civicAddress = formatCivicAddress({
      civicNumber: Number.parseInt(
        formattedYetfRecordKK.streetNumber,
        10
      ).toString(),
      streetName: formattedYetfRecordKK.streetName,
      unitNumber: formattedYetfRecordKK.unitNumber,
      qualifier:
        formattedYetfRecordKK.qualifier === '/'
          ? '1/2'
          : formattedYetfRecordKK.qualifier
    })
  }

  return formattedYetfRecordKK
}
