import events from 'node:events';
import fs from 'node:fs';
import readline from 'node:readline';
import { formatRawRecordBB, formatRawRecordCC } from './formatters.js';
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
                    record = formatRawRecordBB(record);
                    break;
                }
                case 'CC': {
                    record = formatRawRecordCC(record);
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
