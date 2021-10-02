import { getFilteredAndJoinedList } from '..'
import { MONTH_NAMES } from '../../../constants/dates'

export const getHeaderFromDate = ({ year, month, day } = {}) => (
    getFilteredAndJoinedList([day, MONTH_NAMES[month], year], ' ')
)
