import { getDateFromStorage } from '../../utils/storage/date'
export const QUEUE_GENERATE_PUZZLE = 'queueGeneratePuzzle'
export const RESET_PUZZLE_TEXT = 'resetPuzzleText'
export const APPEND_PUZZLE_TEXT = 'appendPuzzleText'

const INITIAL_PUZZLE_TEST_DATE = getDateFromStorage('puzzleTestDate')

export const PUZZLE_DEFAULT = {
    puzzleTestDate: INITIAL_PUZZLE_TEST_DATE,
    generatePuzzleConfig: null,
    puzzle: null,
    puzzleText: '',
}
