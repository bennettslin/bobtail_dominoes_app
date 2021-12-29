import { getBestPointedMovesForTurn } from '../../../ai'
import { getBestPointedEntryBasedOnRequirements } from '../../../ai/requirements'
import { sortByHighestPoints } from '../../../mechanics/points'
import { getRandomDominoIndex } from '../../../play/pool'

export const getBestMoveForPuzzle = ({
    board,
    pool: originalPool,
    rankRange, // Choose the nth best domino and placement.
    minPointsRange,
    needsUniqueHighest,
}) => {
    const
        // Don't mutate original pool.
        pool = new Set(originalPool),
        possibleMoves = []

    // Try each domino in pool.
    while (pool.size) {
        const
            dominoIndex = getRandomDominoIndex(pool),
            hand = new Set([dominoIndex]),
            // We definitely want the best placement for each domino...
            { moves } = getBestPointedMovesForTurn({ hand, board })

        if (moves.length) {
            possibleMoves.push(moves[0])
        }
    }

    const {
        bestPointedEntry: move,
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,

    // ... But we don't necessarily want the best domino.
    } = getBestPointedEntryBasedOnRequirements({
        sortedPointedEntries: possibleMoves.sort(sortByHighestPoints),
        rankRange,
        minPointsRange,
        needsUniqueHighest,
    })

    return {
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,

        // Consider search failed if requirements are not met.
        ...meetsMinimumPoints && meetsUniqueHighest && {
            board,
            move,
        },
    }
}
