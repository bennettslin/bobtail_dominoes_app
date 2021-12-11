import { getArrayOfIndices } from '../../../general'
import { getPointsForMoves } from '../../mechanics/points'

export const getInitialScores = playersCount => (
    getArrayOfIndices(playersCount).map(() => 0)
)

export const addMovesToScores = ({
    playerIndex = 0,
    handCount,
    moves,
    scores,

}) => {
    const points = getPointsForMoves({ handCount, moves })
    scores[playerIndex] += points
    return scores
}

export const getWinnerIndices = scores => {
    const highScore = Math.max(...scores)
    // Ties are possible.
    return scores.map((score, index) => (
        score === highScore ? index : -1
    )).filter(index => index > -1)
}
