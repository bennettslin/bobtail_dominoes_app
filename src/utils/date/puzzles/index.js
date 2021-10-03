import { differenceInMilliseconds } from 'date-fns'
import { getDateObjectForDate } from '..'

const getIsPastOrPresentDate = date => (
    differenceInMilliseconds(new Date(), getDateObjectForDate(date)) >= 0
)

export const filterPastAndPresentDates = entities => (
    entities.filter(entity => (
        getIsPastOrPresentDate(entity.date ? entity.date : entity)
    ))
)
