import type * as types from './types'

interface ParsedRollNumber {
  county: string
  municipality: string
  mapArea: string
  mapDivision: string
  mapSubdivision: string
  parcel: string
  parcelSub: string
  primarySubordinate: string
}

function parseAA(recordAA: types.RawYetfRecordAA, recordString: string): void {
  recordAA.ward = recordString.slice(21, 23).trim()
  recordAA.poll = recordString.slice(23, 26).trim()
  recordAA.pollSuffix = recordString.slice(26, 27).trim()
  recordAA.highSchoolCode = recordString.slice(27, 29).trim()
  recordAA.publicSchoolCode = recordString.slice(29, 31).trim()
  recordAA.separateSchoolCode = recordString.slice(31, 33).trim()
  recordAA.specialRateArea = recordString.slice(33, 39).trim()
  recordAA.pacCode = recordString.slice(39, 42).trim()
  // filler 42, 48
  recordAA.previousRollNumber = recordString.slice(48, 67).trim()
  recordAA.frenchPublicSchoolCode = recordString.slice(67, 69).trim()
  recordAA.frenchSeparateSchoolCode = recordString.slice(69, 71).trim()
}

function parseBB(recordBB: types.RawYetfRecordBB, recordString: string): void {
  recordBB.frontage =
    recordString.slice(21, 25).trim() + '.' + recordString.slice(25, 27).trim()
  recordBB.siteArea =
    recordString.slice(27, 32).trim() + '.' + recordString.slice(32, 34).trim()
  recordBB.unitOfMeasurement = recordString.slice(34, 35).trim()
  recordBB.depth =
    recordString.slice(35, 38).trim() + '.' + recordString.slice(38, 40).trim()
  recordBB.siteImprovement = recordString.slice(40, 42).trim()
  recordBB.propertyCode = recordString.slice(42, 45).trim()
  recordBB.zoningUFFI = recordString.slice(45, 52).trim()
  recordBB.services = recordString.slice(52, 53).trim()
  recordBB.access = recordString.slice(53, 54).trim()
}

function parseCC(recordCC: types.RawYetfRecordCC, recordString: string): void {
  recordCC.sequenceNumber = recordString.slice(21, 22).trim()
  // filler 22, 24
  recordCC.characterOfConstruction = recordString.slice(24, 27).trim()
  recordCC.quality =
    recordString.slice(27, 29) + '.' + recordString.slice(29, 30).trim()
  recordCC.shape = recordString.slice(30, 31).trim()
  recordCC.yearBuilt = recordString.slice(31, 35).trim()
  recordCC.yearBuiltCode = recordString.slice(35, 36).trim()
  recordCC.condition = recordString.slice(36, 37).trim()
  recordCC.fullStoreys = recordString.slice(37, 39).trim()
  recordCC.partStoreys = recordString.slice(39, 40).trim()
  recordCC.heightEffectiveYearBuilt = recordString.slice(40, 44).trim()
  recordCC.split = recordString.slice(44, 45).trim()
  recordCC.grossArea = recordString.slice(45, 51).trim()
  recordCC.totalBasementArea = recordString.slice(51, 55).trim()
  recordCC.finishedBasementArea = recordString.slice(55, 59).trim()
  recordCC.basementFinish = recordString.slice(59, 60).trim()
  recordCC.fullBaths = recordString.slice(60, 61).trim()
  recordCC.halfBaths = recordString.slice(61, 62).trim()
  recordCC.numberOfBedrooms = recordString.slice(62, 64).trim()
  recordCC.numberOfFireplaces = recordString.slice(64, 65).trim()
  recordCC.heatingType = recordString.slice(65, 67).trim()
  recordCC.airConditioning = recordString.slice(67, 68).trim()
  recordCC.garageType = recordString.slice(68, 69).trim()
  recordCC.garageSpaces = recordString.slice(69, 72).trim()
  recordCC.structureCode = recordString.slice(72, 75).trim()
}

