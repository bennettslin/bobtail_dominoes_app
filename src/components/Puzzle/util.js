import { MAXIMUM_PUZZLE_TYPE, MISSING_PUZZLE_TYPE, REGULAR_PUZZLE_TYPE } from '../../constants/music/puzzle'

export const getPuzzleText = puzzleType => {
    switch (puzzleType) {
        case REGULAR_PUZZLE_TYPE:
            return 'Place the given dominoes in your hand to earn the most points.'
        case MISSING_PUZZLE_TYPE:
            return 'Determine the missing domino.'
        case MAXIMUM_PUZZLE_TYPE:
            return 'Select and place a single available domino to earn the most points.'
    }
}
