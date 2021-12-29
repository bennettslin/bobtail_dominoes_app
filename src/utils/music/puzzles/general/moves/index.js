import { getBestPointedMovesForTurn } from '../../../ai'
import { addMoveToBoard } from '../../../play/board'
import { getBestMoveForPuzzle } from '../move'
import { HAND_COUNT } from '../../../../../constants/music/play'

export const getBestMovesForPuzzle = ({
    board,
    pool,
    handCount = HAND_COUNT,
    // For each hand slot, choose the nth best domino and placement.
    rankRange,
    minPointsRange,
    needsUniqueHighest,
}) => {
    const
        // Have separate trial board while testing individual dominoes.
        trialBoard = [...board],
        handList = []

    let tempHandCount = handCount

    while (
        // We have an incomplete hand.
        tempHandCount &&

        // Puzzle is not possible if this sum is less than hand count.
        tempHandCount + handList.length === handCount
    ) {
        const { move } = getBestMoveForPuzzle({
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
    if (handList.length !== handCount) {
        return {}
    }

    const
        hand = new Set(handList),
        {
            moves,
            yieldPoints,
            meetsMinimumPoints,
            meetsUniqueHighest,

            // This ensures dominoes are placed in the best possible order.
        } = getBestPointedMovesForTurn({
            hand,
            board,
            minPointsRange,
            needsUniqueHighest,
        })

    return {
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,
        ...moves.length && meetsMinimumPoints && meetsUniqueHighest && {
            board,
            pool,
            hand,
            moves,
        },
    }
}
