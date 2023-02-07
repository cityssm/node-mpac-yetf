import * as assert from 'node:assert'
import { parseYetf } from '../index.js'
import type { FormattedYetfRecord } from '../types.js'

describe('parseYetf', () => {
  it('Parses the test file with no extra formatting', async () => {
    let recordCount = 0
    const success = await parseYetf('./test/yetf.txt', {
      callbacks: {
        all: (record) => {
          recordCount += 1
          assert.ok(record.rollNumber !== undefined && record.rollNumber !== '')
          assert.ok((record as FormattedYetfRecord).rollNumberCounty === undefined)
        }
      }
    })

    assert.ok(success)
    assert.ok(recordCount > 0)
  })

  it('Parses the test file with formatting', async () => {
    let recordCount = 0
    const success = await parseYetf('./test/yetf.txt', {
      addFormattedFields: true,
      callbacks: {
        all: (record) => {
          recordCount += 1
          assert.ok(record.rollNumber !== undefined && record.rollNumber !== '')
          assert.ok((record as FormattedYetfRecord).rollNumberCounty !== undefined && (record as FormattedYetfRecord).rollNumberCounty !== '')
        }
      }
    })

    assert.ok(success)
    assert.ok(recordCount > 0)
  })
})
