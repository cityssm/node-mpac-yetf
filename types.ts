/* eslint-disable perfectionist/sort-interfaces */

import type * as lookups from '@cityssm/mpac-tools/codes'

export type RecordType =
  | 'AA'
  | 'BB'
  | 'CC'
  | 'DD'
  | 'GG'
  | 'HH'
  | 'JJ'
  | 'KK'
  | 'LL'
  | 'MM'
  | 'PA'
  | 'PB'
  | 'PC'
  | 'PD'
  | 'PI'

export interface RawYetfRecord {
  rollNumber: string
  recordType: RecordType
}

export interface FormattedYetfRecord extends RawYetfRecord {
  rollNumberCounty: string
  rollNumberMunicipality: string
  rollNumberMunicipalityName?: string
  rollNumberMapArea: string
  rollNumberMapDivision: string
  rollNumberMapSubdivision: string
  rollNumberParcel: string
  rollNumberParcelSub: string
  rollNumberPrimarySubordinate: string
  rollNumberIsPrimary: boolean
}

/**
 * AA Record
 * - Roll Entry Creation
 */
export interface RawYetfRecordAA extends RawYetfRecord {
  recordType: 'AA'
  ward: string
  poll: string
  pollSuffix: string
  highSchoolCode: string
  publicSchoolCode: string
  separateSchoolCode: string
  specialRateArea: string
  pacCode: string
  previousRollNumber: string
  frenchPublicSchoolCode: string
  frenchSeparateSchoolCode: string
}

/**
 * AA Record
 * - Roll Entry Creation
 */
export interface FormattedYetfRecordAA
  extends FormattedYetfRecord, RawYetfRecordAA {
  recordType: 'AA'
  pollSuffix: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  highSchoolCode: '00' | '01'
  publicSchoolCode: '00' | '01'
  separateSchoolCode: '00' | '01'
  frenchPublicSchoolCode: '00' | '01'
  frenchSeparateSchoolCode: '00' | '01'
}

/**
 * BB Record
 * - Property Data
 */
export interface RawYetfRecordBB extends RawYetfRecord {
  recordType: 'BB'
  frontage: string
  siteArea: string
  unitOfMeasurement: string
  depth: string
  siteImprovement: string
  propertyCode: string
  zoningUFFI: string
  services: string
  access: string
}

/**
 * BB Record
 * - Property Data
 */
export interface FormattedYetfRecordBB
  extends FormattedYetfRecord, RawYetfRecordBB {
  recordType: 'BB'
  frontageFeet?: number
  frontageMetres?: number
  siteAreaSquareFeet?: number
  siteAreaAcres?: number
  unitOfMeasurement: '' | 'A' | 'F' | 'N'
  depthFeet?: number
  depthMetres?: number
  farmForestryExemptionAcres?: number
  siteImprovementHasBoathouse: boolean
  siteImprovementHasSiteImprovements: boolean
  siteImprovementHasOther: boolean
  siteImprovementHasAccessibleFacilities: boolean
  siteImprovementHasPool: boolean
  siteImprovementHasElevator: boolean
  siteImprovementHasSauna: boolean
  siteImprovementHasMultiple: boolean
  siteImprovementHasTennisCourts: boolean
  propertyCode: string // for performance
  propertyCodeClass?: (typeof lookups.propertyCodeClassNames)[keyof typeof lookups.propertyCodeClassNames]
  propertyCodeName?: string // for performance
  services: '' | keyof typeof lookups.serviceCodeNames
  servicesName?: (typeof lookups.serviceCodeNames)[keyof typeof lookups.serviceCodeNames]
  access: '' | keyof typeof lookups.accessCodeNames
  accessName?: (typeof lookups.accessCodeNames)[keyof typeof lookups.accessCodeNames]
}

/**
 * CC Record
 * - Structure Data
 */
