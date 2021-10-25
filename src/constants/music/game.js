import { getArrayOfIndices } from '../../utils/general'
import { OCTAVE_RANGE } from './audio'

export const DOMINOES_PITCHES = [
    // Reserve index 0 for no domino.
    null,
    ...getArrayOfIndices(OCTAVE_RANGE).map(firstPitch => (
        getArrayOfIndices(
            OCTAVE_RANGE - firstPitch - 1,
            firstPitch + 1,
        ).map(secondPitch => [firstPitch, secondPitch])
    )).flat(),
]
export const DOMINOES_COUNT = DOMINOES_PITCHES.length

export const DIRECTION_X = [1, 0]
export const DIRECTION_Y = [0, 1]
export const DIRECTION_XY = [-1, 1]
export const ADJACENT_DIRECTIONS = [DIRECTION_X, DIRECTION_Y, DIRECTION_XY]
export const ADJACENT_SIGNS = [-1, 1]
