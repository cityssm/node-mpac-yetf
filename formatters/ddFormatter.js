import * as lookups from '@cityssm/mpac-tools/codes';
export function formatDD(recordDD) {
    const formattedRecordDD = recordDD;
    // Texture
    formattedRecordDD.textureName =
        lookups.textureCodeNames[formattedRecordDD.texture];
    // Soil Class
    const soilClass = lookups.soilClassPointsRemaining[formattedRecordDD.soilClass];
    if (soilClass !== undefined) {
        formattedRecordDD.soilClassPointsRemainingMin = soilClass.min;
        formattedRecordDD.soilClassPointsRemainingMax = soilClass.max;
    }
    return formattedRecordDD;
}
