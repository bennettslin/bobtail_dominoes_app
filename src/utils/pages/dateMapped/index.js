import { getFirstNumberKeyInMap, getEntryListFromMap, getValueListFromMap } from '../../general/keyMap'

export const flattenYearMappedPages = dateMappedPages => (
    getEntryListFromMap(dateMappedPages).map(yearMaps => ({
        year: getFirstNumberKeyInMap(yearMaps),
    }))
)

export const flattenMonthMappedPages = dateMappedPages => (
    getEntryListFromMap(dateMappedPages).map(yearMaps => {
        const year = getFirstNumberKeyInMap(yearMaps)
        return getEntryListFromMap(yearMaps[year]).map(monthMaps => ({
            year,
            month: getFirstNumberKeyInMap(monthMaps),
        }))
    }).flat()
)

export const flattenDateMappedPages = dateMappedPages => (
    getValueListFromMap(dateMappedPages).map(years => (
        getValueListFromMap(years).map(months => (
            getValueListFromMap(months)
        )).flat()
    )).flat()
)
