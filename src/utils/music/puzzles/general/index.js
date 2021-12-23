import { getBestPointedMovesForTurn, sortByHighestPoints } from '../../ai'
import { addMovesToBoard, getInitialBoard } from '../../play/board'
import { playHand } from '../../play/hands'
import {
    getInitialExtendedPool,
    getInitialStandardPool,
    getRandomDominoIndex,
} from '../../play/pool'

const addDominoToRunoffPool = ({ hand, runoffPool }) => {
    runoffPool.add(hand.values().next().value)
}

const addDominoesFromRunoffPool = ({ pool, runoffPool }) => {
    runoffPool.forEach(dominoIndex => {
        pool.add(dominoIndex)
    })
}

export const getInitialBoardForPuzzle = ({
    // Puzzles default to including all dominoes.
    isExtendedPool = true,
    // Number of dominoes on board.
    dominoesCount = 1,
    // Each domino has the nth best move.
    moveRank = 0,
}) => {
    const
        pool = isExtendedPool ?
            getInitialExtendedPool() :
            getInitialStandardPool(),
        board = getInitialBoard(pool),
        runoffPool = new Set()

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
        } else {
            addDominoToRunoffPool({ hand, runoffPool })
        }
    }

    addDominoesFromRunoffPool({ pool, runoffPool })

    // Only return values if requested count succeeded.
    return !dominoesCount ? {
        board: board.map(({ dominoIndex, placement }) => ({
            dominoIndex,
            placement,
        })),
        pool,
    } : {}
}

export const getBestMoveForBoard = ({
    board,
    pool,
    minPoints,
    needsUniqueHighest,
}) => {
    const
        possibleMoves = [],
        runoffPool = new Set()

    // Try each domino in pool.
    while (pool.size) {
        const
            hand = new Set([getRandomDominoIndex(pool)]),
            moves = getBestPointedMovesForTurn({ hand, board })

        if (moves.length) {
            possibleMoves.push(moves[0])
        } else {
            addDominoToRunoffPool({ hand, runoffPool })
        }
    }

    addDominoesFromRunoffPool({ pool, runoffPool })
    possibleMoves.sort(sortByHighestPoints)
    const topMovePoints = possibleMoves[0].points

    if (
        needsUniqueHighest &&
        possibleMoves.length > 1 &&
        topMovePoints === possibleMoves[1].points
    ) {
        // Return empty if top move doesn't have uniquely highest points.
        return {}
    }

    // Only return values if requested minimum points succeeded.
    return topMovePoints >= minPoints ? {
        board,
        pool,
        move: possibleMoves[0],
    } : {}
}
