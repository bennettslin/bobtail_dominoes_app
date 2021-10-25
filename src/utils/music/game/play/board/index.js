import { getRandomEntry } from '../../../../general'
import { getValidMoves } from '../../moves'
import { getRandomDomino } from '../pool'

export const generateBoard = pool => {
    const { dominoIndex } = getRandomDomino(pool)

    return {
        board: [
            getRandomEntry(getValidMoves({ dominoIndex })),
        ],
        pool,
    }
}

export const addMoveToBoard = (move, board) => {
    if (
        // Safety check to ensure move is not already on board.
        board.some(boardMove => (
            boardMove.dominoIndex === move.dominoIndex
        ))
    ) {
        return null
    }

    board.push(move)
    return board
}
