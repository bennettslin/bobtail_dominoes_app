import { differenceInMilliseconds } from 'date-fns'
import { getDateObjectForDate } from '..'
import { getBoolFromStorage } from '../../storage'

const SHOW_ADMIN =
    // This is only ever set manually in console.
    getBoolFromStorage('showAdmin') &&
    // Never show in production.
    !IS_PRODUCTION

export const getIsPastOrPresentDate = date => (
    SHOW_ADMIN ||
    differenceInMilliseconds(new Date(), getDateObjectForDate(date)) >= 0
)

export const filterPastAndPresentDates = entities => (
    entities.filter(entity => (
        getIsPastOrPresentDate(entity.date ? entity.date : entity)
    ))
)
