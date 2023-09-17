import { getWindow } from '../browser'

export const getWindowStorage = () => (
    getWindow().localStorage
)

export const getFromStorage = key => (
    getWindowStorage()[key]
)

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}

export const getBoolFromTextValue = textValue => textValue === 'true'

export const getBoolFromStorage = (key, defaultValue = false) => {
    const
        // Value is stored as string.
        storedValue = getWindowStorage()[key],
        savedValue = storedValue ?
            getBoolFromTextValue(storedValue) :
            defaultValue

    // This only saves upon initial retrieval.
    setBoolInStorage(key, savedValue)
    return savedValue
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

export const getIntegerFromStorage = key => (
    parseInt(getWindowStorage()[key]) || 0
)