export interface RawYetfRecordCC extends RawYetfRecord {
  recordType: 'CC'
  sequenceNumber: string
  characterOfConstruction: string
  quality: string
  shape: string
  yearBuilt: string
  yearBuiltCode: string
  condition: string
  fullStoreys: string
  partStoreys: string
  heightEffectiveYearBuilt: string
  split: string
  grossArea: string
  totalBasementArea: string
  finishedBasementArea: string
  basementFinish: string
  fullBaths: string
  halfBaths: string
  numberOfBedrooms: string
  numberOfFireplaces: string
  heatingType: string
  airConditioning: string
  garageType: string
  garageSpaces: string
  structureCode: string
}

/**
 * CC Record
 * - Structure Data
 */
export interface FormattedYetfRecordCC
  extends FormattedYetfRecord, RawYetfRecordCC {
  recordType: 'CC'

  characterOfConstruction:
    | ''
    | keyof typeof lookups.characterOfConstructionDescriptions
  characterOfConstructionDescription?: string
  characterOfConstructionFramingDescription?: string
  characterOfConstructionFloorDescription?: string
  characterOfConstructionRoofDescription?: string
  characterOfConstructionWallsDescription?: string
  qualityOutOf10?: number
  shape: '' | 'A' | 'B' | 'C' | 'D' | 'N'
  yearBuiltCode: '' | keyof typeof lookups.yearBuiltCodeNames
  yearBuiltCodeName?: (typeof lookups.yearBuiltCodeNames)[keyof typeof lookups.yearBuiltCodeNames]
  condition: '' | keyof typeof lookups.conditionCodes
  conditionName?: string
  conditionRankingOutOf5?: number
  partStoreys: '' | keyof typeof lookups.partStoreyCodeNames
  partStoreysName?: (typeof lookups.partStoreyCodeNames)[keyof typeof lookups.partStoreyCodeNames]
  heightFeet?: number
  effectiveYearBuilt?: number
  split: '' | keyof typeof lookups.splitCodeNames
  splitName?: (typeof lookups.splitCodeNames)[keyof typeof lookups.splitCodeNames]
  grossAreaSquareFeet?: number
  totalBasementAreaSquareFeet?: number
  finishedBasementAreaSquareFeet?: number
  basementFinish: '' | keyof typeof lookups.basementFinishCodeNames
  basementFinishName?: (typeof lookups.basementFinishCodeNames)[keyof typeof lookups.basementFinishCodeNames]
  heatingType: '' | keyof typeof lookups.heatingTypeCodeNames
  heatingTypeName?: (typeof lookups.heatingTypeCodeNames)[keyof typeof lookups.heatingTypeCodeNames]
  garageType: '' | keyof typeof lookups.garageTypeCodeNames
  garageTypeName?: (typeof lookups.garageTypeCodeNames)[keyof typeof lookups.garageTypeCodeNames]
  structureCode: string // for performance
  structureCodeClass?: (typeof lookups.structureCodeClasses)[keyof typeof lookups.structureCodeClasses]
  structureCodeName?: string // for performance
}

/**
 * DD Record
 * - Land Data
 */
export interface RawYetfRecordDD extends RawYetfRecord {
  recordType: 'DD'
  sequenceNumber: string
  acres: string
  texture: string
  soilClass: string
  tiling: string
  climaticZone: string
  woodedAcreage: string
  orchardAcreage: string
}

/**
 * DD Record
 * - Land Data
 */
export interface FormattedYetfRecordDD
  extends FormattedYetfRecord, RawYetfRecordDD {
  recordType: 'DD'
  texture: '' | keyof typeof lookups.textureCodeNames
  textureName?: (typeof lookups.textureCodeNames)[keyof typeof lookups.textureCodeNames]
  soilClass: '' | keyof typeof lookups.soilClassPointsRemaining
  soilClassPointsRemainingMin?: number
  soilClassPointsRemainingMax?: number
}

/**
 * GG Record
 * - Name Data
 */
