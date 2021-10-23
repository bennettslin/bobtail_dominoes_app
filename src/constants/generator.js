import { getArrayOfIndices } from '../utils/general'
import { OCTAVE_RANGE } from './audio'

export const DOMINO_INDICES = [
    // Reserve index 0 for no domino.
    null,
    ...getArrayOfIndices(OCTAVE_RANGE).map(firstPitch => (
        getArrayOfIndices(
            OCTAVE_RANGE - firstPitch - 1,
            firstPitch + 1,
        ).map(secondPitch => [firstPitch, secondPitch])
    )).flat(),
]
