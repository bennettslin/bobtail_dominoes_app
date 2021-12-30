import { sortByHighestPoints } from '../mechanics/points'
import { getBestPointedEntryBasedOnRequirements } from './requirements'
import { recurseThroughValidPointedMoves } from './valid'

export const getBestPointedMovesForTurn = ({
    hand,
    board,
    limit = 3, // Only consider this number of moves with each recursion.
    rankRange,
    minPointsRange,
    needsUniqueHighest,
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
        rankRange,
        minPointsRange,
        needsUniqueHighest,
    })

    return {
        moves: bestPointedEntry?.moves || [],
        ...rest,
    }
}
