import { getMaximumPuzzle } from '../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../utils/music/puzzles/regular'

const PUZZLE_OF_DAY_CONFIGS = [
    {
        text: 'Monday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [3, 5],
        minPointsRange: [16, 20],
    },
    {
        text: 'Tuesday',
        getPuzzle: getMissingPuzzle,
        dominoesCountRange: [3, 5],
        minPointsRange: [6, 9],
    },
    {
        text: 'Wednesday',
        getPuzzle: getMaximumPuzzle,
        dominoesCountRange: [3, 5],
        minPointsRange: [8, 12],
    },
    {
        text: 'Thursday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [5, 7],
        minPointsRange: [20, 24],
    },
    {
        text: 'Friday',
        getPuzzle: getMissingPuzzle,
        dominoesCountRange: [5, 7],
        minPointsRange: [9, 12],
    },
    {
        text: 'Saturday',
        getPuzzle: getMaximumPuzzle,
        dominoesCountRange: [5, 7],
        minPointsRange: [12, 16],
    },
    {
        text: 'Sunday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [7, 9],
        minPointsRange: [24, 28],
    },
]

export const getPuzzleConfig = dayOfWeekIndex => (
    PUZZLE_OF_DAY_CONFIGS[dayOfWeekIndex]
)
