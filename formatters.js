import { accessCodeNames, basementFinishCodeNames, characterOfConstructionDescriptions, conditionCodes, garageTypeCodeNames, heatingTypeCodeNames, partStoreyCodeNames, propertyCodeClasses, propertyCodeNames, serviceCodeNames, splitCodeNames, structureCodeClasses, structureCodeNames, yearBuiltCodeNames } from './mpacLookupTables.js';
const FEET_TO_METRES = 0.3048;
const ACRES_TO_SQUARE_FEET = 43560;
export function formatRawRecordBB(recordBB) {
    const formattedRecordBB = recordBB;
    if (formattedRecordBB.frontage !== '') {
        formattedRecordBB.frontageFeet = Number.parseFloat(formattedRecordBB.frontage);
        formattedRecordBB.frontageMetres =
            formattedRecordBB.frontageFeet * FEET_TO_METRES;
    }
    if (formattedRecordBB.unitOfMeasurement === 'F') {
        formattedRecordBB.siteAreaSquareFeet = Number.parseFloat(formattedRecordBB.siteArea);
        formattedRecordBB.siteAreaAcres =
            formattedRecordBB.siteAreaSquareFeet / ACRES_TO_SQUARE_FEET;
    }
    else if (formattedRecordBB.unitOfMeasurement === 'A') {
        formattedRecordBB.siteAreaAcres = Number.parseFloat(formattedRecordBB.siteArea);
        formattedRecordBB.siteAreaSquareFeet =
            formattedRecordBB.siteAreaAcres * ACRES_TO_SQUARE_FEET;
    }
    if (formattedRecordBB.propertyCode >= '200' &&
        formattedRecordBB.propertyCode <= '299') {
        if (formattedRecordBB.depth !== '') {
            formattedRecordBB.farmForestryExemptionAcres = Number.parseFloat(formattedRecordBB.depth);
        }
    }
    else if (formattedRecordBB.depth !== '') {
        formattedRecordBB.depthFeet = Number.parseFloat(formattedRecordBB.depth);
        formattedRecordBB.depthMetres = formattedRecordBB.depthFeet * FEET_TO_METRES;
    }
    formattedRecordBB.siteImprovementHasBoathouse =
        formattedRecordBB.siteImprovement.includes('B');
    formattedRecordBB.siteImprovementHasSiteImprovements =
        formattedRecordBB.siteImprovement.includes('I');
    formattedRecordBB.siteImprovementHasOther =
        formattedRecordBB.siteImprovement.includes('O');
    formattedRecordBB.siteImprovementHasAccessibleFacilities =
        formattedRecordBB.siteImprovement.includes('D');
    formattedRecordBB.siteImprovementHasPool =
        formattedRecordBB.siteImprovement.includes('P');
    formattedRecordBB.siteImprovementHasElevator =
        formattedRecordBB.siteImprovement.includes('E');
    formattedRecordBB.siteImprovementHasSauna =
        formattedRecordBB.siteImprovement.includes('S');
    formattedRecordBB.siteImprovementHasMultiple =
        formattedRecordBB.siteImprovement.includes('M');
    formattedRecordBB.siteImprovementHasTennisCourts =
        formattedRecordBB.siteImprovement.includes('T');
    const propertyCodeNumber = Number.parseInt(formattedRecordBB.propertyCode);
    formattedRecordBB.propertyCodeClass =
        propertyCodeClasses[propertyCodeNumber - (propertyCodeNumber % 100)];
    formattedRecordBB.propertyCodeName = propertyCodeNames[propertyCodeNumber];
    formattedRecordBB.servicesName = serviceCodeNames[formattedRecordBB.services];
    formattedRecordBB.accessName = accessCodeNames[formattedRecordBB.access];
    return formattedRecordBB;
}
export function formatRawRecordCC(recordCC) {
    const formattedRecordCC = recordCC;
    const characterOfConstruction = characterOfConstructionDescriptions[formattedRecordCC.characterOfConstruction];
    if (characterOfConstruction !== undefined) {
        formattedRecordCC.characterOfConstructionDescription =
            characterOfConstruction.description ?? '';
        formattedRecordCC.characterOfConstructionFramingDescription =
            characterOfConstruction.framing ?? '';
        formattedRecordCC.characterOfConstructionFloorDescription =
            characterOfConstruction.floor ?? '';
        formattedRecordCC.characterOfConstructionRoofDescription =
            characterOfConstruction.roof ?? '';
        formattedRecordCC.characterOfConstructionWallsDescription =
            characterOfConstruction.walls ?? '';
    }
    formattedRecordCC.yearBuiltCodeName =
        yearBuiltCodeNames[formattedRecordCC.yearBuiltCode];
    const condition = conditionCodes[formattedRecordCC.condition];
    if (condition !== undefined) {
        formattedRecordCC.conditionName = condition.name;
        formattedRecordCC.conditionRankingOutOf5 = condition.ranking;
    }
    formattedRecordCC.partStoreysName =
        partStoreyCodeNames[formattedRecordCC.partStoreys];
    if ((formattedRecordCC.structureCode >= '100' &&
        formattedRecordCC.structureCode <= '199') ||
        (formattedRecordCC.structureCode >= '300' &&
            formattedRecordCC.structureCode <= '399')) {
        formattedRecordCC.effectiveYearBuilt = Number.parseInt(formattedRecordCC.heightEffectiveYearBuilt, 10);
    }
    else {
        formattedRecordCC.heightFeet = Number.parseInt(formattedRecordCC.heightEffectiveYearBuilt, 10);
    }
    formattedRecordCC.splitName = splitCodeNames[formattedRecordCC.split];
    formattedRecordCC.grossAreaSquareFeet = Number.parseInt(formattedRecordCC.grossArea, 10);
    if (formattedRecordCC.totalBasementArea !== '') {
        formattedRecordCC.totalBasementAreaSquareFeet = Number.parseInt(formattedRecordCC.totalBasementArea);
    }
    if (formattedRecordCC.finishedBasementArea !== '') {
        formattedRecordCC.finishedBasementAreaSquareFeet = Number.parseFloat(formattedRecordCC.finishedBasementArea);
    }
    formattedRecordCC.basementFinishName =
        basementFinishCodeNames[formattedRecordCC.basementFinish];
    formattedRecordCC.heatingTypeName =
        heatingTypeCodeNames[formattedRecordCC.heatingType];
    formattedRecordCC.garageTypeName =
        garageTypeCodeNames[formattedRecordCC.garageType];
    const structureCode = Number.parseInt(formattedRecordCC.structureCode);
    formattedRecordCC.structureCodeClass =
        structureCodeClasses[structureCode - (structureCode % 100)];
    formattedRecordCC.structureCodeName = structureCodeNames[structureCode];
    return formattedRecordCC;
}
