const getIsLastTurnByEmptyPool = ({ pool, turns, playersCount }) => {
    return false
}

const getIsLastTurnByNoMoves = ({ turns, playersCount }) => {
    // End game after each player has exchanged twice in a row.
    const maxTurnsWithoutMoves = playersCount * 2
    const latestTurns = turns.slice(1).slice(-maxTurnsWithoutMoves)

    // Game hasn't ended if there aren't enough latest turns to count.
    if (latestTurns.length < maxTurnsWithoutMoves) {
        return false
    }

    // Game hasn't ended if at least one of the latest turns has moves.
    return !latestTurns.some(({ moves }) => Boolean(moves))
}

export const getIsFinalTurn = ({ pool, turns, playersCount }) => (
    getIsLastTurnByEmptyPool({ pool, turns, playersCount }) ||
    getIsLastTurnByNoMoves({ turns, playersCount })
)
