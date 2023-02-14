import events from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'

import * as rollNumberLookups from './lookups/rollNumberLookups.js'

import { formatBB } from './formatters/bbFormatter.js'
import { formatCC } from './formatters/ccFormatter.js'
import { formatDD } from './formatters/ddFormatter.js'
import { formatGG } from './formatters/ggFormatter.js'
import { formatKK } from './formatters/kkFormatter.js'
import { formatPA } from './formatters/paFormatter.js'
import { formatPB } from './formatters/pbFormatter.js'
import { formatPC } from './formatters/pcFormatter.js'
import { formatPD } from './formatters/pdFormatter.js'
import { formatPI } from './formatters/piFormatter.js'

import { parseRollNumber, parseYetfRecordString } from './parsers.js'

import type * as types from './types'

interface ParseYetfOptions {
  addFormattedFields?: boolean
  callbacks: {
    all?: (
      record: types.RawYetfRecord | types.FormattedYetfRecord,
      lineNumber?: number
    ) => void
    AA?: (
      record: types.RawYetfRecordAA | types.FormattedYetfRecordAA,
      lineNumber?: number
    ) => void
    BB?: (
      record: types.RawYetfRecordBB | types.FormattedYetfRecordBB,
      lineNumber?: number
    ) => void
    CC?: (
      record: types.RawYetfRecordCC | types.FormattedYetfRecordCC,
      lineNumber?: number
    ) => void
    DD?: (
      record: types.RawYetfRecordDD | types.FormattedYetfRecordDD,
      lineNumber?: number
    ) => void
    GG?: (
      record: types.RawYetfRecordGG | types.FormattedYetfRecordGG,
      lineNumber?: number
    ) => void
    HH?: (
      record: types.RawYetfRecordHH | types.FormattedYetfRecordHH,
      lineNumber?: number
    ) => void
    JJ?: (
      record: types.RawYetfRecordJJ | types.FormattedYetfRecordJJ,
      lineNumber?: number
    ) => void
    KK?: (
      record: types.RawYetfRecordKK | types.FormattedYetfRecordKK,
      lineNumber?: number
    ) => void
    LL?: (
      record: types.RawYetfRecordLL | types.FormattedYetfRecordLL,
      lineNumber?: number
    ) => void
    MM?: (
      record: types.RawYetfRecordMM | types.FormattedYetfRecordMM,
      lineNumber?: number
    ) => void
    PA?: (
      record: types.RawYetfRecordPA | types.FormattedYetfRecordPA,
      lineNumber?: number
    ) => void
    PB?: (
      record: types.RawYetfRecordPB | types.FormattedYetfRecordPB,
      lineNumber?: number
    ) => void
    PC?: (
      record: types.RawYetfRecordPC | types.FormattedYetfRecordPC,
      lineNumber?: number
    ) => void
    PD?: (
      record: types.RawYetfRecordPD | types.FormattedYetfRecordPD,
      lineNumber?: number
    ) => void
    PI?: (
      record: types.RawYetfRecordPI | types.FormattedYetfRecordPI,
      lineNumber?: number
    ) => void
  }
}

export async function parseYetf(
  filePath: string,
  options: ParseYetfOptions
): Promise<boolean> {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath)
  })

  let lineNumber = 0

  rl.on('line', (recordString) => {
    lineNumber += 1

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
      ;(record as types.FormattedYetfRecord).rollNumberMunicipalityName =
        rollNumberLookups.rollNumberMunicipalities[
          parsedRollNumber.county + parsedRollNumber.municipality
        ]

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
        case 'KK': {
          record = formatKK(record as types.RawYetfRecordKK)
          break
        }
        case 'PA': {
          record = formatPA(record as types.RawYetfRecordPA)
          break
        }
        case 'PC': {
          record = formatPC(record as types.RawYetfRecordPC)
          break
        }
        case 'PB': {
          record = formatPB(record as types.RawYetfRecordPB)
          break
        }
        case 'PD': {
          record = formatPD(record as types.RawYetfRecordPD)
          break
        }
        case 'PI': {
          record = formatPI(record as types.RawYetfRecordPI)
          break
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (options.callbacks.all) {
      options.callbacks.all(record, lineNumber)
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (options.callbacks[record.recordType]) {
      options.callbacks[record.recordType]!(record, lineNumber)
    }
  })

  await events.once(rl, 'close')

  return true
}

export default parseYetf