function parseDD(recordDD: types.RawYetfRecordDD, recordString: string): void {
  recordDD.sequenceNumber = recordString.slice(21, 22).trim()
  recordDD.acres =
    recordString.slice(22, 26).trim() + '.' + recordString.slice(26, 28).trim()
  recordDD.texture = recordString.slice(28, 29).trim()
  recordDD.soilClass = recordString.slice(29, 30).trim()
  recordDD.tiling = recordString.slice(30, 31).trim()
  recordDD.climaticZone = recordString.slice(31, 32).trim()
  recordDD.woodedAcreage =
    recordString.slice(32, 36).trim() + '.' + recordString.slice(36, 38).trim()
  // filler 38, 43
  recordDD.orchardAcreage =
    recordString.slice(43, 47).trim() + '.' + recordString.slice(47, 49).trim()
}

function parseGG(recordGG: types.RawYetfRecordGG, recordString: string): void {
  // filler 21, 22
  recordGG.sequenceNumber = recordString.slice(22, 25).trim()
  recordGG.name = recordString.slice(25, 53).trim()
  recordGG.identifier = recordString.slice(53, 54).trim()
  recordGG.occupancyStatus = recordString.slice(54, 55).trim()
  recordGG.religion = recordString.slice(55, 56).trim()
  recordGG.schoolSupport = recordString.slice(56, 57).trim()
  recordGG.residencyCode = recordString.slice(57, 58).trim()
  recordGG.citizenship = recordString.slice(58, 59).trim()
  recordGG.designatedRatepayerCode = recordString.slice(59, 60).trim()
  recordGG.yearOfBirth = recordString.slice(60, 64).trim()
  recordGG.monthOfBirth = recordString.slice(64, 66).trim()
  // filler 66, 68
  recordGG.frenchLanguageEducationRights = recordString.slice(68, 69).trim()
}

function parseHH(recordHH: types.RawYetfRecordHH, recordString: string): void {
  recordHH.sequenceNumber = recordString.slice(21, 22).trim()
  recordHH.mailingAddress = recordString.slice(22, 50).trim()
}

function parseJJ(recordJJ: types.RawYetfRecordJJ, recordString: string): void {
  recordJJ.cityProvinceCountry = recordString.slice(21, 42).trim()
  recordJJ.postalCode = recordString.slice(42, 49).trim()
}

function parseKK(recordKK: types.RawYetfRecordKK, recordString: string): void {
  recordKK.streetNumber = recordString.slice(21, 26).trim()
  recordKK.upperStreetNumber = recordString.slice(26, 31).trim()
  recordKK.qualifier = recordString.slice(31, 32).trim()
  recordKK.streetName = recordString.slice(32, 49).trim()
  recordKK.unitNumber = recordString.slice(49, 54).trim()
}

function parseLL(recordLL: types.RawYetfRecordLL, recordString: string): void {
  recordLL.sequenceNumber = recordString.slice(21, 22).trim()
  recordLL.legalDescription = recordString.slice(22, 50).trim()
}

function parseMM(recordMM: types.RawYetfRecordMM, recordString: string): void {
  recordMM.sequenceNumber = recordString.slice(21, 22).trim()
  recordMM.commentsSiteDimensions = recordString.slice(22, 50).trim()
}

function parsePA(recordPA: types.RawYetfRecordPA, recordString: string): void {
  recordPA.sequenceNumber = recordString.slice(21, 22).trim()
  recordPA.phaseInValue = recordString.slice(22, 32).trim()
  recordPA.unitClass = recordString.slice(32, 35).trim()
  recordPA.realtyTaxClass = recordString.slice(35, 36).trim()
  recordPA.realtyTaxQualifier = recordString.slice(36, 37).trim()
  // filler 37, 54
  recordPA.tenantTaxLiability = recordString.slice(54, 55).trim()
  recordPA.noticeIssued = recordString.slice(55, 56).trim()
  recordPA.previousYearAssessment = recordString.slice(56, 66).trim()
  recordPA.unitSupport = recordString.slice(66, 67).trim()
  // filler 67, 68
  recordPA.pooledTaxesUnit = recordString.slice(68, 69).trim()
  recordPA.partnershipCode = recordString.slice(69, 70).trim()
  recordPA.propertyType = recordString.slice(70, 71).trim()
  recordPA.propertyTotal = recordString.slice(71, 81).trim()
  recordPA.realtyPortionTotal = recordString.slice(81, 91).trim()
}

