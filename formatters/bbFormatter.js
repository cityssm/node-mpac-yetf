import * as lookups from '@cityssm/mpac-tools/codes';
import * as constants from './constants.js';
export function formatBB(recordBB) {
    const formattedRecordBB = recordBB;
    // Frontage
    if (formattedRecordBB.frontage !== '') {
        formattedRecordBB.frontageFeet = Number.parseFloat(formattedRecordBB.frontage);
        formattedRecordBB.frontageMetres =
            formattedRecordBB.frontageFeet * constants.FEET_TO_METRES;
    }
    // Site Area
    if (formattedRecordBB.unitOfMeasurement === 'F') {
        formattedRecordBB.siteAreaSquareFeet = Number.parseFloat(formattedRecordBB.siteArea);
        formattedRecordBB.siteAreaAcres =
            formattedRecordBB.siteAreaSquareFeet / constants.ACRES_TO_SQUARE_FEET;
    }
    else if (formattedRecordBB.unitOfMeasurement === 'A') {
        formattedRecordBB.siteAreaAcres = Number.parseFloat(formattedRecordBB.siteArea);
        formattedRecordBB.siteAreaSquareFeet =
            formattedRecordBB.siteAreaAcres * constants.ACRES_TO_SQUARE_FEET;
    }
    // Depth or Farm Forestry Exemption
    if (formattedRecordBB.propertyCode >= '200' &&
        formattedRecordBB.propertyCode <= '299') {
        if (formattedRecordBB.depth !== '') {
            formattedRecordBB.farmForestryExemptionAcres = Number.parseFloat(formattedRecordBB.depth);
        }
    }
    else if (formattedRecordBB.depth !== '') {
        formattedRecordBB.depthFeet = Number.parseFloat(formattedRecordBB.depth);
        formattedRecordBB.depthMetres =
            formattedRecordBB.depthFeet * constants.FEET_TO_METRES;
    }
    // Site Improvements
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
    // Property Codes
    const propertyCodeNumber = Number.parseInt(formattedRecordBB.propertyCode, 10);
    formattedRecordBB.propertyCodeClass =
        lookups.propertyCodeClassNames[propertyCodeNumber - (propertyCodeNumber % 100)];
    formattedRecordBB.propertyCodeName =
        lookups.propertyCodeNames[formattedRecordBB.propertyCode];
    // Service Codes
    formattedRecordBB.servicesName =
        lookups.serviceCodeNames[formattedRecordBB.services];
    // Access Codes
    formattedRecordBB.accessName =
        lookups.accessCodeNames[formattedRecordBB.access];
    return formattedRecordBB;
}
