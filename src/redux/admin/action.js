import { setDateInStorage } from '../../utils/storage/date'
import { ADMIN_DEFAULT } from './default'
import { ADMIN_STORE } from './reducer'

export const updateAdminCurrentDate = (
    adminCurrentDate = ADMIN_DEFAULT.adminCurrentDate,
) => {
    setDateInStorage('adminCurrentDate', adminCurrentDate)

    return {
        type: ADMIN_STORE,
        payload: { adminCurrentDate },
    }
}

export const updatePuzzleTestDate = (
    puzzleTestDate = ADMIN_DEFAULT.puzzleTestDate,
) => {
    setDateInStorage('puzzleTestDate', puzzleTestDate)

    return {
        type: ADMIN_STORE,
        payload: { puzzleTestDate },
    }
}