function parsePB(recordPB: types.RawYetfRecordPB, recordString: string): void {
  recordPB.sequenceNumber = recordString.slice(21, 22).trim()
  recordPB.realtyPortionEnglishPublic = recordString.slice(22, 32).trim()
  recordPB.realtyPortionEnglishSeparate = recordString.slice(32, 42).trim()
  recordPB.realtyPortionNoSupport = recordString.slice(42, 52).trim()
}

function parsePC(recordPC: types.RawYetfRecordPC, recordString: string): void {
  recordPC.sequenceNumber = recordString.slice(21, 22).trim()
  recordPC.realtyPortionFrenchPublic = recordString.slice(22, 32).trim()
  recordPC.realtyPortionFrenchSeparate = recordString.slice(32, 42).trim()
}

function parsePD(recordPD: types.RawYetfRecordPD, recordString: string): void {
  recordPD.sequenceNumber = recordString.slice(21, 22).trim()
  recordPD.realtyPortionProtestantSeparate = recordString.slice(22, 32).trim()
}

function parsePI(recordPI: types.RawYetfRecordPI, recordString: string): void {
  recordPI.phaseInStartingPoint = recordString.slice(21, 31).trim()
  recordPI.phaseInValue = recordString.slice(31, 41).trim()
  recordPI.phaseInDestinationValue = recordString.slice(41, 51).trim()
}

export function parseYetfRecordString(
  recordString: string
): types.RawYetfRecord {
  const rollNumber = recordString.slice(0, 19)
  const recordType = recordString.slice(19, 21) as types.RecordType

  const record: types.RawYetfRecord = {
    rollNumber,
    recordType
  }

  switch (recordType) {
    case 'AA': {
      parseAA(record as types.RawYetfRecordAA, recordString)
      break
    }
    case 'BB': {
      parseBB(record as types.RawYetfRecordBB, recordString)
      break
    }
    case 'CC': {
      parseCC(record as types.RawYetfRecordCC, recordString)
      break
    }
    case 'DD': {
      parseDD(record as types.RawYetfRecordDD, recordString)
      break
    }
    case 'GG': {
      parseGG(record as types.RawYetfRecordGG, recordString)
      break
    }
    case 'HH': {
      parseHH(record as types.RawYetfRecordHH, recordString)
      break
    }
    case 'JJ': {
      parseJJ(record as types.RawYetfRecordJJ, recordString)
      break
    }
    case 'KK': {
      parseKK(record as types.RawYetfRecordKK, recordString)
      break
    }
    case 'LL': {
      parseLL(record as types.RawYetfRecordLL, recordString)
      break
    }
    case 'MM': {
      parseMM(record as types.RawYetfRecordMM, recordString)
      break
    }
    case 'PA': {
      parsePA(record as types.RawYetfRecordPA, recordString)
      break
    }
    case 'PB': {
      parsePB(record as types.RawYetfRecordPB, recordString)
      break
    }
    case 'PC': {
      parsePC(record as types.RawYetfRecordPC, recordString)
      break
    }
    case 'PD': {
      parsePD(record as types.RawYetfRecordPD, recordString)
      break
    }
    case 'PI': {
      parsePI(record as types.RawYetfRecordPI, recordString)
      break
    }

    default: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown recordType = ${recordType}`)
    }
  }

  return record
}

export function parseRollNumber(rollNumber: string): ParsedRollNumber {
  const parsedRollNumber: ParsedRollNumber = {
    county: rollNumber.slice(0, 2),
    municipality: rollNumber.slice(2, 4),
    mapArea: rollNumber.slice(4, 6),
    mapDivision: rollNumber.slice(6, 7),
    mapSubdivision: rollNumber.slice(7, 10),
    parcel: rollNumber.slice(10, 13),
    parcelSub: rollNumber.slice(13, 15),
    primarySubordinate: rollNumber.slice(15, 19)
  }

  return parsedRollNumber
}
