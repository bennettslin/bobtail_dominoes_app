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
    // Each domino has the nth best placement.
    placementRank = 1,
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
            moves = getBestPointedMovesForTurn({ hand, board })

        if (moves.length) {
            playHand({ hand, handCount: 1, moves, pool })
            addMovesToBoard({ board, moves })
            dominoesCount--
        }
    }

    // Only return values if requested count succeeded.
    return !dominoesCount ? {
        board,
        pool,
    } : null
}
