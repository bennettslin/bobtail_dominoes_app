import { MONTH_NAMES } from '../../../constants/dates'

export const getHeaderFromDate = ({ year, month, day } = {}) => (
    [day, MONTH_NAMES[month], year].join(' ')
)