export interface RawYetfRecordGG extends RawYetfRecord {
  recordType: 'GG'
  sequenceNumber: string
  name: string
  identifier: string
  occupancyStatus: string
  religion: string
  schoolSupport: string
  residencyCode: string
  citizenship: string
  designatedRatepayerCode: string
  yearOfBirth: string
  monthOfBirth: string
  frenchLanguageEducationRights: string
}

/**
 * GG Record
 * - Name Data
 */
export interface FormattedYetfRecordGG
  extends FormattedYetfRecord, RawYetfRecordGG {
  recordType: 'GG'
  identifier: '' | keyof typeof lookups.identifierNames
  identifierName?: string
  occupancyStatus: '' | keyof typeof lookups.occupancyStatusNames
  occupancyStatusName?: string
  schoolSupport: '' | keyof typeof lookups.schoolSupportNames
  schoolSupportName?: string
  residencyCode: '' | keyof typeof lookups.residencyCodeDescriptions
  residencyCodeDescription?: string
  monthOfBirth: '' | keyof typeof lookups.monthOfBirthNames
  monthOfBirthName?: (typeof lookups.monthOfBirthNames)[keyof typeof lookups.monthOfBirthNames]
}

/**
 * HH Record
 * - Mailing Address
 */
export interface RawYetfRecordHH extends RawYetfRecord {
  recordType: 'HH'
  sequenceNumber: string
  mailingAddress: string
}

/**
 * HH Record
 * - Mailing Address
 */
export interface FormattedYetfRecordHH
  extends FormattedYetfRecord, RawYetfRecordHH {
  recordType: 'HH'
  sequenceNumber: '1' | '2' | '3'
}

/**
 * JJ Record
 * - City/Province Mailing Address
 */
export interface RawYetfRecordJJ extends RawYetfRecord {
  recordType: 'JJ'
  cityProvinceCountry: string
  postalCode: string
}

/**
 * JJ Record
 * - City/Province Mailing Address
 */
export interface FormattedYetfRecordJJ
  extends FormattedYetfRecord, RawYetfRecordJJ {
  recordType: 'JJ'
}

/**
 * KK Record
 * - Property Location
 */
export interface RawYetfRecordKK extends RawYetfRecord {
  recordType: 'KK'
  streetNumber: string
  upperStreetNumber: string
  qualifier: string
  streetName: string
  unitNumber: string
}

/**
 * KK Record
 * - Property Location
 */
export interface FormattedYetfRecordKK
  extends FormattedYetfRecord, RawYetfRecordKK {
  recordType: 'KK'
  civicAddress?: string
}

/**
 * LL Record
 * - Legal Description
 */
export interface RawYetfRecordLL extends RawYetfRecord {
  recordType: 'LL'
  sequenceNumber: string
  legalDescription: string
}

/**
 * LL Record
 * - Legal Description
 */
export interface FormattedYetfRecordLL
  extends FormattedYetfRecord, RawYetfRecordLL {
  recordType: 'LL'
  sequenceNumber: '1' | '2' | '3' | '4' | '5'
}

/**
 * MM Record
 * - Comments and Site Dimensions
 */
export interface RawYetfRecordMM extends RawYetfRecord {
  recordType: 'MM'
  sequenceNumber: string
  commentsSiteDimensions: string
}

/**
 * MM Record
 * - Comments and Site Dimensions
 */
export interface FormattedYetfRecordMM
  extends FormattedYetfRecord, RawYetfRecordMM {
  recordType: 'MM'
  sequenceNumber: '1' | '2' | '3' | '4' | '5'
}

/**
 * PA Record
 * - Assessment Control
 */
export interface RawYetfRecordPA extends RawYetfRecord {
  recordType: 'PA'
  sequenceNumber: string
  phaseInValue: string
  unitClass: string
  realtyTaxClass: string
  realtyTaxQualifier: string
  tenantTaxLiability: string
  noticeIssued: string
  previousYearAssessment: string
  unitSupport: string
  pooledTaxesUnit: string
  partnershipCode: string
  propertyType: string
  propertyTotal: string
  realtyPortionTotal: string
}

