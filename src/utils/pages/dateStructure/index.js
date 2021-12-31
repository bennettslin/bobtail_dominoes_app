export const getDateValueFromMaps = maps => (
    parseInt(Object.keys(maps)[0])
)

export const getListFromMap = map => (
    Object.keys(map).map(key => map[key])
)

export const getKeyedListFromMap = map => (
    Object.keys(map).map(key => ({ [key]: map[key] }))
)

const getMonthMap = ({
    year,
    month,
    monthMaps,
    topLevelRest,
    dateSpreadFunction,
}) => (
    monthMaps[month].map(({ day, ...rest }) => {
        const date = { year, month, day }
        return {
            ...rest,
            ...topLevelRest,
            ...dateSpreadFunction(date),
            date,
        }
    })
)

const getYearMap = ({
    year,
    yearMaps,
    ...rest
}) => (
    getKeyedListFromMap(yearMaps[year]).reduce(
        (monthsMap, monthMaps) => {
            const month = getDateValueFromMaps(monthMaps)
            return {
                ...monthsMap,
                [month]: getMonthMap({
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
                [year]: getYearMap({
                    year,
                    yearMaps,
                    ...rest,
                }),
            }
        }, {},
    )
)

export const flattenDateStructuredPages = dateStructuredPages => (
    getListFromMap(dateStructuredPages).map(years => (
        getListFromMap(years).flat()
    )).flat()
)
