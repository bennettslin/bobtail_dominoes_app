import { getArrayOfIndices } from '../../../../general'
import { getPointsForMoves } from '../../../chords/points'

export const getInitialScores = playersCount => (
    getArrayOfIndices(playersCount).map(() => 0)
)

export const addToScores = ({
    playerIndex = 0,
    handCount,
    moves,
    scores,

}) => {
    const points = getPointsForMoves({ handCount, moves })
    scores[playerIndex] += points
    return scores
}
