import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMissingMovesForPuzzle } from '../general/missing'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithMissingMoves,
} from '../log'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

// const TRIALS_COUNT = 10
const TRIALS_COUNT = 1000

export const getMissingPuzzle = ({
    // minPointsRange = [10, 15],
    minPointsRange = [1, 4],

} = {}) => {
    let trialIndex = 0

    logPuzzleSearch(minPointsRange)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        trialIndex++

        if (board) {
            const {
                board: boardWithMissingMoves,
                missingMoves,
            } = getBestMissingMovesForPuzzle({
                board,
                pool,
                minPointsRange,
            })

            logTrialForPuzzleWithMissingMoves({ trialIndex, missingMoves })

            if (missingMoves) {
                return {
                    board: boardWithMissingMoves,
                    missingMoves,
                    puzzleType: MISSING_PUZZLE_TYPE,
                }
            }

        } else {
            logBoardError(trialIndex)
        }
    }
}
