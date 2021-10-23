import { getArrayOfIndices } from '../../utils/general'
import { OCTAVE_RANGE } from '../audio'

const DOMINO_INDICES = (() => {
    const dominoIndices = getArrayOfIndices(OCTAVE_RANGE).map(pitch => (
        getArrayOfIndices(OCTAVE_RANGE - pitch - 1, pitch + 1).map(
            secondPitch => [pitch, secondPitch],
        )
    )).flat()

    // Reserve 0 for no domino.
    dominoIndices.unshift(null)
    return dominoIndices
})()

export const getDominoPitches = dominoIndex => (
    DOMINO_INDICES[dominoIndex]
)
