import { getDay } from 'date-fns'
import { getDateObjectForDate } from '..'

export const getDayOfWeekIndex = date => (
    getDay(getDateObjectForDate(date))
)
