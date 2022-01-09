import { getGeneratePuzzleConfig } from '../../constants/admin/puzzle'
import { addDaysToDate, getFirstDayOfMonth, getFirstDayOfNextMonth, getIsSameDate } from '../../utils/date'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'
import { setDateInStorage } from '../../utils/storage/date'
import {
    PUZZLE_DEFAULT, QUEUE_GENERATE_PUZZLE, UPDATE_PUZZLE, QUEUE_GENERATE_MONTH_PUZZLE,
} from './default'

export const PUZZLE_STORE = 'puzzle'

export const puzzleReducer = (
    state = PUZZLE_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case PUZZLE_STORE:
            return {
                ...state,
                ...payload,
            }
        case QUEUE_GENERATE_PUZZLE: {
            const { puzzleTestDate } = state

            return {
                ...state,
                puzzle: PUZZLE_DEFAULT.puzzle,
                generatePuzzleConfig: (
                    getGeneratePuzzleConfig(puzzleTestDate)
                ),
            }
        }
        case QUEUE_GENERATE_MONTH_PUZZLE: {
            const
                { puzzleTestDate: prevTestDate } = state,
                puzzleTestDate = getFirstDayOfMonth(prevTestDate)

            setDateInStorage('puzzleTestDate', puzzleTestDate)

            return {
                ...state,
                puzzleTestDate,
                puzzleEndDate: getFirstDayOfNextMonth(prevTestDate),
                generatePuzzleConfig: (
                    getGeneratePuzzleConfig(puzzleTestDate)
                ),
                puzzleText: PUZZLE_DEFAULT.puzzleText,
            }
        }
        case UPDATE_PUZZLE: {
            const
                {
                    puzzleTestDate: prevTestDate,
                    puzzleEndDate,
                    puzzleText,
                } = state,
                { puzzle } = payload,
                puzzleTestDate = addDaysToDate(prevTestDate, 1),
                isSameDate = getIsSameDate(puzzleTestDate, puzzleEndDate)

            setDateInStorage('puzzleTestDate', puzzleTestDate)

            return {
                ...state,
                ...puzzle && {
                    puzzleTestDate,
                    ...isSameDate && {
                        puzzleEndDate: PUZZLE_DEFAULT.puzzleEndDate,
                    },
                    generatePuzzleConfig: (
                        isSameDate ?
                            PUZZLE_DEFAULT.generatePuzzleConfig :
                            getGeneratePuzzleConfig(puzzleTestDate)
                    ),
                    puzzleText: puzzleText + getTextForPuzzle({
                        day: prevTestDate.day,
                        ...puzzle,
                    }),
                },
                puzzle,
            }
        }
        default:
            return state
    }
}
