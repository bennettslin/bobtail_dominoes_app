import { getBestPointedMovesForTurn } from '../../../ai'
import { sortByHighestPoints } from '../../../mechanics/points'
import { getRandomDominoIndex } from '../../../play/pool'
import { getBestPointedEntryBasedOnRequirements } from '../requirements'
import { addDominoesFromRunoffPool, addDominoToRunoffPool } from '../runoff'

export const getBestMoveForPuzzleBoard = ({
    board,
    pool,
    rankRange, // Choose the nth best domino and placement.
    minPoints,
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
            // We definitely want the best placement for each domino...
            moves = getBestPointedMovesForTurn({ hand, board })

        if (moves.length) {
            possibleMoves.push(moves[0])
        }

        addDominoToRunoffPool({ dominoIndex, runoffList })
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
        minPoints,
        needsUniqueHighest,
    })

    addDominoesFromRunoffPool({ move, pool, runoffList })

    return {
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,

        // Consider search failed if requirements are not met.
        ...meetsMinimumPoints && meetsUniqueHighest && {
            board,
            pool,
            move,
        },
    }
}
