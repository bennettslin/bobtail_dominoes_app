import { addDays, format, getDate, getMonth, getYear } from 'date-fns'

const getDateForDateObject = dateObject => ({
    year: getYear(dateObject),
    month: getMonth(dateObject) + 1,
    day: getDate(dateObject),
})

const getDateObjectForDate = ({ year, month, day }) => (
    new Date(year, month - 1, day)
)

export const addDaysToDate = (date, increment) => (
    getDateForDateObject(
        addDays(getDateObjectForDate(date), increment),
    )
)

export const getHeaderFromDate = date => (
    Boolean(date) && format(getDateObjectForDate(date), 'MMMM d, yyyy')
)

const formatDateForWeekLink = date => (
    format(getDateObjectForDate(date), 'M/d')
)

export const getWeekLinkForDate = date => (
    `${
        formatDateForWeekLink(date)
    } - ${
        formatDateForWeekLink(addDaysToDate(date, 6))
    }`
)
