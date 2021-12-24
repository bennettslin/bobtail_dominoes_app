import { MAXIMUM_PUZZLE_TYPE, MISSING_PUZZLE_TYPE, REGULAR_PUZZLE_TYPE } from '../../constants/music/puzzle'

export const getPuzzleText = puzzleType => {
    switch (puzzleType) {
        case REGULAR_PUZZLE_TYPE:
            return 'Placeholder text for regular puzzle type'
        case MISSING_PUZZLE_TYPE:
            return 'Placeholder text for missing puzzle type'
        case MAXIMUM_PUZZLE_TYPE:
            return 'Select and place a single domino to earn the most points.'
    }
}
