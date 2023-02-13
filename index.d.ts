import type * as types from './types';
interface ParseYetfOptions {
    addFormattedFields?: boolean;
    callbacks: {
        all?: (record: types.RawYetfRecord | types.FormattedYetfRecord, lineNumber?: number) => void;
        AA?: (record: types.RawYetfRecordAA | types.FormattedYetfRecordAA, lineNumber?: number) => void;
        BB?: (record: types.RawYetfRecordBB | types.FormattedYetfRecordBB, lineNumber?: number) => void;
        CC?: (record: types.RawYetfRecordCC | types.FormattedYetfRecordCC, lineNumber?: number) => void;
        DD?: (record: types.RawYetfRecordDD | types.FormattedYetfRecordDD, lineNumber?: number) => void;
        GG?: (record: types.RawYetfRecordGG | types.FormattedYetfRecordGG, lineNumber?: number) => void;
        HH?: (record: types.RawYetfRecordHH | types.FormattedYetfRecordHH, lineNumber?: number) => void;
        JJ?: (record: types.RawYetfRecordJJ | types.FormattedYetfRecordJJ, lineNumber?: number) => void;
        KK?: (record: types.RawYetfRecordKK | types.FormattedYetfRecordKK, lineNumber?: number) => void;
        LL?: (record: types.RawYetfRecordLL | types.FormattedYetfRecordLL, lineNumber?: number) => void;
        MM?: (record: types.RawYetfRecordMM | types.FormattedYetfRecordMM, lineNumber?: number) => void;
        PA?: (record: types.RawYetfRecordPA | types.FormattedYetfRecordPA, lineNumber?: number) => void;
        PB?: (record: types.RawYetfRecordPB | types.FormattedYetfRecordPB, lineNumber?: number) => void;
        PC?: (record: types.RawYetfRecordPC | types.FormattedYetfRecordPC, lineNumber?: number) => void;
        PD?: (record: types.RawYetfRecordPD | types.FormattedYetfRecordPD, lineNumber?: number) => void;
        PI?: (record: types.RawYetfRecordPI | types.FormattedYetfRecordPI, lineNumber?: number) => void;
    };
}
export declare function parseYetf(filePath: string, options: ParseYetfOptions): Promise<boolean>;
export default parseYetf;
