import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMovesForPuzzle } from '../general/moves'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithPoints,
} from '../log'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 1000

export const getRegularPuzzle = ({
    dominoesCountRange,
    minPointsRange = [25, 30],

} = {}) => {
    let trialIndex = 0

    logPuzzleSearch(minPointsRange)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle({
            dominoesCountRange,
        })

        trialIndex++

        if (board) {
            const {
                hand,
                moves,
                ...rest
            } = getBestMovesForPuzzle({
                board,
                pool,
                minPointsRange,
                needsUniqueHighest: true,
            })

            logTrialForPuzzleWithPoints({ trialIndex, ...rest })

            if (moves) {
                return {
                    board,
                    moves,
                    hand,
                    puzzleType: REGULAR_PUZZLE_TYPE,
                }
            }

        } else {
            logBoardError(trialIndex)
        }
    }
}
