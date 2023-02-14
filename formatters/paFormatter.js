import * as paLookups from '../lookups/paLookups.js';
export function formatPA(recordPA) {
    const formattedYetfRecordPA = recordPA;
    formattedYetfRecordPA.phasedInValueDollars = Number.parseInt(formattedYetfRecordPA.phasedInValue, 10);
    formattedYetfRecordPA.previousYearAssessmentDollars = Number.parseInt(formattedYetfRecordPA.previousYearAssessment, 10);
    formattedYetfRecordPA.unitClassDescription =
        paLookups.unitClassDescriptions[formattedYetfRecordPA.unitClass];
    formattedYetfRecordPA.realtyTaxClassName =
        paLookups.realtyTaxClassNames[formattedYetfRecordPA.realtyTaxClass];
    const realtyTaxQualifier = paLookups.realtyTaxQualifiers[formattedYetfRecordPA.realtyTaxQualifier];
    if (realtyTaxQualifier !== undefined) {
        formattedYetfRecordPA.realtyTaxQualifierClass = realtyTaxQualifier.class;
        formattedYetfRecordPA.realtyTaxQualifierName = realtyTaxQualifier.name;
    }
    formattedYetfRecordPA.unitSupportName =
        paLookups.unitSupportNames[formattedYetfRecordPA.unitSupport];
    formattedYetfRecordPA.propertyTypeName =
        paLookups.propertyTypeNames[formattedYetfRecordPA.propertyType];
    return formattedYetfRecordPA;
}
