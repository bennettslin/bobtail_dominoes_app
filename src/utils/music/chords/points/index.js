import { getIsValidChord } from '../valid'
import { BINGO_POINTS, HAND_COUNT } from '../../../../constants/music/play'

export const getPoints = pitchSet => (
    getIsValidChord(pitchSet) ? pitchSet.size : 0
)

export const getPointsForPitchSets = (pitchSets = []) => (
    pitchSets.reduce((sum, pitchSet) => (
        sum + getPoints(pitchSet)
    ), 0)
)

export const getPointsForMoves = ({
    handCount = HAND_COUNT,
    moves = [],
} = {}) => (
    moves.reduce((sum, { pitchSets }) => (
        sum + getPointsForPitchSets(pitchSets)
    ), 0)
// Include bingo points.
) + (moves.length === handCount ? BINGO_POINTS : 0)
