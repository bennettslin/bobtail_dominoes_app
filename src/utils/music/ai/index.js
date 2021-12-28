import { sortByHighestPoints } from '../mechanics/points'
import { getBestPointedEntryBasedOnRequirements } from './requirements'
import { recurseThroughValidPointedMoves } from './valid'

export const getBestPointedMovesForTurn = ({
    hand,
    board,
    limit = 3, // Only consider this number of moves with each recursion.
    minPoints,
    needsUniqueHighest,
    rankRange, // Pick the nth best move.
}) => {
    if (!hand.size) {
        return { moves: [] }
    }

    const {
        bestPointedEntry,
        ...rest
    } = getBestPointedEntryBasedOnRequirements({
        sortedPointedEntries: recurseThroughValidPointedMoves({
            hand,
            board,
            limit,
        }).sort(sortByHighestPoints),
        minPoints,
        needsUniqueHighest,
        rankRange,
    })

    return {
        moves: bestPointedEntry?.moves || [],
        ...rest,
    }
}
