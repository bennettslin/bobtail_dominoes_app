const getHasNoDominoes = ({ pool, hands }) => (
    !pool.size && !hands.some(hand => Boolean(hand.size))
)

const getHasNoMoves = ({ turns, playersCount }) => {
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

const getIsLastTurnAfterEmptyPool = ({ pool, turns, playersCount }) => {
    return false
}

export const getIsGameEnd = ({ pool, hands, turns, playersCount }) => (
    getHasNoDominoes({ pool, hands }) ||
    getHasNoMoves({ turns, playersCount }) ||
    getIsLastTurnAfterEmptyPool({ pool, turns, playersCount })
)
