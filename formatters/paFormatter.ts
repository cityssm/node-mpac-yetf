import * as paLookups from '../lookups/paLookups.js'

import type * as types from '../types'

export function formatPA(
  recordPA: types.RawYetfRecordPA
): types.FormattedYetfRecordPA {
  const formattedYetfRecordPA = recordPA as types.FormattedYetfRecordPA

  formattedYetfRecordPA.phasedInValueDollars = Number.parseInt(
    formattedYetfRecordPA.phasedInValue,
    10
  )

  formattedYetfRecordPA.previousYearAssessmentDollars = Number.parseInt(
    formattedYetfRecordPA.previousYearAssessment,
    10
  )

  // Unit Class

  formattedYetfRecordPA.unitClassDescription =
    paLookups.unitClassDescriptions[formattedYetfRecordPA.unitClass]

  // Realty Tax Class

  formattedYetfRecordPA.realtyTaxClassName =
    paLookups.realtyTaxClassNames[formattedYetfRecordPA.realtyTaxClass]

  // Realty Tax Qualifer

  const realtyTaxQualifier =
    paLookups.realtyTaxQualifiers[formattedYetfRecordPA.realtyTaxQualifier]

  if (realtyTaxQualifier !== undefined) {
    formattedYetfRecordPA.realtyTaxQualifierClass = realtyTaxQualifier.class
    formattedYetfRecordPA.realtyTaxQualifierName = realtyTaxQualifier.name
  }

  // Unit Support

  formattedYetfRecordPA.unitSupportName =
    paLookups.unitSupportNames[formattedYetfRecordPA.unitSupport]

  // Property Type

  formattedYetfRecordPA.propertyTypeName =
    paLookups.propertyTypeNames[formattedYetfRecordPA.propertyType]

  return formattedYetfRecordPA
}
