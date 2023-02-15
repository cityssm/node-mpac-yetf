import * as ccLookups from '../lookups/ccLookups.js'

import type * as types from '../types'

export function formatCC(
  recordCC: types.RawYetfRecordCC
): types.FormattedYetfRecordCC {
  const formattedRecordCC = recordCC as types.FormattedYetfRecordCC

  // Character of Construction

  const characterOfConstruction =
    ccLookups.characterOfConstructionDescriptions[
      formattedRecordCC.characterOfConstruction
    ]

  if (characterOfConstruction !== undefined) {
    formattedRecordCC.characterOfConstructionDescription =
      characterOfConstruction.description ?? ''

    formattedRecordCC.characterOfConstructionFramingDescription =
      characterOfConstruction.framing ?? ''

    formattedRecordCC.characterOfConstructionFloorDescription =
      characterOfConstruction.floor ?? ''

    formattedRecordCC.characterOfConstructionRoofDescription =
      characterOfConstruction.roof ?? ''

    formattedRecordCC.characterOfConstructionWallsDescription =
      characterOfConstruction.walls ?? ''
  }

  // Quality

  if (formattedRecordCC.quality !== '') {
    formattedRecordCC.qualityOutOf10 = Number.parseFloat(formattedRecordCC.quality)
  }

  // Year Built Code

  formattedRecordCC.yearBuiltCodeName =
    ccLookups.yearBuiltCodeNames[formattedRecordCC.yearBuiltCode]

  // Condition Code

  const condition = ccLookups.conditionCodes[formattedRecordCC.condition]

  if (condition !== undefined) {
    formattedRecordCC.conditionName = condition.name
    formattedRecordCC.conditionRankingOutOf5 = condition.ranking
  }

  // Part Storey Code

  formattedRecordCC.partStoreysName =
    ccLookups.partStoreyCodeNames[formattedRecordCC.partStoreys]

  // Height / Effective Year Built

  if (
    (formattedRecordCC.structureCode >= '100' &&
      formattedRecordCC.structureCode <= '199') ||
    (formattedRecordCC.structureCode >= '300' &&
      formattedRecordCC.structureCode <= '399')
  ) {
    formattedRecordCC.effectiveYearBuilt = Number.parseInt(
      formattedRecordCC.heightEffectiveYearBuilt,
      10
    )
  } else {
    formattedRecordCC.heightFeet = Number.parseInt(
      formattedRecordCC.heightEffectiveYearBuilt,
      10
    )
  }

  // Split Code

  formattedRecordCC.splitName =
    ccLookups.splitCodeNames[formattedRecordCC.split]

  // Gross Area

  formattedRecordCC.grossAreaSquareFeet = Number.parseInt(
    formattedRecordCC.grossArea,
    10
  )

  // Basement Area

  if (formattedRecordCC.totalBasementArea !== '') {
    formattedRecordCC.totalBasementAreaSquareFeet = Number.parseInt(
      formattedRecordCC.totalBasementArea
    )
  }

  if (formattedRecordCC.finishedBasementArea !== '') {
    formattedRecordCC.finishedBasementAreaSquareFeet = Number.parseFloat(
      formattedRecordCC.finishedBasementArea
    )
  }

  formattedRecordCC.basementFinishName =
    ccLookups.basementFinishCodeNames[formattedRecordCC.basementFinish]

  // Heating Type

  formattedRecordCC.heatingTypeName =
    ccLookups.heatingTypeCodeNames[formattedRecordCC.heatingType]

  // Garage Type

  formattedRecordCC.garageTypeName =
    ccLookups.garageTypeCodeNames[formattedRecordCC.garageType]

  // Structure Code

  const structureCode = Number.parseInt(formattedRecordCC.structureCode)

  formattedRecordCC.structureCodeClass =
    ccLookups.structureCodeClasses[structureCode - (structureCode % 100)]

  formattedRecordCC.structureCodeName =
    ccLookups.structureCodeNames[formattedRecordCC.structureCode]

  return formattedRecordCC
}
