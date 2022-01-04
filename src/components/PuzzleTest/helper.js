import { getMaximumPuzzle } from '../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../utils/music/puzzles/regular'

const PUZZLE_OF_DAY_CONFIGS = [
    {
        text: 'Sunday',
        getPuzzle: getRegularPuzzle,
    },
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
]

export const getPuzzleConfig = dayOfWeekIndex => (
    PUZZLE_OF_DAY_CONFIGS[dayOfWeekIndex]
)
