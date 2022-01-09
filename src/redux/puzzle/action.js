import { setDateInStorage } from '../../utils/storage/date'
import { PUZZLE_DEFAULT, QUEUE_GENERATE_MONTH_PUZZLE, QUEUE_GENERATE_PUZZLE, UPDATE_PUZZLE } from './default'
import { PUZZLE_STORE } from './reducer'

export const updatePuzzleTestDate = (
    puzzleTestDate = PUZZLE_DEFAULT.puzzleTestDate,
) => {
    setDateInStorage('puzzleTestDate', puzzleTestDate)

    return {
        type: PUZZLE_STORE,
        payload: { puzzleTestDate },
    }
}

export const queueGeneratePuzzle = () => ({
    type: QUEUE_GENERATE_PUZZLE,
})

export const queueGenerateMonthPuzzle = () => ({
    type: QUEUE_GENERATE_MONTH_PUZZLE,
})

export const updatePuzzle = (puzzle = PUZZLE_DEFAULT.puzzle) => ({
    type: UPDATE_PUZZLE,
    payload: { puzzle },
})
