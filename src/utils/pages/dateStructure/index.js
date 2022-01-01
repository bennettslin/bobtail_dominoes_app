export const getDateValueFromMaps = maps => (
    parseInt(Object.keys(maps)[0])
)

export const getListFromMap = map => (
    Object.keys(map).map(key => map[key])
)

export const getKeyedListFromMap = map => (
    Object.keys(map).map(key => ({ [key]: map[key] }))
)

export const flattenYearStructuredPages = dateStructuredPages => (
    getKeyedListFromMap(dateStructuredPages).map(yearMaps => ({
        year: getDateValueFromMaps(yearMaps),
    }))
)

export const flattenMonthStructuredPages = dateStructuredPages => (
    getKeyedListFromMap(dateStructuredPages).map(yearMaps => {
        const year = getDateValueFromMaps(yearMaps)
        return getKeyedListFromMap(yearMaps[year]).map(monthMaps => ({
            year,
            month: getDateValueFromMaps(monthMaps),
        }))
    }).flat()
)

export const flattenDateStructuredPages = dateStructuredPages => (
    getListFromMap(dateStructuredPages).map(years => (
        getListFromMap(years).map(months => (
            getListFromMap(months)
        )).flat()
    )).flat()
)
