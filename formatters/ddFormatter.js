import * as ddLookups from '../lookups/ddLookups.js';
export function formatDD(recordDD) {
    const formattedRecordDD = recordDD;
    formattedRecordDD.textureName =
        ddLookups.textureCodeNames[formattedRecordDD.texture];
    const soilClass = ddLookups.soilClassPointsRemaining[formattedRecordDD.soilClass];
    if (soilClass !== undefined) {
        formattedRecordDD.soilClassPointsRemainingMin = soilClass.min;
        formattedRecordDD.soilClassPointsRemainingMax = soilClass.max;
    }
    return formattedRecordDD;
}
