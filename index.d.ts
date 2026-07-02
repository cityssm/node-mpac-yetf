import type * as types from './types.js';
export type ParseYetfOptions = {
    addFormattedFields: true;
    callbacks: {
        all?: (record: types.FormattedYetfRecord, lineNumber?: number) => void;
        AA?: (record: types.FormattedYetfRecordAA, lineNumber?: number) => void;
        BB?: (record: types.FormattedYetfRecordBB, lineNumber?: number) => void;
        CC?: (record: types.FormattedYetfRecordCC, lineNumber?: number) => void;
        DD?: (record: types.FormattedYetfRecordDD, lineNumber?: number) => void;
        GG?: (record: types.FormattedYetfRecordGG, lineNumber?: number) => void;
        HH?: (record: types.FormattedYetfRecordHH, lineNumber?: number) => void;
        JJ?: (record: types.FormattedYetfRecordJJ, lineNumber?: number) => void;
        KK?: (record: types.FormattedYetfRecordKK, lineNumber?: number) => void;
        LL?: (record: types.FormattedYetfRecordLL, lineNumber?: number) => void;
        MM?: (record: types.FormattedYetfRecordMM, lineNumber?: number) => void;
        PA?: (record: types.FormattedYetfRecordPA, lineNumber?: number) => void;
        PB?: (record: types.FormattedYetfRecordPB, lineNumber?: number) => void;
        PC?: (record: types.FormattedYetfRecordPC, lineNumber?: number) => void;
        PD?: (record: types.FormattedYetfRecordPD, lineNumber?: number) => void;
        PI?: (record: types.FormattedYetfRecordPI, lineNumber?: number) => void;
    };
} | {
    addFormattedFields?: false;
    callbacks: {
        all?: (record: types.RawYetfRecord, lineNumber?: number) => void;
        AA?: (record: types.RawYetfRecordAA, lineNumber?: number) => void;
        BB?: (record: types.RawYetfRecordBB, lineNumber?: number) => void;
        CC?: (record: types.RawYetfRecordCC, lineNumber?: number) => void;
        DD?: (record: types.RawYetfRecordDD, lineNumber?: number) => void;
        GG?: (record: types.RawYetfRecordGG, lineNumber?: number) => void;
        HH?: (record: types.RawYetfRecordHH, lineNumber?: number) => void;
        JJ?: (record: types.RawYetfRecordJJ, lineNumber?: number) => void;
        KK?: (record: types.RawYetfRecordKK, lineNumber?: number) => void;
        LL?: (record: types.RawYetfRecordLL, lineNumber?: number) => void;
        MM?: (record: types.RawYetfRecordMM, lineNumber?: number) => void;
        PA?: (record: types.RawYetfRecordPA, lineNumber?: number) => void;
        PB?: (record: types.RawYetfRecordPB, lineNumber?: number) => void;
        PC?: (record: types.RawYetfRecordPC, lineNumber?: number) => void;
        PD?: (record: types.RawYetfRecordPD, lineNumber?: number) => void;
        PI?: (record: types.RawYetfRecordPI, lineNumber?: number) => void;
    };
};
/**
 * Parses a YETF file line-by-line, calling the appropriate callback for each record type.
 * @param filePath - Path to the YETF file
 * @param options - Parsing options
 * @returns Promise which resolves to `true` when parsing is complete
 */
export declare function parseYetf(filePath: string, options: ParseYetfOptions): Promise<boolean>;
export default parseYetf;
export type * as types from './types.js';
