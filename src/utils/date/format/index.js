import { format } from 'date-fns'
import { getDateObjectForDate } from '..'

export const formatDate = ({ date, truncate } = {}) => {
    if (!date) {
        return
    }

    const
        { year, month, day } = date,
        monthFormat = truncate ? 'MMM' : 'MMMM'

    let dateFormat = `${monthFormat} d, yyyy`

    if (year) {
        if (!month) {
            if (!day) {
                dateFormat = 'yyyy'
            }
        } else {
            if (!day) {
                dateFormat = `${monthFormat} yyyy`
            }
        }
    } else {
        if (month) {
            dateFormat = day ? `${monthFormat} d` : monthFormat
        }
    }

    return format(getDateObjectForDate(date), dateFormat)
}

export const formatDateWithDayOfWeek = date => (
    format(getDateObjectForDate(date), 'EEEE, MMMM d, yyyy')
)
