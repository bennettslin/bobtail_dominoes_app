import { getIsGameOver } from '../end'
import { getWinnerIndices } from '../scores'

export const getInitialTurns = board => ([
    // Initialize with first domino placed on board.
    { dominoIndex: board[0].dominoIndex },
])

export const addTurn = ({
    pool,
    hands,
    turns,
    moves,
    playersCount,
    discardedIndices = [],
    scores,
}) => {
    turns.push({
        ...moves ? { moves } : { discardedIndices },
        ...!pool.size && { isEmptyPool: true },
    })

    // At this point, hand has already been refilled from pool.
    const isGameOver = getIsGameOver({
        pool,
        hands,
        turns,
        playersCount,
    })

    if (isGameOver) {
        turns.push({ winnerIndices: getWinnerIndices(scores) })
    }

    return {
        turns,
        isGameOver,
    }
}

export const getPlayerIndex = ({ turnIndex, playersCount }) => (
    turnIndex ? (turnIndex - 1) % playersCount : -1
)
