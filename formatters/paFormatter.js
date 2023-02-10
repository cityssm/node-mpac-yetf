import * as paLookups from '../lookups/paLookups.js';
export function formatPA(recordPA) {
    const formattedYetfRecordPA = recordPA;
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
