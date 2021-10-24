import { getIsValidChord } from '../valid'

export const getPoints = pitchSet => (
    getIsValidChord(pitchSet) ? pitchSet.size : 0
)
