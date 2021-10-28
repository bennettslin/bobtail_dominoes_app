import { getRandomEntry } from '../../../../general'
import { getValidMoves } from '../../moves'
import { getRandomDominoIndex } from '../pool'

export const generateBoard = pool => ([
    // Randomly place first domino on board.
    getRandomEntry(
        getValidMoves({ dominoIndex: getRandomDominoIndex(pool) }),
    ),
])

export const addMoveToBoard = (move, board) => {
    board.push(move)
    return board
}

export const addMovesToBoard = ({ handIndex, moves, board }) => {
    moves.forEach(move => {
        move.handIndex = handIndex
        addMoveToBoard(move, board)
    })

    return board
}
