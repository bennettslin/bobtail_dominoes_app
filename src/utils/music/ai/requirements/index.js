import { getNthInSortedList } from '../../../general'
import { getRandomInteger } from '../../../general/random'

export const getBestPointedEntryBasedOnRequirements = ({
    sortedPointedEntries,
    needsUniqueHighest = false,
    rankRange: [rankMin, rankMax] = [0, 0],
    minPointsRange: [minPointsMin, minPointsMax] = [0, 0],

}) => {
    const
        bestPointedEntry = getNthInSortedList({
            rank: getRandomInteger(rankMin, rankMax),
            sortedList: sortedPointedEntries,
        }),
        yieldPoints = bestPointedEntry?.points || 0

    return {
        bestPointedEntry,
        yieldPoints,
        meetsMinimumPoints:
            yieldPoints >= getRandomInteger(minPointsMin, minPointsMax),
        meetsUniqueHighest: (
            Boolean(rankMax) ||
            !needsUniqueHighest ||
            sortedPointedEntries.length === 1 ||
            yieldPoints > sortedPointedEntries[1].points
        ),
    }
}
