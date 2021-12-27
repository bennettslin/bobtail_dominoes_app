import { getBestPointedMovesForTurn } from '../../../ai'
import { getPointsForMoves } from '../../../mechanics/points'
import { addMoveToBoard } from '../../../play/board'
import { getBestMoveForPuzzleBoard } from '../move'

export const getBestMovesForPuzzleBoard = ({
    board,
    pool,
    // For each hand slot, choose the nth best domino and placement.
    rankRange,
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
            rankRange,
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
