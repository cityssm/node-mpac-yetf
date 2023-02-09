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
    propertyCodeClass: string;
    propertyCodeName: string;
    servicesName?: string;
    accessName: string;
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
    characterOfConstructionDescription?: string;
    characterOfConstructionFramingDescription?: string;
    characterOfConstructionFloorDescription?: string;
    characterOfConstructionRoofDescription?: string;
    characterOfConstructionWallsDescription?: string;
    yearBuiltCodeName?: string;
    conditionName?: string;
    conditionRankingOutOf5?: number;
    partStoreysName?: string;
    heightFeet?: number;
    effectiveYearBuilt?: number;
    splitName?: string;
    grossAreaSquareFeet?: number;
    totalBasementAreaSquareFeet?: number;
    finishedBasementAreaSquareFeet?: number;
    basementFinishName?: string;
    heatingTypeName?: string;
    garageTypeName?: string;
    structureCodeClass?: string;
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
    textureName?: string;
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
    identifierName?: string;
    occupancyStatusName?: string;
    schoolSupportName?: string;
    residencyCodeDescription?: string;
}
export interface RawYetfRecordHH extends RawYetfRecord {
    recordType: 'HH';
    sequenceNumber: string;
    mailingAddress: string;
}
export interface RawYetfRecordJJ extends RawYetfRecord {
    recordType: 'JJ';
    cityProvinceCountry: string;
    postalCode: string;
}
export interface RawYetfRecordKK extends RawYetfRecord {
    recordType: 'KK';
    streetNumber: string;
    upperStreetNumber: string;
    qualifier: string;
    streetName: string;
    unitNumber: string;
}
export interface RawYetfRecordLL extends RawYetfRecord {
    recordType: 'LL';
    sequenceNumber: string;
    legalDescription: string;
}
export interface RawYetfRecordMM extends RawYetfRecord {
    recordType: 'MM';
    sequenceNumber: string;
    commentsSiteDimensions: string;
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
    unitClassDescription?: string;
    realtyTaxClassName?: string;
    realtyTaxQualifierClass?: string;
    realtyTaxQualifierName?: string;
    unitSupportName?: string;
    propertyTypeName?: string;
}
export interface RawYetfRecordPB extends RawYetfRecord {
    recordType: 'PB';
    sequenceNumber: string;
    realtyPortionEnglishPublic: string;
    realtyPortionEnglishSeparate: string;
    realtyPortionNoSupport: string;
}
export interface RawYetfRecordPC extends RawYetfRecord {
    recordType: 'PC';
    sequenceNumber: string;
    realtyPortionFrenchPublic: string;
    realtyPortionFrenchSeparate: string;
}
export interface RawYetfRecordPD extends RawYetfRecord {
    recordType: 'PD';
    sequenceNumber: string;
    realtyPortionProtestantSeparate: string;
}
export interface RawYetfRecordPI extends RawYetfRecord {
    recordType: 'PI';
    phaseInStartingPoint: string;
    phaseInValue: string;
    phaseInDestinationValue: string;
}