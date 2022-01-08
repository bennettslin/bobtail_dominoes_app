import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../constants/music/puzzle'

const PUZZLE_OF_DAY_CONFIGS = [
    {
        text: 'Monday',
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [16, 20],
    },
    {
        text: 'Tuesday',
        puzzleType: MISSING_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [6, 9],
    },
    {
        text: 'Wednesday',
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        dominoesCountRange: [3, 5],
        rankRange: [0, 5],
        minPointsRange: [8, 12],
    },
    {
        text: 'Thursday',
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [20, 24],
    },
    {
        text: 'Friday',
        puzzleType: MISSING_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [9, 12],
    },
    {
        text: 'Saturday',
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        dominoesCountRange: [5, 7],
        rankRange: [0, 3],
        minPointsRange: [12, 16],
    },
    {
        text: 'Sunday',
        puzzleType: REGULAR_PUZZLE_TYPE,
        dominoesCountRange: [7, 9],
        rankRange: [0, 3],
        minPointsRange: [24, 28],
    },
]

export const getPuzzleConfig = dayOfWeekIndex => (
    PUZZLE_OF_DAY_CONFIGS[dayOfWeekIndex]
)
