import { differenceInMilliseconds } from 'date-fns'
import { getIsServerSide } from '../../browser'
import { getDateFromStorage } from '../../storage/date'
import { getDateForDateObject, getDateObjectForDate } from '..'

export const getCurrentDate = () => (
    IS_PRODUCTION ?
        getDateForDateObject(new Date()) :
        getDateFromStorage('adminCurrentDate')
)

export const getIsTimeEligibleDate = date => (
    // Render all dates on server side.
    getIsServerSide() ||
    differenceInMilliseconds(
        getDateObjectForDate(getCurrentDate()),
        getDateObjectForDate(date),
    ) >= 0
)
