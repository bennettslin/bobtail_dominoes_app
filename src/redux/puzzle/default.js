import { getDateFromStorage } from '../../utils/storage/date'
export const QUEUE_GENERATE_PUZZLE = 'queueGeneratePuzzle'
export const QUEUE_GENERATE_MONTH_PUZZLE = 'queueGenerateMonthPuzzle'
export const UPDATE_PUZZLE = 'updatePuzzle'

const INITIAL_PUZZLE_TEST_DATE = getDateFromStorage('puzzleTestDate')

export const PUZZLE_DEFAULT = {
    puzzleTestDate: INITIAL_PUZZLE_TEST_DATE,
    puzzleEndDate: null,
    generatePuzzleConfig: null,
    puzzle: null,
    puzzleText: '',
}
