import events from 'node:events';
import fs from 'node:fs';
import readline from 'node:readline';
import { formatBB } from './formatters/bbFormatter.js';
import { formatCC } from './formatters/ccFormatter.js';
import { formatDD } from './formatters/ddFormatter.js';
import { formatGG } from './formatters/ggFormatter.js';
import { formatPA } from './formatters/paFormatter.js';
import { parseRollNumber, parseYetfRecordString } from './parsers.js';
export async function parseYetf(filePath, options) {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });
    rl.on('line', (recordString) => {
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
                case 'PA': {
                    record = formatPA(record);
                    break;
                }
            }
        }
        if (options.callbacks.all) {
            options.callbacks.all(record);
        }
        if (options.callbacks[record.recordType]) {
            options.callbacks[record.recordType](record);
        }
    });
    await events.once(rl, 'close');
    return true;
}
export default parseYetf;
