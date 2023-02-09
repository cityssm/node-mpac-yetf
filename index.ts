import events from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'

import { formatBB } from './formatters/bbFormatter.js'
import { formatCC } from './formatters/ccFormatter.js'
import { formatDD } from './formatters/ddFormatter.js'
import { formatGG } from './formatters/ggFormatter.js'
import { formatPA } from './formatters/paFormatter.js'

import { parseRollNumber, parseYetfRecordString } from './parsers.js'

import type * as types from './types'

type CallbackType = types.RecordType | 'all'

interface ParseYetfOptions {
  addFormattedFields?: boolean
  callbacks: {
    [recordType in CallbackType]?: (record: types.RawYetfRecord) => void
  }
}

export async function parseYetf(
  filePath: string,
  options: ParseYetfOptions
): Promise<boolean> {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath)
  })

  rl.on('line', (recordString) => {
    let record = parseYetfRecordString(recordString)

    if (options.addFormattedFields ?? false) {
      const parsedRollNumber = parseRollNumber(record.rollNumber)

      ;(record as types.FormattedYetfRecord).rollNumberCounty =
        parsedRollNumber.county
      ;(record as types.FormattedYetfRecord).rollNumberMunicipality =
        parsedRollNumber.municipality
      ;(record as types.FormattedYetfRecord).rollNumberMapArea =
        parsedRollNumber.mapArea
      ;(record as types.FormattedYetfRecord).rollNumberMapDivision =
        parsedRollNumber.mapDivision
      ;(record as types.FormattedYetfRecord).rollNumberMapSubdivision =
        parsedRollNumber.mapSubdivision
      ;(record as types.FormattedYetfRecord).rollNumberParcel =
        parsedRollNumber.parcel
      ;(record as types.FormattedYetfRecord).rollNumberParcelSub =
        parsedRollNumber.parcelSub
      ;(record as types.FormattedYetfRecord).rollNumberPrimarySubordinate =
        parsedRollNumber.primarySubordinate

      switch (record.recordType) {
        case 'BB': {
          record = formatBB(record as types.RawYetfRecordBB)
          break
        }
        case 'CC': {
          record = formatCC(record as types.RawYetfRecordCC)
          break
        }
        case 'DD': {
          record = formatDD(record as types.RawYetfRecordDD)
          break
        }
        case 'GG': {
          record = formatGG(record as types.RawYetfRecordGG)
          break
        }
        case 'PA': {
          record = formatPA(record as types.RawYetfRecordPA)
          break
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (options.callbacks.all) {
      options.callbacks.all(record)
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (options.callbacks[record.recordType]) {
      options.callbacks[record.recordType]!(record)
    }
  })

  await events.once(rl, 'close')

  return true
}

export default parseYetf
