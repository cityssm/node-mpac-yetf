import events from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'

import { parseYetfRecordString } from './parsers.js'

import type * as types from './types'



interface ParseYetfOptions {
  callbacks?: {
    AA?: (record: types.YetfRecordAA) => void
    BB?: (record: types.YetfRecordBB) => void
    CC?: (record: types.YetfRecordCC) => void
    DD?: (record: types.YetfRecordDD) => void
    GG?: (record: types.YetfRecordGG) => void
    HH?: (record: types.YetfRecordHH) => void
    JJ?: (record: types.YetfRecordJJ) => void
    KK?: (record: types.YetfRecordKK) => void
    LL?: (record: types.YetfRecordLL) => void
    MM?: (record: types.YetfRecordMM) => void
    PA?: (record: types.YetfRecordPA) => void
    PB?: (record: types.YetfRecordPB) => void
    PC?: (record: types.YetfRecordPC) => void
    PD?: (record: types.YetfRecordPD) => void
    PI?: (record: types.YetfRecordPI) => void
  }
}

export async function parseYetf(
  filePath: string,
  options: ParseYetfOptions
): Promise<boolean> {

  const callbacks = options.callbacks ?? {}

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath)
  })

  rl.on('line', (recordString) => {
    const record = parseYetfRecordString(recordString)

    
  })

  await events.once(rl, 'close')

  return true
}

export default parseYetf
