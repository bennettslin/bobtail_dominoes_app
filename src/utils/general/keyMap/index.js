export const getFirstNumberKeyInMap = map => (
    parseInt(Object.keys(map)[0])
)

export const getValueListFromMap = map => (
    Object.values(map)
)

export const getEntryListFromMap = map => (
    Object.keys(map).map(key => ({ [key]: map[key] }))
)

export const getNumberKeysFromMap = map => (
    Object.keys(map).map(key => parseInt(key))
)
