import { getFirstIntegerKeyInMap, getKeyedListFromMap, getListFromMap } from '../../general/map'

export const flattenYearStructuredPages = dateStructuredPages => (
    getKeyedListFromMap(dateStructuredPages).map(yearMaps => ({
        year: getFirstIntegerKeyInMap(yearMaps),
    }))
)

export const flattenMonthStructuredPages = dateStructuredPages => (
    getKeyedListFromMap(dateStructuredPages).map(yearMaps => {
        const year = getFirstIntegerKeyInMap(yearMaps)
        return getKeyedListFromMap(yearMaps[year]).map(monthMaps => ({
            year,
            month: getFirstIntegerKeyInMap(monthMaps),
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
