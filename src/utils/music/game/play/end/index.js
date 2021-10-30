const getHasNoDominoes = ({ pool, hands }) => (
    !pool.size && !hands.some(hand => Boolean(hand.size))
)

const getHasMetGameEndCondition = ({
    turns,
    maxLatestTurnsCount,
    falseConditionFunction,
}) => {
    const latestTurns = turns.slice(1).slice(-maxLatestTurnsCount)

    // Game hasn't ended if there aren't enough latest turns to count.
    if (latestTurns.length < maxLatestTurnsCount) {
        return false
    }

    // Game hasn't ended if any latest turn meets the false condition.
    return !latestTurns.some(falseConditionFunction)
}

const getHasNoMoves = ({ turns, playersCount }) => (
    getHasMetGameEndCondition({
        turns,
        maxLatestTurnsCount: playersCount * 2,
        falseConditionFunction: ({ moves }) => Boolean(moves),
    })
)

const getIsLastTurnAfterEmptyPool = ({ turns, playersCount }) => (
    getHasMetGameEndCondition({
        turns,
        maxLatestTurnsCount: playersCount,
        falseConditionFunction: ({ isEmptyPool }) => !isEmptyPool,
    })
)

export const getIsGameEnd = ({ pool, hands, turns, playersCount }) => (
    getHasNoDominoes({ pool, hands }) ||
    getHasNoMoves({ turns, playersCount }) ||
    getIsLastTurnAfterEmptyPool({ turns, playersCount })
)