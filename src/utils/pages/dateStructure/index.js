export const getDateValueFromMaps = maps => (
    parseInt(Object.keys(maps)[0])
)

export const getListFromMap = map => (
    Object.keys(map).map(key => map[key])
)

export const flattenDateStructuredPages = dateStructuredPages => (
    getListFromMap(dateStructuredPages).map(years => (
        getListFromMap(years).map(months => (
            getListFromMap(months)
        )).flat()
    )).flat()
)
