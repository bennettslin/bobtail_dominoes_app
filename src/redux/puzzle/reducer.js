import { getGeneratePuzzleConfig } from '../../constants/admin/puzzle'
import { getDayOfWeekIndex } from '../../utils/date/dayOfWeek'
import { PUZZLE_DEFAULT, APPEND_PUZZLE_TEXT, RESET_PUZZLE_TEXT, QUEUE_GENERATE_PUZZLE } from './default'

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
            const
                { puzzleTestDate } = state,
                { queuedGeneratePuzzle } = payload

            return {
                ...state,
                generatePuzzleConfig: queuedGeneratePuzzle ?
                    getGeneratePuzzleConfig(getDayOfWeekIndex(puzzleTestDate)) :
                    PUZZLE_DEFAULT.generatePuzzleConfig,
            }
        }
        case RESET_PUZZLE_TEXT: {
            return {
                ...state,
                puzzleText: PUZZLE_DEFAULT.puzzleText,
            }
        }
        case APPEND_PUZZLE_TEXT: {
            const
                { puzzleText: prevPuzzleText } = state,
                { puzzleText } = payload

            return {
                ...state,
                puzzleText: prevPuzzleText + puzzleText,
            }
        }
        default:
            return state
    }
}
