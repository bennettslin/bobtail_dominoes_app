import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMoveForPuzzle } from '../general/move'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithPoints,
} from '../log'
import { MAXIMUM_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 1000

export const getMaximumPuzzle = ({
    dominoesCountRange,
    minPointsRange = [10, 15],

} = {}) => {
    let trialIndex = 0

    logPuzzleSearch(minPointsRange)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle({
            dominoesCountRange,
        })

        trialIndex++

        if (board) {
            const { move, ...rest } = getBestMoveForPuzzle({
                board,
                pool,
                minPointsRange,
                needsUniqueHighest: true,
            })

            logTrialForPuzzleWithPoints({ trialIndex, ...rest })

            if (move) {
                return {
                    board,
                    moves: [move],
                    puzzleType: MAXIMUM_PUZZLE_TYPE,
                }
            }

        } else {
            logBoardError(trialIndex)
        }
    }
}
