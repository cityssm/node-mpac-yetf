import * as lookups from '@cityssm/mpac-tools/codes';
export function formatPA(recordPA) {
    const formattedYetfRecordPA = recordPA;
    formattedYetfRecordPA.phaseInValueDollars = Number.parseInt(formattedYetfRecordPA.phaseInValue, 10);
    // Unit Class
    formattedYetfRecordPA.unitClassDescription =
        lookups.unitClassDescriptions[formattedYetfRecordPA.unitClass];
    // Realty Tax Class
    formattedYetfRecordPA.realtyTaxClassName =
        lookups.realtyTaxClassNames[formattedYetfRecordPA.realtyTaxClass];
    // Realty Tax Qualifer
    const realtyTaxQualifier = lookups.realtyTaxQualifiers[formattedYetfRecordPA.realtyTaxQualifier];
    if (realtyTaxQualifier !== undefined) {
        formattedYetfRecordPA.realtyTaxQualifierClass = realtyTaxQualifier.class;
        formattedYetfRecordPA.realtyTaxQualifierName = realtyTaxQualifier.name;
    }
    // Previous Year Assessment
    formattedYetfRecordPA.previousYearAssessmentDollars = Number.parseInt(formattedYetfRecordPA.previousYearAssessment, 10);
    // Unit Support
    formattedYetfRecordPA.unitSupportName =
        lookups.unitSupportNames[formattedYetfRecordPA.unitSupport];
    // Property Type
    formattedYetfRecordPA.propertyTypeName =
        lookups.propertyTypeNames[formattedYetfRecordPA.propertyType];
    // Property Total
    formattedYetfRecordPA.propertyTotalDollars = Number.parseInt(formattedYetfRecordPA.propertyTotal, 10);
    // Realty Portion Total
    formattedYetfRecordPA.realtyPortionTotalDollars = Number.parseInt(formattedYetfRecordPA.realtyPortionTotal, 10);
    return formattedYetfRecordPA;
}
