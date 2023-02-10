import type * as types from './types';
type CallbackType = types.RecordType | 'all';
interface ParseYetfOptions {
    addFormattedFields?: boolean;
    callbacks: {
        [recordType in CallbackType]?: (record: types.RawYetfRecord | types.FormattedYetfRecord) => void;
    };
}
export declare function parseYetf(filePath: string, options: ParseYetfOptions): Promise<boolean>;
export default parseYetf;
