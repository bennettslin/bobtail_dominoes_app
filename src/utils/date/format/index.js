import { format } from 'date-fns'
import { getDateObjectForDate } from '..'

export const formatMonthForDate = month => (
    format(getDateObjectForDate({ year: 2021, month, day: 1 }), 'MMMM')
)

export const formatHeadingForDate = date => (
    Boolean(date) && format(getDateObjectForDate(date), 'MMMM d, yyyy')
)

export const formatDirectionTextForDate = date => (
    Boolean(date) && format(getDateObjectForDate(date), 'MMMM d')
)
