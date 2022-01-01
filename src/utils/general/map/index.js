export const getFirstIntegerKeyInMap = map => (
    parseInt(Object.keys(map)[0])
)

export const getListFromMap = map => (
    Object.keys(map).map(key => map[key])
)

export const getKeyedListFromMap = map => (
    Object.keys(map).map(key => ({ [key]: map[key] }))
)

export const getIntegerKeysFromMap = map => (
    getKeyedListFromMap(map).map(entryMap => (
        getFirstIntegerKeyInMap(entryMap)
    ))
)
