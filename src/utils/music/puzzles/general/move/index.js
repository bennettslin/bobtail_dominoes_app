import { getNthInSortedList } from '../../../../general'
import { getRandomInteger } from '../../../../general/random'
import { getBestPointedMovesForTurn } from '../../../ai'
import { getPointsForMoves, sortByHighestPoints } from '../../../mechanics/points'
import { addMoveToBoard } from '../../../play/board'
import { getRandomDominoIndex } from '../../../play/pool'
import { addDominoesFromRunoffPool, addDominoToRunoffPool } from '../runoff'

export const getBestMoveForPuzzleBoard = ({
    board,
    pool,
    // Choose the nth best domino and placement.
    moveRankRange: [moveRankMin, moveRankMax] = [0, 0],
    minPoints = 0,
    needsUniqueHighest,
}) => {
    const
        possibleMoves = [],
        runoffList = []

    // Try each domino in pool.
    while (pool.size) {
        const
            dominoIndex = getRandomDominoIndex(pool),
            hand = new Set([dominoIndex]),
            moves = getBestPointedMovesForTurn({ hand, board })

        if (moves.length) {
            possibleMoves.push(moves[0])
        }

        addDominoToRunoffPool({ dominoIndex, runoffList })
    }

    const
        move = getNthInSortedList({
            rank: getRandomInteger(moveRankMin, moveRankMax),
            sortedList: possibleMoves.sort(sortByHighestPoints),
        }),
        yieldPoints = move.points,
        meetsMinimumPoints = yieldPoints >= minPoints,
        meetsUniqueHighest =
            !needsUniqueHighest ||
            possibleMoves.length === 1 ||
            yieldPoints > possibleMoves[1].points

    addDominoesFromRunoffPool({ move, pool, runoffList })

    return {
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,

        ...meetsMinimumPoints && meetsUniqueHighest && {
            board,
            pool,
            move,
        },
    }
}

export const getBestMovesForPuzzleBoard = ({
    board,
    pool,
    // For each hand slot, choose the nth best domino and placement.
    moveRankRange,
    handCount,
    minPoints,
}) => {
    const
        // Have separate trial board while testing individual dominoes.
        trialBoard = [...board],
        handList = []

    let tempHandCount = handCount,
        returnConfig = {}

    while (
        // We have an incomplete hand.
        tempHandCount &&

        // Puzzle is not possible if this sum is less than hand count.
        tempHandCount + handList.length === handCount
    ) {
        const { move } = getBestMoveForPuzzleBoard({
            board: trialBoard,
            pool,
            moveRankRange,
        })

        if (move) {
            handList.push(move.dominoIndex)
            addMoveToBoard(move, trialBoard)
        }

        tempHandCount--
    }

    // Safety check. It's unlikely the hand list will ever be incomplete.
    if (handList.length === handCount) {
        const
            hand = new Set(handList),
            // This ensures dominoes are placed in the best possible order.
            moves = getBestPointedMovesForTurn({ hand, board }),
            yieldPoints = getPointsForMoves({ moves, handCount }),
            meetsMinimumPoints = yieldPoints >= minPoints

        returnConfig = {
            yieldPoints,
            meetsMinimumPoints,
            ...moves.length && meetsMinimumPoints && {
                board,
                pool,
                hand,
                moves,
            },
        }
    }

    return returnConfig
}
