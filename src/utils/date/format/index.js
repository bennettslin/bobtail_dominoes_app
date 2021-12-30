import { format } from 'date-fns'
import { getDateObjectForDate } from '..'

export const formatDate = date => {
    if (!date) {
        return
    }

    const { year, month, day } = date
    let dateFormat = 'MMMM d, yyyy'

    if (year) {
        if (!month) {
            if (!day) {
                dateFormat = 'yyyy'
            }
        }
    } else {
        if (month) {
            dateFormat = day ? 'MMMM d' : 'MMMM'
        }
    }

    return format(getDateObjectForDate(date), dateFormat)
}
