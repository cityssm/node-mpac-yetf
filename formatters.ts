import {
  accessCodeNames,
  basementFinishCodeNames,
  characterOfConstructionDescriptions,
  conditionCodes,
  garageTypeCodeNames,
  heatingTypeCodeNames,
  partStoreyCodeNames,
  propertyCodeClasses,
  propertyCodeNames,
  serviceCodeNames,
  splitCodeNames,
  structureCodeClasses,
  structureCodeNames,
  yearBuiltCodeNames
} from './mpacLookupTables.js'

import type * as types from './types'

const FEET_TO_METRES = 0.3048
const ACRES_TO_SQUARE_FEET = 43_560

export function formatRawRecordBB(
  recordBB: types.RawYetfRecordBB
): types.FormattedYetfRecordBB {
  const formattedRecordBB = recordBB as types.FormattedYetfRecordBB

  // Frontage

  if (formattedRecordBB.frontage !== '') {
    formattedRecordBB.frontageFeet = Number.parseFloat(
      formattedRecordBB.frontage
    )
    formattedRecordBB.frontageMetres =
      formattedRecordBB.frontageFeet * FEET_TO_METRES
  }

  // Site Area

  if (formattedRecordBB.unitOfMeasurement === 'F') {
    formattedRecordBB.siteAreaSquareFeet = Number.parseFloat(
      formattedRecordBB.siteArea
    )
    formattedRecordBB.siteAreaAcres =
      formattedRecordBB.siteAreaSquareFeet / ACRES_TO_SQUARE_FEET
  } else if (formattedRecordBB.unitOfMeasurement === 'A') {
    formattedRecordBB.siteAreaAcres = Number.parseFloat(
      formattedRecordBB.siteArea
    )
    formattedRecordBB.siteAreaSquareFeet =
      formattedRecordBB.siteAreaAcres * ACRES_TO_SQUARE_FEET
  }

  // Depth or Farm Forestry Exemption

  if (
    formattedRecordBB.propertyCode >= '200' &&
    formattedRecordBB.propertyCode <= '299'
  ) {
    if (formattedRecordBB.depth !== '') {
      formattedRecordBB.farmForestryExemptionAcres = Number.parseFloat(
        formattedRecordBB.depth
      )
    }
  } else if (formattedRecordBB.depth !== '') {
    formattedRecordBB.depthFeet = Number.parseFloat(formattedRecordBB.depth)
    formattedRecordBB.depthMetres = formattedRecordBB.depthFeet * FEET_TO_METRES
  }

  // Site Improvements

  formattedRecordBB.siteImprovementHasBoathouse =
    formattedRecordBB.siteImprovement.includes('B')

  formattedRecordBB.siteImprovementHasSiteImprovements =
    formattedRecordBB.siteImprovement.includes('I')

  formattedRecordBB.siteImprovementHasOther =
    formattedRecordBB.siteImprovement.includes('O')

  formattedRecordBB.siteImprovementHasAccessibleFacilities =
    formattedRecordBB.siteImprovement.includes('D')

  formattedRecordBB.siteImprovementHasPool =
    formattedRecordBB.siteImprovement.includes('P')

  formattedRecordBB.siteImprovementHasElevator =
    formattedRecordBB.siteImprovement.includes('E')

  formattedRecordBB.siteImprovementHasSauna =
    formattedRecordBB.siteImprovement.includes('S')

  formattedRecordBB.siteImprovementHasMultiple =
    formattedRecordBB.siteImprovement.includes('M')

  formattedRecordBB.siteImprovementHasTennisCourts =
    formattedRecordBB.siteImprovement.includes('T')

  // Property Codes

  const propertyCodeNumber = Number.parseInt(formattedRecordBB.propertyCode)

  formattedRecordBB.propertyCodeClass =
    propertyCodeClasses[propertyCodeNumber - (propertyCodeNumber % 100)]

  formattedRecordBB.propertyCodeName = propertyCodeNames[propertyCodeNumber]

  // Service Codes

  formattedRecordBB.servicesName = serviceCodeNames[formattedRecordBB.services]

  // Access Codes

  formattedRecordBB.accessName = accessCodeNames[formattedRecordBB.access]

  return formattedRecordBB
}

export function formatRawRecordCC(
  recordCC: types.RawYetfRecordCC
): types.FormattedYetfRecordCC {
  const formattedRecordCC = recordCC as types.FormattedYetfRecordCC

  // Character of Construction

  const characterOfConstruction =
    characterOfConstructionDescriptions[
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

  // Year Built Code

  formattedRecordCC.yearBuiltCodeName =
    yearBuiltCodeNames[formattedRecordCC.yearBuiltCode]

  // Condition Code

  const condition = conditionCodes[formattedRecordCC.condition]

  if (condition !== undefined) {
    formattedRecordCC.conditionName = condition.name
    formattedRecordCC.conditionRankingOutOf5 = condition.ranking
  }

  // Part Storey Code

  formattedRecordCC.partStoreysName =
    partStoreyCodeNames[formattedRecordCC.partStoreys]

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

  formattedRecordCC.splitName = splitCodeNames[formattedRecordCC.split]

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
    basementFinishCodeNames[formattedRecordCC.basementFinish]

  // Heating Type

  formattedRecordCC.heatingTypeName =
    heatingTypeCodeNames[formattedRecordCC.heatingType]

  // Garage Type

  formattedRecordCC.garageTypeName =
    garageTypeCodeNames[formattedRecordCC.garageType]

  // Structure Code

  const structureCode = Number.parseInt(formattedRecordCC.structureCode)

  formattedRecordCC.structureCodeClass =
    structureCodeClasses[structureCode - (structureCode % 100)]

  formattedRecordCC.structureCodeName = structureCodeNames[structureCode]

  return formattedRecordCC
}
