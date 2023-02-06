import type * as types from './types';
interface ParseYetfOptions {
    callbacks?: {
        AA?: (record: types.YetfRecordAA) => void;
        BB?: (record: types.YetfRecordBB) => void;
        CC?: (record: types.YetfRecordCC) => void;
        DD?: (record: types.YetfRecordDD) => void;
        GG?: (record: types.YetfRecordGG) => void;
        HH?: (record: types.YetfRecordHH) => void;
        JJ?: (record: types.YetfRecordJJ) => void;
        KK?: (record: types.YetfRecordKK) => void;
        LL?: (record: types.YetfRecordLL) => void;
        MM?: (record: types.YetfRecordMM) => void;
        PA?: (record: types.YetfRecordPA) => void;
        PB?: (record: types.YetfRecordPB) => void;
        PC?: (record: types.YetfRecordPC) => void;
        PD?: (record: types.YetfRecordPD) => void;
        PI?: (record: types.YetfRecordPI) => void;
    };
}
export declare function parseYetf(filePath: string, options: ParseYetfOptions): Promise<boolean>;
export default parseYetf;
