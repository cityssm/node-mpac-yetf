export function parseYetfRecordString(recordString) {
    const rollNumber = recordString.slice(0, 18);
    const recordType = recordString.slice(19, 21);
    let record;
    switch (recordType) {
        case 'AA': {
            const recordAA = {
                rollNumber,
                recordType,
                ward: recordString.slice(21, 23).trim(),
                poll: recordString.slice(23, 26).trim(),
                pollSuffix: recordString.slice(26, 27).trim(),
                highSchoolCode: recordString.slice(27, 29).trim(),
                publicSchoolCode: recordString.slice(29, 31).trim(),
                separateSchoolCode: recordString.slice(31, 33).trim(),
                specialRateArea: recordString.slice(33, 39).trim(),
                pacCode: recordString.slice(39, 42).trim(),
                previousRollNumber: recordString.slice(48, 67).trim(),
                frenchPublicSchoolCode: recordString.slice(67, 69).trim(),
                frenchSeparateSchoolCode: recordString.slice(69, 71).trim()
            };
            record = recordAA;
            break;
        }
        case 'BB': {
            const recordBB = {
                rollNumber,
                recordType,
                frontage: recordString.slice(21, 25).trim() +
                    '.' +
                    recordString.slice(25, 27).trim(),
                siteArea: recordString.slice(27, 32).trim() +
                    '.' +
                    recordString.slice(32, 34).trim(),
                unitOfMeasurement: recordString.slice(34, 35).trim(),
                depth: recordString.slice(35, 38).trim() +
                    '.' +
                    recordString.slice(38, 40).trim(),
                siteImprovement: recordString.slice(40, 42).trim(),
                propertyCode: recordString.slice(42, 45).trim(),
                zoningUFFI: recordString.slice(45, 52).trim(),
                services: recordString.slice(52, 53).trim(),
                access: recordString.slice(53, 54).trim()
            };
            record = recordBB;
            break;
        }
        case 'CC': {
            const recordCC = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                characterOfConstruction: recordString.slice(24, 27).trim(),
                quality: recordString.slice(27, 29) + '.' + recordString.slice(29, 30).trim(),
                shape: recordString.slice(30, 31).trim(),
                yearBuilt: recordString.slice(31, 35).trim(),
                yearBuiltCode: recordString.slice(35, 36).trim(),
                condition: recordString.slice(36, 37).trim(),
                fullStoreys: recordString.slice(37, 39).trim(),
                partStoreys: recordString.slice(39, 40).trim(),
                heightEffectiveYear: recordString.slice(40, 44).trim(),
                split: recordString.slice(44, 45).trim(),
                grossArea: recordString.slice(45, 51).trim(),
                totalBasementArea: recordString.slice(51, 55).trim(),
                finishedBasementArea: recordString.slice(55, 59).trim(),
                basementFinish: recordString.slice(59, 60).trim(),
                fullBaths: recordString.slice(60, 61).trim(),
                halfBaths: recordString.slice(61, 62).trim(),
                numberOfBedrooms: recordString.slice(62, 64).trim(),
                numberOfFireplaces: recordString.slice(64, 65).trim(),
                heatingType: recordString.slice(65, 67).trim(),
                airConditioning: recordString.slice(67, 68).trim(),
                garageType: recordString.slice(68, 69).trim(),
                garageSpaces: recordString.slice(69, 72).trim(),
                structureCode: recordString.slice(72, 75).trim()
            };
            record = recordCC;
            break;
        }
        case 'DD': {
            const recordDD = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                acres: recordString.slice(22, 26).trim() +
                    '.' +
                    recordString.slice(26, 28).trim(),
                texture: recordString.slice(28, 29).trim(),
                soilClass: recordString.slice(29, 30).trim(),
                tiling: recordString.slice(30, 31).trim(),
                climaticZone: recordString.slice(31, 32).trim(),
                woodedAcreage: recordString.slice(32, 36).trim() +
                    '.' +
                    recordString.slice(36, 38).trim(),
                orchardAcreage: recordString.slice(43, 47).trim() +
                    '.' +
                    recordString.slice(47, 49).trim()
            };
            record = recordDD;
            break;
        }
        case 'GG': {
            const recordGG = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(22, 25).trim(),
                name: recordString.slice(25, 53).trim(),
                identifier: recordString.slice(53, 54).trim(),
                occupancyStatus: recordString.slice(54, 55).trim(),
                religion: recordString.slice(55, 56).trim(),
                schoolSupport: recordString.slice(56, 57).trim(),
                residencyCode: recordString.slice(57, 58).trim(),
                citizenship: recordString.slice(58, 59).trim(),
                designatedRatepayerCode: recordString.slice(59, 60).trim(),
                yearOfBirth: recordString.slice(60, 64).trim(),
                monthOfBirth: recordString.slice(64, 66).trim(),
                frenchLanguageEducationRights: recordString.slice(68, 69).trim()
            };
            record = recordGG;
            break;
        }
        case 'HH': {
            const recordHH = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                mailingAddress: recordString.slice(22, 50).trim()
            };
            record = recordHH;
            break;
        }
        case 'JJ': {
            const recordJJ = {
                rollNumber,
                recordType,
                cityProvinceCountry: recordString.slice(21, 42).trim(),
                postalCode: recordString.slice(42, 49).trim()
            };
            record = recordJJ;
            break;
        }
        case 'KK': {
            const recordKK = {
                rollNumber,
                recordType,
                streetNumber: recordString.slice(21, 26).trim(),
                upperStreetNumber: recordString.slice(26, 31).trim(),
                qualifier: recordString.slice(31, 32).trim(),
                streetName: recordString.slice(32, 49).trim(),
                unitNumber: recordString.slice(49, 54).trim()
            };
            record = recordKK;
            break;
        }
        case 'LL': {
            const recordLL = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                legalDescription: recordString.slice(22, 50).trim()
            };
            record = recordLL;
            break;
        }
        case 'MM': {
            const recordMM = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                commentsSiteDimensions: recordString.slice(22, 50).trim()
            };
            record = recordMM;
            break;
        }
        case 'PA': {
            const recordPA = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                phasedInValue: recordString.slice(22, 32).trim(),
                unitClass: recordString.slice(32, 35).trim(),
                realtyTaxClass: recordString.slice(35, 36).trim(),
                realtyTaxQualifier: recordString.slice(36, 37).trim(),
                tenantTaxLiability: recordString.slice(54, 55).trim(),
                noticeIssued: recordString.slice(55, 56).trim(),
                previousYearAssessment: recordString.slice(56, 66).trim(),
                unitSupport: recordString.slice(66, 67).trim(),
                pooledTaxesUnit: recordString.slice(68, 69).trim(),
                partnershipCode: recordString.slice(69, 70).trim(),
                propertyType: recordString.slice(70, 71).trim(),
                propertyTotal: recordString.slice(71, 81).trim(),
                realtyPortionTotal: recordString.slice(81, 91).trim()
            };
            record = recordPA;
            break;
        }
        case 'PB': {
            const recordPB = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                realtyPortionEnglishPublic: recordString.slice(22, 32).trim(),
                realtyPortionEnglishSeparate: recordString.slice(32, 42).trim(),
                realtyPortionNoSupport: recordString.slice(42, 52).trim()
            };
            record = recordPB;
            break;
        }
        case 'PC': {
            const recordPC = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                realtyPortionFrenchPublic: recordString.slice(22, 32).trim(),
                realtyPortionFrenchSeparate: recordString.slice(32, 42).trim()
            };
            record = recordPC;
            break;
        }
        case 'PD': {
            const recordPD = {
                rollNumber,
                recordType,
                sequenceNumber: recordString.slice(21, 22).trim(),
                realtyPortionProtestantSeparate: recordString.slice(22, 32).trim()
            };
            record = recordPD;
            break;
        }
        case 'PI': {
            const recordPI = {
                rollNumber,
                recordType,
                phaseInStartingPoint: recordString.slice(21, 31).trim(),
                phaseInValue: recordString.slice(31, 41).trim(),
                phaseInDestinationValue: recordString.slice(41, 51).trim()
            };
            record = recordPI;
            break;
        }
        default: {
            record = {
                rollNumber,
                recordType
            };
        }
    }
    return record;
}
