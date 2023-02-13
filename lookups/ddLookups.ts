/* eslint-disable quote-props */
/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/indent */

export const textureCodeNames = Object.freeze({
  '0': 'Non-farm land',
  '1': 'Sand',
  '2': 'Sandy loam',
  '3': 'Silt loam, loam',
  '4': 'Clay loam',
  '5': 'Clay',
  '6': 'Swamp',
  '7': 'Organic',
  '8': 'Water',
  '9': 'Rock'
})

export const soilClassPointsRemaining: Readonly<
  Record<'1' | '2' | '3' | '4' | '5' | '6' | '8', { min: number; max: number }>
> = Object.freeze({
  '1': {
    min: 85,
    max: 95
  },
  '2': {
    min: 70,
    max: 80
  },
  '3': {
    min: 55,
    max: 65
  },
  '4': {
    min: 40,
    max: 50
  },
  '5': {
    min: 25,
    max: 35
  },
  '6': {
    min: 5,
    max: 20
  },
  '8': {
    min: 0,
    max: 0
  }
})
