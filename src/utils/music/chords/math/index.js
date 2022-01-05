import { getArrayOfIndices } from '../../../general'
import { mod } from '../../../general/math'
import { OCTAVE_RANGE } from '../../../../constants/music/audio'

export const modOctave = number => (
    mod(number, OCTAVE_RANGE)
)

export const transposePitchSet = (pitchSet = new Set(), direction = 0) => {
    const newPitchSet = new Set()
    pitchSet.forEach(pitch => {
        newPitchSet.add(modOctave(pitch + direction))
    })
    return newPitchSet
}

export const getArrayOfPitches = () => (
    getArrayOfIndices(OCTAVE_RANGE)
)

export const getArrayOfPitchesForCircleOfFifths = () => (
    getArrayOfIndices(OCTAVE_RANGE, 0, (v, i) => (
        modOctave(Math.ceil(i / 2) * (i % 2 === 0 ? 1 : -1))
    ))
)
