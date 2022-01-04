import { differenceInMilliseconds } from 'date-fns'
import { getIsServerSide } from '../../browser'
import { getDateFromStorage } from '../../storage/date'
import { getDateForDateObject, getDateObjectForDate } from '..'

export const getCurrentDate = () => (
    IS_RUNTIME ?
        getDateFromStorage('adminCurrentDate') :
        getDateForDateObject(new Date())
)

export const getIsTimeEligibleDate = date => (
    // Render all dates on server side.
    getIsServerSide() ||
    differenceInMilliseconds(
        getDateObjectForDate(getCurrentDate()),
        getDateObjectForDate(date),
    ) >= 0
)
