import type * as types from './types.js';
interface ParseYetfOptions {
    addFormattedFields?: boolean;
    callbacks: {
        all?: (record: types.FormattedYetfRecord | types.RawYetfRecord, lineNumber?: number) => void;
        AA?: (record: types.FormattedYetfRecordAA | types.RawYetfRecordAA, lineNumber?: number) => void;
        BB?: (record: types.FormattedYetfRecordBB | types.RawYetfRecordBB, lineNumber?: number) => void;
        CC?: (record: types.FormattedYetfRecordCC | types.RawYetfRecordCC, lineNumber?: number) => void;
        DD?: (record: types.FormattedYetfRecordDD | types.RawYetfRecordDD, lineNumber?: number) => void;
        GG?: (record: types.FormattedYetfRecordGG | types.RawYetfRecordGG, lineNumber?: number) => void;
        HH?: (record: types.FormattedYetfRecordHH | types.RawYetfRecordHH, lineNumber?: number) => void;
        JJ?: (record: types.FormattedYetfRecordJJ | types.RawYetfRecordJJ, lineNumber?: number) => void;
        KK?: (record: types.FormattedYetfRecordKK | types.RawYetfRecordKK, lineNumber?: number) => void;
        LL?: (record: types.FormattedYetfRecordLL | types.RawYetfRecordLL, lineNumber?: number) => void;
        MM?: (record: types.FormattedYetfRecordMM | types.RawYetfRecordMM, lineNumber?: number) => void;
        PA?: (record: types.FormattedYetfRecordPA | types.RawYetfRecordPA, lineNumber?: number) => void;
        PB?: (record: types.FormattedYetfRecordPB | types.RawYetfRecordPB, lineNumber?: number) => void;
        PC?: (record: types.FormattedYetfRecordPC | types.RawYetfRecordPC, lineNumber?: number) => void;
        PD?: (record: types.FormattedYetfRecordPD | types.RawYetfRecordPD, lineNumber?: number) => void;
        PI?: (record: types.FormattedYetfRecordPI | types.RawYetfRecordPI, lineNumber?: number) => void;
    };
}
export declare function parseYetf(filePath: string, options: ParseYetfOptions): Promise<boolean>;
export default parseYetf;
