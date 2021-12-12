import { getBestPointedMovesForTurn } from '../../ai'
import { addMovesToBoard, getInitialBoard } from '../../play/board'
import { playHand } from '../../play/hands'
import {
    getInitialStandardPool,
    getRandomDominoIndex,
} from '../../play/pool'

export const getInitialBoardForPuzzle = ({
    // Number of dominoes on board.
    dominoesCount = 1,
    // Each domino has the nth best move.
    moveRank = 0,
}) => {
    const
        pool = getInitialStandardPool(),
        board = getInitialBoard(pool)

    // Decrement count for initial domino.
    dominoesCount--

    // Add one domino at a time to board.
    while (dominoesCount && pool.size) {
        const
            hand = new Set([getRandomDominoIndex(pool)]),
            moves = getBestPointedMovesForTurn({ hand, board, moveRank })

        if (moves.length) {
            playHand({ hand, handCount: 1, moves, pool })
            addMovesToBoard({ board, moves })
            dominoesCount--
        }
    }

    // Only return values if requested count succeeded.
    return !dominoesCount ? {
        // Remove unneeded values.
        board: board.map(({ dominoIndex, placement }) => ({
            dominoIndex,
            placement,
        })),
        pool,
    } : {}
}
