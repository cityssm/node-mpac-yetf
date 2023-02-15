import * as ccLookups from '../lookups/ccLookups.js';
export function formatCC(recordCC) {
    const formattedRecordCC = recordCC;
    const characterOfConstruction = ccLookups.characterOfConstructionDescriptions[formattedRecordCC.characterOfConstruction];
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
    if (formattedRecordCC.quality !== '') {
        formattedRecordCC.qualityOutOf10 = Number.parseFloat(formattedRecordCC.quality);
    }
    formattedRecordCC.yearBuiltCodeName =
        ccLookups.yearBuiltCodeNames[formattedRecordCC.yearBuiltCode];
    const condition = ccLookups.conditionCodes[formattedRecordCC.condition];
    if (condition !== undefined) {
        formattedRecordCC.conditionName = condition.name;
        formattedRecordCC.conditionRankingOutOf5 = condition.ranking;
    }
    formattedRecordCC.partStoreysName =
        ccLookups.partStoreyCodeNames[formattedRecordCC.partStoreys];
    if ((formattedRecordCC.structureCode >= '100' &&
        formattedRecordCC.structureCode <= '199') ||
        (formattedRecordCC.structureCode >= '300' &&
            formattedRecordCC.structureCode <= '399')) {
        formattedRecordCC.effectiveYearBuilt = Number.parseInt(formattedRecordCC.heightEffectiveYearBuilt, 10);
    }
    else {
        formattedRecordCC.heightFeet = Number.parseInt(formattedRecordCC.heightEffectiveYearBuilt, 10);
    }
    formattedRecordCC.splitName =
        ccLookups.splitCodeNames[formattedRecordCC.split];
    formattedRecordCC.grossAreaSquareFeet = Number.parseInt(formattedRecordCC.grossArea, 10);
    if (formattedRecordCC.totalBasementArea !== '') {
        formattedRecordCC.totalBasementAreaSquareFeet = Number.parseInt(formattedRecordCC.totalBasementArea);
    }
    if (formattedRecordCC.finishedBasementArea !== '') {
        formattedRecordCC.finishedBasementAreaSquareFeet = Number.parseFloat(formattedRecordCC.finishedBasementArea);
    }
    formattedRecordCC.basementFinishName =
        ccLookups.basementFinishCodeNames[formattedRecordCC.basementFinish];
    formattedRecordCC.heatingTypeName =
        ccLookups.heatingTypeCodeNames[formattedRecordCC.heatingType];
    formattedRecordCC.garageTypeName =
        ccLookups.garageTypeCodeNames[formattedRecordCC.garageType];
    const structureCode = Number.parseInt(formattedRecordCC.structureCode);
    formattedRecordCC.structureCodeClass =
        ccLookups.structureCodeClasses[structureCode - (structureCode % 100)];
    formattedRecordCC.structureCodeName =
        ccLookups.structureCodeNames[formattedRecordCC.structureCode];
    return formattedRecordCC;
}
