import { getDay } from 'date-fns'
import { mod } from '../../general/math'
import { getDateObjectForDate } from '..'

export const getDayOfWeekIndex = date => (
    // For our purposes, week starts on Monday, not Sunday.
    mod(getDay(getDateObjectForDate(date)) - 1, 7)
)
