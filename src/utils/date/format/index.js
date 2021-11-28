import { format } from 'date-fns'
import { addDaysToDate, getDateObjectForDate } from '..'

export const formatMonthForDate = month => (
    format(getDateObjectForDate({ year: 2021, month, day: 1 }), 'MMMM')
)

export const formatHeadingForDate = date => (
    Boolean(date) && format(getDateObjectForDate(date), 'MMMM d, yyyy')
)

const formatDateForWeekLink = date => (
    format(getDateObjectForDate(date), 'M/d')
)

export const formatWeekLinkForDate = date => (
    `${
        formatDateForWeekLink(date)
    } - ${
        formatDateForWeekLink(addDaysToDate(date, 6))
    }`
)
