import type * as bbLookups from './lookups/bbLookups.js';
import type * as ccLookups from './lookups/ccLookups.js';
import type * as ddLookups from './lookups/ddLookups.js';
import type * as ggLookups from './lookups/ggLookups.js';
import type * as paLookups from './lookups/paLookups.js';
export type RecordType = 'AA' | 'BB' | 'CC' | 'DD' | 'GG' | 'HH' | 'JJ' | 'KK' | 'LL' | 'MM' | 'PA' | 'PB' | 'PC' | 'PD' | 'PI';
export interface RawYetfRecord {
    rollNumber: string;
    recordType: RecordType;
}
export interface FormattedYetfRecord extends RawYetfRecord {
    rollNumberCounty: string;
    rollNumberMunicipality: string;
    rollNumberMapArea: string;
    rollNumberMapDivision: string;
    rollNumberMapSubdivision: string;
    rollNumberParcel: string;
    rollNumberParcelSub: string;
    rollNumberPrimarySubordinate: string;
}
export interface RawYetfRecordAA extends RawYetfRecord {
    recordType: 'AA';
    ward: string;
    poll: string;
    pollSuffix: string;
    highSchoolCode: string;
    publicSchoolCode: string;
    separateSchoolCode: string;
    specialRateArea: string;
    pacCode: string;
    previousRollNumber: string;
    frenchPublicSchoolCode: string;
    frenchSeparateSchoolCode: string;
}
export interface FormattedYetfRecordAA extends RawYetfRecordAA, FormattedYetfRecord {
    recordType: 'AA';
    pollSuffix: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
    highSchoolCode: '00' | '01';
    publicSchoolCode: '00' | '01';
    separateSchoolCode: '00' | '01';
    frenchPublicSchoolCode: '00' | '01';
    frenchSeparateSchoolCode: '00' | '01';
}
export interface RawYetfRecordBB extends RawYetfRecord {
    recordType: 'BB';
    frontage: string;
    siteArea: string;
    unitOfMeasurement: string;
    depth: string;
    siteImprovement: string;
    propertyCode: string;
    zoningUFFI: string;
    services: string;
    access: string;
}
export interface FormattedYetfRecordBB extends RawYetfRecordBB, FormattedYetfRecord {
    recordType: 'BB';
    frontageFeet?: number;
    frontageMetres?: number;
    siteAreaSquareFeet?: number;
    siteAreaAcres?: number;
    unitOfMeasurement: '' | 'N' | 'F' | 'A';
    depthFeet?: number;
    depthMetres?: number;
    farmForestryExemptionAcres?: number;
    siteImprovementHasBoathouse: boolean;
    siteImprovementHasSiteImprovements: boolean;
    siteImprovementHasOther: boolean;
    siteImprovementHasAccessibleFacilities: boolean;
    siteImprovementHasPool: boolean;
    siteImprovementHasElevator: boolean;
    siteImprovementHasSauna: boolean;
    siteImprovementHasMultiple: boolean;
    siteImprovementHasTennisCourts: boolean;
    propertyCode: string;
    propertyCodeClass?: typeof bbLookups.propertyCodeClasses[keyof typeof bbLookups.propertyCodeClasses];
    propertyCodeName?: string;
    services: '' | keyof typeof bbLookups.serviceCodeNames;
    servicesName?: typeof bbLookups.serviceCodeNames[keyof typeof bbLookups.serviceCodeNames];
    access: '' | keyof typeof bbLookups.accessCodeNames;
    accessName?: typeof bbLookups.accessCodeNames[keyof typeof bbLookups.accessCodeNames];
}
export interface RawYetfRecordCC extends RawYetfRecord {
    recordType: 'CC';
    sequenceNumber: string;
    characterOfConstruction: string;
    quality: string;
    shape: string;
    yearBuilt: string;
    yearBuiltCode: string;
    condition: string;
    fullStoreys: string;
    partStoreys: string;
    heightEffectiveYearBuilt: string;
    split: string;
    grossArea: string;
    totalBasementArea: string;
    finishedBasementArea: string;
    basementFinish: string;
    fullBaths: string;
    halfBaths: string;
    numberOfBedrooms: string;
    numberOfFireplaces: string;
    heatingType: string;
    airConditioning: string;
    garageType: string;
    garageSpaces: string;
    structureCode: string;
}
export interface FormattedYetfRecordCC extends RawYetfRecordCC, FormattedYetfRecord {
    recordType: 'CC';
    characterOfConstruction: '' | keyof typeof ccLookups.characterOfConstructionDescriptions;
    characterOfConstructionDescription?: string;
    characterOfConstructionFramingDescription?: string;
    characterOfConstructionFloorDescription?: string;
    characterOfConstructionRoofDescription?: string;
    characterOfConstructionWallsDescription?: string;
    yearBuiltCode: '' | keyof typeof ccLookups.yearBuiltCodeNames;
    yearBuiltCodeName?: typeof ccLookups.yearBuiltCodeNames[keyof typeof ccLookups.yearBuiltCodeNames];
    condition: '' | keyof typeof ccLookups.conditionCodes;
    conditionName?: string;
    conditionRankingOutOf5?: number;
    partStoreys: '' | keyof typeof ccLookups.partStoreyCodeNames;
    partStoreysName?: typeof ccLookups.partStoreyCodeNames[keyof typeof ccLookups.partStoreyCodeNames];
    heightFeet?: number;
    effectiveYearBuilt?: number;
    split: '' | keyof typeof ccLookups.splitCodeNames;
    splitName?: typeof ccLookups.splitCodeNames[keyof typeof ccLookups.splitCodeNames];
    grossAreaSquareFeet?: number;
    totalBasementAreaSquareFeet?: number;
    finishedBasementAreaSquareFeet?: number;
    basementFinish: '' | keyof typeof ccLookups.basementFinishCodeNames;
    basementFinishName?: typeof ccLookups.basementFinishCodeNames[keyof typeof ccLookups.basementFinishCodeNames];
    heatingType: '' | keyof typeof ccLookups.heatingTypeCodeNames;
    heatingTypeName?: typeof ccLookups.heatingTypeCodeNames[keyof typeof ccLookups.heatingTypeCodeNames];
    garageType: '' | keyof typeof ccLookups.garageTypeCodeNames;
    garageTypeName?: typeof ccLookups.garageTypeCodeNames[keyof typeof ccLookups.garageTypeCodeNames];
    structureCode: string;
    structureCodeClass?: typeof ccLookups.structureCodeClasses[keyof typeof ccLookups.structureCodeClasses];
    structureCodeName?: string;
}
export interface RawYetfRecordDD extends RawYetfRecord {
    recordType: 'DD';
    sequenceNumber: string;
    acres: string;
    texture: string;
    soilClass: string;
    tiling: string;
    climaticZone: string;
    woodedAcreage: string;
    orchardAcreage: string;
}
export interface FormattedYetfRecordDD extends RawYetfRecordDD, FormattedYetfRecord {
    recordType: 'DD';
    texture: '' | keyof typeof ddLookups.textureCodeNames;
    textureName?: typeof ddLookups.textureCodeNames[keyof typeof ddLookups.textureCodeNames];
    soilClass: '' | keyof typeof ddLookups.soilClassPointsRemaining;
    soilClassPointsRemainingMin?: number;
    soilClassPointsRemainingMax?: number;
}
export interface RawYetfRecordGG extends RawYetfRecord {
    recordType: 'GG';
    sequenceNumber: string;
    name: string;
    identifier: string;
    occupancyStatus: string;
    religion: string;
    schoolSupport: string;
    residencyCode: string;
    citizenship: string;
    designatedRatepayerCode: string;
    yearOfBirth: string;
    monthOfBirth: string;
    frenchLanguageEducationRights: string;
}
export interface FormattedYetfRecordGG extends RawYetfRecordGG, FormattedYetfRecord {
    recordType: 'GG';
    identifier: '' | keyof typeof ggLookups.identifierNames;
    identifierName?: string;
    occupancyStatus: '' | keyof typeof ggLookups.occupancyStatusNames;
    occupancyStatusName?: string;
    schoolSupport: '' | keyof typeof ggLookups.schoolSupportNames;
    schoolSupportName?: string;
    residencyCode: '' | keyof typeof ggLookups.residencyCodeDescriptions;
    residencyCodeDescription?: string;
    monthOfBirth: '' | keyof typeof ggLookups.monthOfBirthNames;
    monthOfBirthName?: typeof ggLookups.monthOfBirthNames[keyof typeof ggLookups.monthOfBirthNames];
}
export interface RawYetfRecordHH extends RawYetfRecord {
    recordType: 'HH';
    sequenceNumber: string;
    mailingAddress: string;
}
export interface FormattedYetfRecordHH extends RawYetfRecordHH, FormattedYetfRecord {
    recordType: 'HH';
    sequenceNumber: '1' | '2' | '3';
}
export interface RawYetfRecordJJ extends RawYetfRecord {
    recordType: 'JJ';
    cityProvinceCountry: string;
    postalCode: string;
}
export interface FormattedYetfRecordJJ extends RawYetfRecordJJ, FormattedYetfRecord {
    recordType: 'JJ';
}
export interface RawYetfRecordKK extends RawYetfRecord {
    recordType: 'KK';
    streetNumber: string;
    upperStreetNumber: string;
    qualifier: string;
    streetName: string;
    unitNumber: string;
}
export interface FormattedYetfRecordKK extends RawYetfRecordKK, FormattedYetfRecord {
    recordType: 'KK';
    civicAddress?: string;
}
export interface RawYetfRecordLL extends RawYetfRecord {
    recordType: 'LL';
    sequenceNumber: string;
    legalDescription: string;
}
export interface FormattedYetfRecordLL extends RawYetfRecordLL, FormattedYetfRecord {
    recordType: 'LL';
    sequenceNumber: '1' | '2' | '3' | '4' | '5';
}
export interface RawYetfRecordMM extends RawYetfRecord {
    recordType: 'MM';
    sequenceNumber: string;
    commentsSiteDimensions: string;
}
export interface FormattedYetfRecordMM extends RawYetfRecordMM, FormattedYetfRecord {
    recordType: 'MM';
    sequenceNumber: '1' | '2' | '3' | '4' | '5';
}
export interface RawYetfRecordPA extends RawYetfRecord {
    recordType: 'PA';
    sequenceNumber: string;
    phasedInValue: string;
    unitClass: string;
    realtyTaxClass: string;
    realtyTaxQualifier: string;
    tenantTaxLiability: string;
    noticeIssued: string;
    previousYearAssessment: string;
    unitSupport: string;
    pooledTaxesUnit: string;
    partnershipCode: string;
    propertyType: string;
    propertyTotal: string;
    realtyPortionTotal: string;
}
export interface FormattedYetfRecordPA extends RawYetfRecordPA, FormattedYetfRecord {
    recordType: 'PA';
    phasedInValueDollars: number;
    unitClass: '' | keyof typeof paLookups.unitClassDescriptions;
    unitClassDescription?: typeof paLookups.unitClassDescriptions[keyof typeof paLookups.unitClassDescriptions];
    realtyTaxClass: '' | keyof typeof paLookups.realtyTaxClassNames;
    realtyTaxClassName?: typeof paLookups.realtyTaxClassNames[keyof typeof paLookups.realtyTaxClassNames];
    realtyTaxQualifier: '' | keyof typeof paLookups.realtyTaxQualifiers;
    realtyTaxQualifierClass?: 'Taxable' | 'Payment in Lieu';
    realtyTaxQualifierName?: string;
    previousYearAssessmentDollars: number;
    unitSupport: '' | keyof typeof paLookups.unitSupportNames;
    unitSupportName?: typeof paLookups.unitSupportNames[keyof typeof paLookups.unitSupportNames];
    propertyType: '' | keyof typeof paLookups.propertyTypeNames;
    propertyTypeName?: typeof paLookups.propertyTypeNames[keyof typeof paLookups.propertyTypeNames];
}
export interface RawYetfRecordPB extends RawYetfRecord {
    recordType: 'PB';
    sequenceNumber: string;
    realtyPortionEnglishPublic: string;
    realtyPortionEnglishSeparate: string;
    realtyPortionNoSupport: string;
}
export interface FormattedYetfRecordPB extends RawYetfRecordPB, FormattedYetfRecord {
    recordType: 'PB';
    sequenceNumber: '1';
    realtyPortionEnglishPublicDollars: number;
    realtyPortionEnglishSeparateDollars: number;
    realtyPortionNoSupportDollars: number;
}
export interface RawYetfRecordPC extends RawYetfRecord {
    recordType: 'PC';
    sequenceNumber: string;
    realtyPortionFrenchPublic: string;
    realtyPortionFrenchSeparate: string;
}
export interface FormattedYetfRecordPC extends RawYetfRecordPC, FormattedYetfRecord {
    recordType: 'PC';
    sequenceNumber: '1';
    realtyPortionFrenchPublicDollars: number;
    realtyPortionFrenchSeparateDollars: number;
}
export interface RawYetfRecordPD extends RawYetfRecord {
    recordType: 'PD';
    sequenceNumber: string;
    realtyPortionProtestantSeparate: string;
}
export interface FormattedYetfRecordPD extends RawYetfRecordPD, FormattedYetfRecord {
    recordType: 'PD';
    sequenceNumber: '1';
    realtyPortionProtestantSeparateDollars: number;
}
export interface RawYetfRecordPI extends RawYetfRecord {
    recordType: 'PI';
    phaseInStartingPoint: string;
    phaseInValue: string;
    phaseInDestinationValue: string;
}
export interface FormattedYetfRecordPI extends RawYetfRecordPI, FormattedYetfRecord {
    recordType: 'PI';
    phaseInStartingPointDollars: number;
    phaseInValueDollars: number;
    phaseInDestinationValueDollars: number;
}
