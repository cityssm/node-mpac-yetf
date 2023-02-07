import type * as types from './types';
interface ParsedRollNumber {
    county: string;
    municipality: string;
    mapArea: string;
    mapDivision: string;
    mapSubdivision: string;
    parcel: string;
    parcelSub: string;
    primarySubordinate: string;
}
export declare function parseYetfRecordString(recordString: string): types.RawYetfRecord;
export declare function parseRollNumber(rollNumber: string): ParsedRollNumber;
export {};
