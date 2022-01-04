import { getMaximumPuzzle } from '../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../utils/music/puzzles/regular'

export const DAY_OF_WEEK_DEBUG_BUTTON_CONFIGS = [
    {
        text: 'Monday',
        getPuzzle: getRegularPuzzle,
    },
    {
        text: 'Tuesday',
        getPuzzle: getMissingPuzzle,
    },
    {
        text: 'Wednesday',
        getPuzzle: getMaximumPuzzle,
    },
    {
        text: 'Thursday',
        getPuzzle: getRegularPuzzle,
    },
    {
        text: 'Friday',
        getPuzzle: getMissingPuzzle,
    },
    {
        text: 'Saturday',
        getPuzzle: getMaximumPuzzle,
    },
    {
        text: 'Sunday',
        getPuzzle: getMaximumPuzzle,
    },
]
