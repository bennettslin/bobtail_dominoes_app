import { getFirstNumberKeyInMap, getEntryListFromMap } from '../../../general/keyMap'

const populateDaysMap = ({
    year,
    month,
    monthMaps,
    dateSpreadFunction = () => ({}),
    ...rest
}) => (
    getEntryListFromMap(monthMaps[month]).reduce(
        (daysMap, dayMaps) => {
            const day = getFirstNumberKeyInMap(dayMaps)
            const date = { year, month, day }
            return {
                ...daysMap,
                [day]: {
                    date,
                    ...dateSpreadFunction(date),
                    ...dayMaps[day],
                    ...rest,
                },
            }
        }, {},
    )
)

const populateMonthsMap = ({
    year,
    yearMaps,
    ...rest
}) => (
    getEntryListFromMap(yearMaps[year]).reduce(
        (monthsMap, monthMaps) => {
            const month = getFirstNumberKeyInMap(monthMaps)
            return {
                ...monthsMap,
                [month]: populateDaysMap({
                    year,
                    month,
                    monthMaps,
                    ...rest,
                }),
            }
        }, {},
    )
)

export const populateDateStructuredPages = ({
    dateStructuredPages,
    ...rest
}) => (
    getEntryListFromMap(dateStructuredPages).reduce(
        (yearsMap, yearMaps) => {
            const year = getFirstNumberKeyInMap(yearMaps)
            return {
                ...yearsMap,
                [year]: populateMonthsMap({
                    year,
                    yearMaps,
                    ...rest,
                }),
            }
        }, {},
    )
)
