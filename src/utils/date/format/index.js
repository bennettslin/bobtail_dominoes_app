import { format } from 'date-fns'
import { addDaysToDate, getDateObjectForDate } from '..'

export const formatHeaderFromDate = date => (
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
