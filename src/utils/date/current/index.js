import { addDays, differenceInMilliseconds } from 'date-fns'
import { getIsServerSide } from '../../browser'
import { getFromStorage, setInStorage } from '../../storage'
import { getDateForDateObject, getDateObjectForDate } from '..'

// Establish consistent date for entire session.
const CURRENT_DATE = new Date()

// When not in production, allow admin to change current date.
if (!getIsServerSide() && !IS_PRODUCTION) {
    const ADMIN_INCREMENT_KEY = 'adminIncrement'
    global.adminCurrentDate = addDays(
        CURRENT_DATE,
        getFromStorage(ADMIN_INCREMENT_KEY) || 0,
    )

    global.addToDate = (increment = 0) => {
        setInStorage(ADMIN_INCREMENT_KEY, increment)
        const newDate = addDays(CURRENT_DATE, increment)
        global.adminCurrentDate = newDate
        return newDate
    }
}

export const getCurrentDate = () => (
    getDateForDateObject(global.adminCurrentDate)
)

export const getIsTimeEligibleDate = date => (
    // Render all dates on server side.
    getIsServerSide() ||

    differenceInMilliseconds(
        IS_PRODUCTION ? CURRENT_DATE : global.adminCurrentDate,
        getDateObjectForDate(date),
    ) >= 0
)

export const getTimeEligiblePage = page => (
    // eslint-disable-next-line no-nested-ternary
    page && (
        !page.date || getIsTimeEligibleDate(page.date)
    ) ? page : null
)

export const filterTimeEligiblePages = pages => (
    pages.filter(({ date }) => (
        getIsTimeEligibleDate(date)
    ))
)
