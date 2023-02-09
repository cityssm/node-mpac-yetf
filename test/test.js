import * as assert from 'node:assert';
import { parseYetf } from '../index.js';
describe('parseYetf', () => {
    it('Parses the test file with no extra formatting', async () => {
        let recordCount = 0;
        const success = await parseYetf('./test/yetf.txt', {
            callbacks: {
                all: (record) => {
                    recordCount += 1;
                    assert.ok(record.rollNumber !== undefined && record.rollNumber !== '');
                    assert.ok(record.rollNumberCounty === undefined);
                }
            }
        });
        assert.ok(success);
        assert.ok(recordCount > 0);
    });
    it('Parses the test file with formatting', async () => {
        let recordCount = 0;
        const success = await parseYetf('./test/yetf.txt', {
            addFormattedFields: true,
            callbacks: {
                all: (record) => {
                    recordCount += 1;
                    assert.ok(record.rollNumber !== undefined && record.rollNumber !== '');
                    assert.ok(record.rollNumberCounty !== undefined && record.rollNumberCounty !== '');
                },
                PI: (record) => {
                    console.log(record);
                }
            }
        });
        assert.ok(success);
        assert.ok(recordCount > 0);
    });
});