/**
 * PA Record
 * - Assessment Control
 */
export interface FormattedYetfRecordPA
  extends FormattedYetfRecord, RawYetfRecordPA {
  recordType: 'PA'
  phaseInValueDollars: number
  unitClass: '' | keyof typeof lookups.unitClassDescriptions
  unitClassDescription?: (typeof lookups.unitClassDescriptions)[keyof typeof lookups.unitClassDescriptions]
  realtyTaxClass: '' | keyof typeof lookups.realtyTaxClassNames
  realtyTaxClassName?: (typeof lookups.realtyTaxClassNames)[keyof typeof lookups.realtyTaxClassNames]
  realtyTaxQualifier: '' | keyof typeof lookups.realtyTaxQualifiers
  realtyTaxQualifierClass?: 'Payment in Lieu' | 'Taxable'
  realtyTaxQualifierName?: string
  previousYearAssessmentDollars: number
  unitSupport: '' | keyof typeof lookups.unitSupportNames
  unitSupportName?: (typeof lookups.unitSupportNames)[keyof typeof lookups.unitSupportNames]
  propertyType: '' | keyof typeof lookups.propertyTypeNames
  propertyTypeName?: (typeof lookups.propertyTypeNames)[keyof typeof lookups.propertyTypeNames]
  propertyTotalDollars: number
  realtyPortionTotalDollars: number
}

/**
 * PB Record
 * - Assessment Value English Public, English Separate, No School Support
 */
export interface RawYetfRecordPB extends RawYetfRecord {
  recordType: 'PB'
  sequenceNumber: string
  realtyPortionEnglishPublic: string
  realtyPortionEnglishSeparate: string
  realtyPortionNoSupport: string
}

/**
 * PB Record
 * - Assessment Value English Public, English Separate, No School Support
 */
export interface FormattedYetfRecordPB
  extends FormattedYetfRecord, RawYetfRecordPB {
  recordType: 'PB'
  sequenceNumber: '1'
  realtyPortionEnglishPublicDollars: number
  realtyPortionEnglishSeparateDollars: number
  realtyPortionNoSupportDollars: number
}

/**
 * PC Record
 * - Assessment Value French Public, French Separate School Support
 */
export interface RawYetfRecordPC extends RawYetfRecord {
  recordType: 'PC'
  sequenceNumber: string
  realtyPortionFrenchPublic: string
  realtyPortionFrenchSeparate: string
}

/**
 * PC Record
 * - Assessment Value French Public, French Separate School Support
 */
export interface FormattedYetfRecordPC
  extends FormattedYetfRecord, RawYetfRecordPC {
  recordType: 'PC'
  sequenceNumber: '1'
  realtyPortionFrenchPublicDollars: number
  realtyPortionFrenchSeparateDollars: number
}

/**
 * PD Record
 * - Assessment Value Protestant Separate School Support
 */
export interface RawYetfRecordPD extends RawYetfRecord {
  recordType: 'PD'
  sequenceNumber: string
  realtyPortionProtestantSeparate: string
}

/**
 * PD Record
 * - Assessment Value Protestant Separate School Support
 */
export interface FormattedYetfRecordPD
  extends FormattedYetfRecord, RawYetfRecordPD {
  recordType: 'PD'
  sequenceNumber: '1'
  realtyPortionProtestantSeparateDollars: number
}

/**
 * PI Record
 * - Phase-In
 */
export interface RawYetfRecordPI extends RawYetfRecord {
  recordType: 'PI'
  phaseInStartingPoint: string
  phaseInValue: string
  phaseInDestinationValue: string
}

/**
 * PI Record
 * - Phase-In
 */
export interface FormattedYetfRecordPI
  extends FormattedYetfRecord, RawYetfRecordPI {
  recordType: 'PI'
  phaseInStartingPointDollars: number
  phaseInValueDollars: number
  phaseInDestinationValueDollars: number
}
