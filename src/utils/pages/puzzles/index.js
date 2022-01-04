import {
    getNumberKeysFromMap,
    getValueListFromMap,
} from '../../general/keyMap'

export const addPuzzlesForMonths = ({ configs, dateMappedPages }) => (
    configs.map(config => {
        const
            { date: { year, month } } = config,
            rawList = getValueListFromMap(dateMappedPages[year][month])
        return {
            ...config,
            puzzlesList: rawList.map(({
                date,
                board,
                handList,
                missingMoves,
                topLevelPage,
            }) => ({
                date,
                board,
                ...handList && { handList },
                ...missingMoves && { missingMoves },
                topLevelPage,
            })),
        }
    })
)

export const addPuzzleLinksForYears = ({ configs, dateMappedPages }) => (
    configs.map(config => {
        const { date: { year } } = config
        return {
            ...config,
            monthsList: getNumberKeysFromMap(dateMappedPages[year]),
        }
    })
)
