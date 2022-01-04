import { getDateFromStorage } from '../../utils/storage/date'

const INITIAL_ADMIN_CURRENT_DATE = getDateFromStorage('adminCurrentDate')
const INITIAL_PUZZLE_TEST_DATE = getDateFromStorage('puzzleTestDate')

export const ADMIN_DEFAULT = {
    adminCurrentDate: INITIAL_ADMIN_CURRENT_DATE,
    puzzleTestDate: INITIAL_PUZZLE_TEST_DATE,
}
