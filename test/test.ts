import * as assert from 'node:assert'
import { parseYetf } from '../index.js'

describe('parseYetf', () => {
  it('Parses the test file', async() => {
    const success = await parseYetf('./test/yetf.txt', {})

    assert.ok(success)
  })
})
