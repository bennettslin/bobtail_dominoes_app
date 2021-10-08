import { getIsChord } from '../valid'

export const getPoints = pitchSet => (
    getIsChord(pitchSet) ? pitchSet.size : 0
)
