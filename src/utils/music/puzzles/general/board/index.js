import { getRandomInteger } from '../../../../general/random'
import { getBestPointedMovesForTurn } from '../../../ai'
import { addMovesToBoard, getInitialBoard } from '../../../play/board'
import { playHand } from '../../../play/hands'
import {
    getInitialExtendedPool,
    getInitialStandardPool,
    getRandomDominoIndex,
} from '../../../play/pool'
import { addDominoesFromRunoffPool, addDominoToRunoffPool } from '../runoff'

export const getInitialBoardForPuzzle = ({
    // Puzzles default to including all dominoes.
    isExtendedPool = true,
    // Number of dominoes on board.
    dominoesCountRange: [dominoesCountMin, dominoesCountMax] = [4, 7],
    // Each domino has the nth best move.
    moveRankRange: [moveRankMin, moveRankMax] = [0, 5],
} = {}) => {
    const
        pool = isExtendedPool ?
            getInitialExtendedPool() :
            getInitialStandardPool(),
        board = getInitialBoard(pool),
        runoffList = []

    let dominoesCount = getRandomInteger(dominoesCountMin, dominoesCountMax)

    // Decrement count for initial domino.
    dominoesCount--

    // Add one domino at a time to board.
    while (dominoesCount && pool.size) {
        const
            dominoIndex = getRandomDominoIndex(pool),
            hand = new Set([dominoIndex]),
            moveRank = getRandomInteger(moveRankMin, moveRankMax),
            moves = getBestPointedMovesForTurn({ hand, board, moveRank })

        if (moves.length) {
            playHand({ hand, handCount: 1, moves, pool })
            addMovesToBoard({ board, moves })
            dominoesCount--
        } else {
            addDominoToRunoffPool({ dominoIndex, runoffList })
        }
    }

    addDominoesFromRunoffPool({ pool, runoffList })

    // Only return values if requested count succeeded.
    return !dominoesCount ? {
        board: board.map(({ dominoIndex, placement }) => ({
            dominoIndex,
            placement,
        })),
        pool,
    } : {}
}
