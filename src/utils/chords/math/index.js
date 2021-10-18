import { getArrayOfIndices } from '../../general'

const PITCH_COUNT = 12

export const mod12 = number => (
    (number + PITCH_COUNT) % PITCH_COUNT
)

export const transposePitchSet = (pitchSet = new Set(), direction = 0) => {
    const newPitchSet = new Set()
    pitchSet.forEach(pitch => {
        newPitchSet.add(mod12(pitch + direction))
    })
    return newPitchSet
}

export const getArrayOfPitches = () => (
    getArrayOfIndices(PITCH_COUNT)
)

export const getArrayOfPitchesForCircleOfFifths = () => (
    getArrayOfIndices(PITCH_COUNT, 0, (v, i) => (
        mod12(Math.ceil(i / 2) * (i % 2 === 0 ? 1 : -1))
    ))
)
