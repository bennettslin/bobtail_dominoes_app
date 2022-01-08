import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../music/puzzle'

const PUZZLE_OF_DAY_CONFIGS = [
    {
        // Monday
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [16, 20],
    },
    {
        // Tuesday
        puzzleType: MISSING_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [6, 9],
    },
    {
        // Wednesday
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [8, 12],
    },
    {
        // Thursday
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [20, 24],
    },
    {
        // Friday
        puzzleType: MISSING_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [9, 12],
    },
    {
        // Saturday
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [12, 16],
    },
    {
        // Sunday
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [7, 9],
        rankRange: [0, 3],
        minPointsRange: [24, 28],
    },
]

export const getGeneratePuzzleConfig = dayOfWeekIndex => (
    PUZZLE_OF_DAY_CONFIGS[dayOfWeekIndex]
)
