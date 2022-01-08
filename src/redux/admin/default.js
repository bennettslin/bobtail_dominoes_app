import { getDateFromStorage } from '../../utils/storage/date'

const INITIAL_ADMIN_CURRENT_DATE = getDateFromStorage('adminCurrentDate')

export const ADMIN_DEFAULT = {
    adminCurrentDate: INITIAL_ADMIN_CURRENT_DATE,
}
