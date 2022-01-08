import { MAXIMUM_PUZZLE_TYPE, MISSING_PUZZLE_TYPE, REGULAR_PUZZLE_TYPE } from '../../../constants/music/puzzle'
import { getMaximumPuzzle } from '../../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../../utils/music/puzzles/regular'

const getPuzzleGetter = puzzleType => {
    switch (puzzleType) {
        case REGULAR_PUZZLE_TYPE:
            return getRegularPuzzle
        case MISSING_PUZZLE_TYPE:
            return getMissingPuzzle
        case MAXIMUM_PUZZLE_TYPE:
            return getMaximumPuzzle
    }
}

export const getPuzzle = ({ puzzleType, ...rest }) => (
    getPuzzleGetter(puzzleType)({ ...rest })
)
