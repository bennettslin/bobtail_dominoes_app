import { getIsValidChord } from '../../chords/valid'
import { BINGO_POINTS } from '../../../../constants/music/play'
import { getLatestTurnIndex } from '../../render/turn'

export const getPoints = pitchSet => (
    getIsValidChord(pitchSet) ? pitchSet.size : 0
)

export const getPointsForPitchSets = (pitchSets = []) => (
    pitchSets.reduce((sum, pitchSet) => (
        sum + getPoints(pitchSet)
    ), 0)
)

export const getPointsForMoves = ({
    handCount,
    moves = [],
} = {}) => (
    moves.reduce((sum, { pitchSets }) => (
        sum + getPointsForPitchSets(pitchSets)
    ), 0)
// Include bingo points.
) + (moves.length === handCount ? BINGO_POINTS : 0)

export const getIsWinner = ({
    turns,
    playerIndex,
}) => {
    const { winnerIndices } = turns[getLatestTurnIndex(turns)] || {}

    return (
        Boolean(winnerIndices) &&
        winnerIndices.some(winnerIndex => playerIndex === winnerIndex)
    )
}

export const sortByHighestPoints = (
    { points: firstPoints },
    { points: secondPoints },
) => secondPoints - firstPoints
