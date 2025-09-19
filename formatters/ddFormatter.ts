import * as ddLookups from '../lookups/ddLookups.js'

import type * as types from '../types.js'

export function formatDD(
  recordDD: types.RawYetfRecordDD
): types.FormattedYetfRecordDD {
  const formattedRecordDD = recordDD as types.FormattedYetfRecordDD

  // Texture

  formattedRecordDD.textureName =
    ddLookups.textureCodeNames[formattedRecordDD.texture]

  // Soil Class

  const soilClass =
    ddLookups.soilClassPointsRemaining[formattedRecordDD.soilClass]

  if (soilClass !== undefined) {
    formattedRecordDD.soilClassPointsRemainingMin = soilClass.min
    formattedRecordDD.soilClassPointsRemainingMax = soilClass.max
  }

  return formattedRecordDD
}
