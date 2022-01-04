import { getDateObjectForDate } from '../utils/date'

export const getBeforeAll = (date = { year: 1983, month: 5, day: 4 }) => () => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(getDateObjectForDate(date))
}

export const getAfterAll = () => () => {
    jest.useRealTimers()
}
