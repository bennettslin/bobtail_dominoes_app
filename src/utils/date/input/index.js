import { format } from 'date-fns'
import { getDateObjectForDate } from '..'

export const getDateFromInputValue = value => {
    const [year, month, day] = value.split('-').map(entry => parseInt(entry))
    return { year, month, day }
}

export const getInputValueFromDate = date => (
    format(getDateObjectForDate(date), 'yyyy-MM-dd')
)
