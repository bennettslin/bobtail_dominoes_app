import { getDateObjectForDate } from '../utils/date'

export const getBeforeAll = (date = { year: 1983, month: 5, day: 4 }) => () => {
    global.adminCurrentDate = getDateObjectForDate(date)
}

export const getAfterAll = () => () => {
    delete global.adminCurrentDate
}
