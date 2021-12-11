import { getRandomEntry } from '../../../general/random'
import { getValidPointedMoves } from '../../ai'
import { getRandomDominoIndex } from '../pool'

export const getInitialBoard = pool => ([
    // Randomly place first domino on board.
    getRandomEntry(
        getValidPointedMoves({ dominoIndex: getRandomDominoIndex(pool) }),
    ),
])

export const addMoveToBoard = (move, board) => {
    board.push(move)
    return board
}

export const addMovesToBoard = ({ playerIndex, moves, board }) => {
    moves.forEach(move => {
        move.playerIndex = playerIndex
        addMoveToBoard(move, board)
    })

    return board
}
