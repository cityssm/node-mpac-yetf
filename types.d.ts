export interface YetfRecord {
    rollNumber: string;
    recordType: string;
}
export interface YetfRecordAA extends YetfRecord {
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
export interface YetfRecordBB extends YetfRecord {
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
export interface YetfRecordCC extends YetfRecord {
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
    heightEffectiveYear: string;
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
export interface YetfRecordDD extends YetfRecord {
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
export interface YetfRecordGG extends YetfRecord {
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
export interface YetfRecordHH extends YetfRecord {
    recordType: 'HH';
    sequenceNumber: string;
    mailingAddress: string;
}
export interface YetfRecordJJ extends YetfRecord {
    recordType: 'JJ';
    cityProvinceCountry: string;
    postalCode: string;
}
export interface YetfRecordKK extends YetfRecord {
    recordType: 'KK';
    streetNumber: string;
    upperStreetNumber: string;
    qualifier: string;
    streetName: string;
    unitNumber: string;
}
export interface YetfRecordLL extends YetfRecord {
    recordType: 'LL';
    sequenceNumber: string;
    legalDescription: string;
}
export interface YetfRecordMM extends YetfRecord {
    recordType: 'MM';
    sequenceNumber: string;
    commentsSiteDimensions: string;
}
export interface YetfRecordPA extends YetfRecord {
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
export interface YetfRecordPB extends YetfRecord {
    recordType: 'PB';
    sequenceNumber: string;
    realtyPortionEnglishPublic: string;
    realtyPortionEnglishSeparate: string;
    realtyPortionNoSupport: string;
}
export interface YetfRecordPC extends YetfRecord {
    recordType: 'PC';
    sequenceNumber: string;
    realtyPortionFrenchPublic: string;
    realtyPortionFrenchSeparate: string;
}
export interface YetfRecordPD extends YetfRecord {
    recordType: 'PD';
    sequenceNumber: string;
    realtyPortionProtestantSeparate: string;
}
export interface YetfRecordPI extends YetfRecord {
    recordType: 'PI';
    phaseInStartingPoint: string;
    phaseInValue: string;
    phaseInDestinationValue: string;
}
