import events from 'node:events';
import fs from 'node:fs';
import readline from 'node:readline';
import { formatBB } from './formatters/bbFormatter.js';
import { formatCC } from './formatters/ccFormatter.js';
import { formatDD } from './formatters/ddFormatter.js';
import { formatGG } from './formatters/ggFormatter.js';
import { formatKK } from './formatters/kkFormatter.js';
import { formatPA } from './formatters/paFormatter.js';
import { formatPB } from './formatters/pbFormatter.js';
import { formatPC } from './formatters/pcFormatter.js';
import { formatPD } from './formatters/pdFormatter.js';
import { formatPI } from './formatters/piFormatter.js';
import { parseRollNumber, parseYetfRecordString } from './parsers.js';
export async function parseYetf(filePath, options) {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });
    let lineNumber = 0;
    rl.on('line', (recordString) => {
        lineNumber += 1;
        let record = parseYetfRecordString(recordString);
        if (options.addFormattedFields ?? false) {
            const parsedRollNumber = parseRollNumber(record.rollNumber);
            record.rollNumberCounty =
                parsedRollNumber.county;
            record.rollNumberMunicipality =
                parsedRollNumber.municipality;
            record.rollNumberMapArea =
                parsedRollNumber.mapArea;
            record.rollNumberMapDivision =
                parsedRollNumber.mapDivision;
            record.rollNumberMapSubdivision =
                parsedRollNumber.mapSubdivision;
            record.rollNumberParcel =
                parsedRollNumber.parcel;
            record.rollNumberParcelSub =
                parsedRollNumber.parcelSub;
            record.rollNumberPrimarySubordinate =
                parsedRollNumber.primarySubordinate;
            switch (record.recordType) {
                case 'BB': {
                    record = formatBB(record);
                    break;
                }
                case 'CC': {
                    record = formatCC(record);
                    break;
                }
                case 'DD': {
                    record = formatDD(record);
                    break;
                }
                case 'GG': {
                    record = formatGG(record);
                    break;
                }
                case 'KK': {
                    record = formatKK(record);
                    break;
                }
                case 'PA': {
                    record = formatPA(record);
                    break;
                }
                case 'PC': {
                    record = formatPC(record);
                    break;
                }
                case 'PB': {
                    record = formatPB(record);
                    break;
                }
                case 'PD': {
                    record = formatPD(record);
                    break;
                }
                case 'PI': {
                    record = formatPI(record);
                    break;
                }
            }
        }
        if (options.callbacks.all) {
            options.callbacks.all(record, lineNumber);
        }
        if (options.callbacks[record.recordType]) {
            options.callbacks[record.recordType](record, lineNumber);
        }
    });
    await events.once(rl, 'close');
    return true;
}
export default parseYetf;
