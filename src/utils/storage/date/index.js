import { getFromStorage, setInStorage } from '..'
import { getDateForDateObject } from '../../date'

const CURRENT_DATE = getDateForDateObject(new Date())

export const getDateFromStorage = key => (
    JSON.parse(getFromStorage(key) || JSON.stringify(CURRENT_DATE))
)

export const setDateInStorage = (key, date = CURRENT_DATE) => {
    setInStorage(key, JSON.stringify(date))
}
