import { getDateValueFromMaps, getKeyedListFromMap } from '..'

const populateDaysMap = ({
    year,
    month,
    monthMaps,
    dateSpreadFunction,
    ...rest
}) => (
    getKeyedListFromMap(monthMaps[month]).reduce(
        (daysMap, dayMaps) => {
            const day = getDateValueFromMaps(dayMaps)
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
    getKeyedListFromMap(yearMaps[year]).reduce(
        (monthsMap, monthMaps) => {
            const month = getDateValueFromMaps(monthMaps)
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
    getKeyedListFromMap(dateStructuredPages).reduce(
        (yearsMap, yearMaps) => {
            const year = getDateValueFromMaps(yearMaps)
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
