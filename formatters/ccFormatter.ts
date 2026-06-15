import * as lookups from '@cityssm/mpac-tools/codes'

import type * as types from '../types.js'

export function formatCC(
  recordCC: types.RawYetfRecordCC
): types.FormattedYetfRecordCC {
  const formattedRecordCC = recordCC as types.FormattedYetfRecordCC

  // Character of Construction

  const characterOfConstruction =
    lookups.characterOfConstructionDescriptions[
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
    formattedRecordCC.qualityOutOf10 = Number.parseFloat(
      formattedRecordCC.quality
    )
  }

  // Year Built Code

  formattedRecordCC.yearBuiltCodeName =
    lookups.yearBuiltCodeNames[formattedRecordCC.yearBuiltCode]

  // Condition Code

  const condition = lookups.conditionCodes[formattedRecordCC.condition]

  if (condition !== undefined) {
    formattedRecordCC.conditionName = condition.name
    formattedRecordCC.conditionRankingOutOf5 = condition.ranking
  }

  // Part Storey Code

  formattedRecordCC.partStoreysName =
    lookups.partStoreyCodeNames[formattedRecordCC.partStoreys]

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

  formattedRecordCC.splitName = lookups.splitCodeNames[formattedRecordCC.split]

  // Gross Area

  formattedRecordCC.grossAreaSquareFeet = Number.parseInt(
    formattedRecordCC.grossArea,
    10
  )

  // Basement Area

  if (formattedRecordCC.totalBasementArea !== '') {
    formattedRecordCC.totalBasementAreaSquareFeet = Number.parseInt(
      formattedRecordCC.totalBasementArea,
      10
    )
  }

  if (formattedRecordCC.finishedBasementArea !== '') {
    formattedRecordCC.finishedBasementAreaSquareFeet = Number.parseFloat(
      formattedRecordCC.finishedBasementArea
    )
  }

  formattedRecordCC.basementFinishName =
    lookups.basementFinishCodeNames[formattedRecordCC.basementFinish]

  // Heating Type

  formattedRecordCC.heatingTypeName =
    lookups.heatingTypeCodeNames[formattedRecordCC.heatingType]

  // Garage Type

  formattedRecordCC.garageTypeName =
    lookups.garageTypeCodeNames[formattedRecordCC.garageType]

  // Structure Code

  const structureCode = Number.parseInt(formattedRecordCC.structureCode, 10)

  formattedRecordCC.structureCodeClass =
    lookups.structureCodeClasses[structureCode - (structureCode % 100)]

  formattedRecordCC.structureCodeName =
    lookups.structureCodeNames[formattedRecordCC.structureCode]

  return formattedRecordCC
}
