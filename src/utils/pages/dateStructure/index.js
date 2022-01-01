import { getFirstNumberKeyInMap, getEntryListFromMap, getValueListFromMap } from '../../general/keyMap'

export const flattenYearStructuredPages = dateStructuredPages => (
    getEntryListFromMap(dateStructuredPages).map(yearMaps => ({
        year: getFirstNumberKeyInMap(yearMaps),
    }))
)

export const flattenMonthStructuredPages = dateStructuredPages => (
    getEntryListFromMap(dateStructuredPages).map(yearMaps => {
        const year = getFirstNumberKeyInMap(yearMaps)
        return getEntryListFromMap(yearMaps[year]).map(monthMaps => ({
            year,
            month: getFirstNumberKeyInMap(monthMaps),
        }))
    }).flat()
)

export const flattenDateStructuredPages = dateStructuredPages => (
    getValueListFromMap(dateStructuredPages).map(years => (
        getValueListFromMap(years).map(months => (
            getValueListFromMap(months)
        )).flat()
    )).flat()
)
