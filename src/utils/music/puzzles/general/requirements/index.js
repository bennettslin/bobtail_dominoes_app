import { getNthInSortedList } from '../../../../general'
import { getRandomInteger } from '../../../../general/random'

export const getBestPointedEntryBasedOnRequirements = ({
    sortedPointedEntries,
    minPoints = 0,
    needsUniqueHighest = false,
    rankRange: [rankMin, rankMax] = [0, 0],

}) => {
    const
        bestPointedEntry = getNthInSortedList({
            rank: getRandomInteger(rankMin, rankMax),
            sortedList: sortedPointedEntries,
        }),
        yieldPoints = bestPointedEntry?.points,
        meetsMinimumPoints = yieldPoints >= minPoints,

        meetsUniqueHighest =
            Boolean(rankMax) ||
            !needsUniqueHighest ||
            sortedPointedEntries.length === 1 ||
            yieldPoints > sortedPointedEntries[1].points

    return {
        bestPointedEntry,
        yieldPoints,
        meetsMinimumPoints,
        meetsUniqueHighest,
    }
}
