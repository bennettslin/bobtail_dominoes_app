import { getIsFinalTurn } from '../end'

export const getInitialTurns = board => ([
    // Initialize with first domino placed on board.
    { dominoIndex: board[0].dominoIndex },
])

export const addTurn = ({ pool, turns, moves, playerIndex, playersCount }) => {
    const turn = {
        playerIndex,
        ...moves && { moves },
    }

    turns.push(turn)

    // At this point, hand has already been refilled from pool.
    const isFinalTurn = getIsFinalTurn({ pool, turns, playersCount })

    return {
        turns,
        isFinalTurn,
    }
}
