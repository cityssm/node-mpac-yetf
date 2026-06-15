import * as lookups from '@cityssm/mpac-tools/codes'

import type * as types from '../types.js'

export function formatDD(
  recordDD: types.RawYetfRecordDD
): types.FormattedYetfRecordDD {
  const formattedRecordDD = recordDD as types.FormattedYetfRecordDD

  // Texture

  formattedRecordDD.textureName =
    lookups.textureCodeNames[formattedRecordDD.texture]

  // Soil Class

  const soilClass =
    lookups.soilClassPointsRemaining[formattedRecordDD.soilClass]

  if (soilClass !== undefined) {
    formattedRecordDD.soilClassPointsRemainingMin = soilClass.min
    formattedRecordDD.soilClassPointsRemainingMax = soilClass.max
  }

  return formattedRecordDD
}
