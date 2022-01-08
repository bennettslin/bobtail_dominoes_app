import { ADMIN_STORE } from './reducer'

export const mapAdminCurrentDate = (
    { [ADMIN_STORE]: { adminCurrentDate } },
) => adminCurrentDate
