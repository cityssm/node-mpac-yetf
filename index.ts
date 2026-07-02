/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */

import events from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'

import {
  parseRollNumber,
  rollNumberMunicipalities
} from '@cityssm/mpac-tools/rollNumbers'

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
import { parseYetfRecordString } from './parsers.js'
import type * as types from './types.js'

export type ParseYetfOptions =
  | {
      addFormattedFields: true
      callbacks: {
        all?: (record: types.FormattedYetfRecord, lineNumber?: number) => void

        AA?: (record: types.FormattedYetfRecordAA, lineNumber?: number) => void
        BB?: (record: types.FormattedYetfRecordBB, lineNumber?: number) => void
        CC?: (record: types.FormattedYetfRecordCC, lineNumber?: number) => void
        DD?: (record: types.FormattedYetfRecordDD, lineNumber?: number) => void
        GG?: (record: types.FormattedYetfRecordGG, lineNumber?: number) => void
        HH?: (record: types.FormattedYetfRecordHH, lineNumber?: number) => void
        JJ?: (record: types.FormattedYetfRecordJJ, lineNumber?: number) => void
        KK?: (record: types.FormattedYetfRecordKK, lineNumber?: number) => void
        LL?: (record: types.FormattedYetfRecordLL, lineNumber?: number) => void
        MM?: (record: types.FormattedYetfRecordMM, lineNumber?: number) => void
        PA?: (record: types.FormattedYetfRecordPA, lineNumber?: number) => void
        PB?: (record: types.FormattedYetfRecordPB, lineNumber?: number) => void
        PC?: (record: types.FormattedYetfRecordPC, lineNumber?: number) => void
        PD?: (record: types.FormattedYetfRecordPD, lineNumber?: number) => void
        PI?: (record: types.FormattedYetfRecordPI, lineNumber?: number) => void
      }
    }
  | {
      addFormattedFields?: false
      callbacks: {
        all?: (record: types.RawYetfRecord, lineNumber?: number) => void

        AA?: (record: types.RawYetfRecordAA, lineNumber?: number) => void
        BB?: (record: types.RawYetfRecordBB, lineNumber?: number) => void
        CC?: (record: types.RawYetfRecordCC, lineNumber?: number) => void
        DD?: (record: types.RawYetfRecordDD, lineNumber?: number) => void
        GG?: (record: types.RawYetfRecordGG, lineNumber?: number) => void
        HH?: (record: types.RawYetfRecordHH, lineNumber?: number) => void
        JJ?: (record: types.RawYetfRecordJJ, lineNumber?: number) => void
        KK?: (record: types.RawYetfRecordKK, lineNumber?: number) => void
        LL?: (record: types.RawYetfRecordLL, lineNumber?: number) => void
        MM?: (record: types.RawYetfRecordMM, lineNumber?: number) => void
        PA?: (record: types.RawYetfRecordPA, lineNumber?: number) => void
        PB?: (record: types.RawYetfRecordPB, lineNumber?: number) => void
        PC?: (record: types.RawYetfRecordPC, lineNumber?: number) => void
        PD?: (record: types.RawYetfRecordPD, lineNumber?: number) => void
        PI?: (record: types.RawYetfRecordPI, lineNumber?: number) => void
      }
    }

/**
 * Parses a YETF file line-by-line, calling the appropriate callback for each record type.
 * @param filePath - Path to the YETF file
 * @param options - Parsing options
 * @returns Promise which resolves to `true` when parsing is complete
 */
export async function parseYetf(
  filePath: string,
  options: ParseYetfOptions
): Promise<boolean> {
  const rl = readline.createInterface({
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    input: fs.createReadStream(filePath)
  })

  let lineNumber = 0

  rl.on('line', (recordString) => {
    lineNumber += 1

    let record = parseYetfRecordString(recordString)

    if (options.addFormattedFields ?? false) {
      const parsedRollNumber = parseRollNumber(record.rollNumber)

      // Roll Number Pieces
      ;(record as types.FormattedYetfRecord).rollNumberCounty =
        parsedRollNumber.county ?? ''
      ;(record as types.FormattedYetfRecord).rollNumberMunicipality =
        parsedRollNumber.municipality ?? ''
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

      // Related Roll Number Data
      ;(record as types.FormattedYetfRecord).rollNumberMunicipalityName =
        rollNumberMunicipalities[
          (parsedRollNumber.county ?? '') +
            (parsedRollNumber.municipality ?? '')
        ]
      ;(record as types.FormattedYetfRecord).rollNumberIsPrimary =
        parsedRollNumber.primarySubordinate === '0000'

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
        case 'PB': {
          record = formatPB(record as types.RawYetfRecordPB)
          break
        }
        case 'PC': {
          record = formatPC(record as types.RawYetfRecordPC)
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
        default: {
          // No formatting available
          break
        }
      }
    }

    if (options.callbacks.all !== undefined) {
      ;(
        options.callbacks.all as (
          record: types.FormattedYetfRecord | types.RawYetfRecord,
          lineNumber?: number
        ) => void
      )(record, lineNumber)
    }

    if (options.callbacks[record.recordType] !== undefined) {
      ;(
        options.callbacks[record.recordType] as (
          record: types.FormattedYetfRecord | types.RawYetfRecord,
          lineNumber?: number
        ) => void
      )(record, lineNumber)
    }
  })

  await events.once(rl, 'close')

  return true
}

export default parseYetf

export type * as types from './types.js'
