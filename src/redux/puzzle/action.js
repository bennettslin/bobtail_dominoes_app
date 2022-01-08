import { setDateInStorage } from '../../utils/storage/date'
import { PUZZLE_DEFAULT, QUEUE_GENERATE_PUZZLE, APPEND_PUZZLE_TEXT, RESET_PUZZLE_TEXT } from './default'
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

export const queueGeneratePuzzle = queuedGeneratePuzzle => ({
    type: QUEUE_GENERATE_PUZZLE,
    payload: { queuedGeneratePuzzle },
})

export const updatePuzzle = (puzzle = PUZZLE_DEFAULT.puzzle) => ({
    type: PUZZLE_STORE,
    payload: { puzzle },
})

export const resetPuzzleText = () => ({
    type: RESET_PUZZLE_TEXT,
})

export const appendPuzzleText = text => ({
    type: APPEND_PUZZLE_TEXT,
    payload: text,
})
