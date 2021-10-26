import { getRandomEntry } from '../../../../general'
import { getValidMoves } from '../../moves'
import { getRandomDominoIndex } from '../pool'

export const generateBoard = pool => [
    // Randomly place first domino on board.
    getRandomEntry(
        getValidMoves({ dominoIndex: getRandomDominoIndex(pool) }),
    ),
]

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
