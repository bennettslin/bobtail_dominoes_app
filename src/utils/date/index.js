import { addDays, getDate, getMonth, getYear } from 'date-fns'

export const getDateForDateObject = dateObject => ({
    year: getYear(dateObject),
    month: getMonth(dateObject) + 1,
    day: getDate(dateObject),
})

export const getDateObjectForDate = ({ year = 2020, month = 1, day = 1 }) => (
    new Date(year, month - 1, day)
)

export const addDaysToDate = (date, increment) => (
    getDateForDateObject(
        addDays(getDateObjectForDate(date), increment),
    )
)
