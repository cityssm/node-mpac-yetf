import events from 'node:events';
import fs from 'node:fs';
import readline from 'node:readline';
import { parseYetfRecordString } from './parsers.js';
export async function parseYetf(filePath, options) {
    const callbacks = options.callbacks ?? {};
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });
    rl.on('line', (recordString) => {
        const record = parseYetfRecordString(recordString);
    });
    await events.once(rl, 'close');
    return true;
}
export default parseYetf;
