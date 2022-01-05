import { getMaximumPuzzle } from '../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../utils/music/puzzles/regular'

const PUZZLE_OF_DAY_CONFIGS = [
    {
        text: 'Monday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [25, 30],
    },
    {
        text: 'Tuesday',
        getPuzzle: getMissingPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [1, 4],
    },
    {
        text: 'Wednesday',
        getPuzzle: getMaximumPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [1, 4],
    },
    {
        text: 'Thursday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [25, 30],
    },
    {
        text: 'Friday',
        getPuzzle: getMissingPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [1, 4],
    },
    {
        text: 'Saturday',
        getPuzzle: getMaximumPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [1, 4],
    },
    {
        text: 'Sunday',
        getPuzzle: getRegularPuzzle,
        dominoesCountRange: [4, 7],
        minPointsRange: [25, 30],
    },
]

export const getPuzzleConfig = dayOfWeekIndex => (
    PUZZLE_OF_DAY_CONFIGS[dayOfWeekIndex]
)
