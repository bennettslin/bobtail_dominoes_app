import { OCTAVE_RANGE } from '../../../../constants/audio'
import { getArrayOfIndices } from '../../../general'

export const mod12 = number => (
    (number + OCTAVE_RANGE) % OCTAVE_RANGE
)

export const transposePitchSet = (pitchSet = new Set(), direction = 0) => {
    const newPitchSet = new Set()
    pitchSet.forEach(pitch => {
        newPitchSet.add(mod12(pitch + direction))
    })
    return newPitchSet
}

export const getArrayOfPitches = () => (
    getArrayOfIndices(OCTAVE_RANGE)
)

export const getArrayOfPitchesForCircleOfFifths = () => (
    getArrayOfIndices(OCTAVE_RANGE, 0, (v, i) => (
        mod12(Math.ceil(i / 2) * (i % 2 === 0 ? 1 : -1))
    ))
)
