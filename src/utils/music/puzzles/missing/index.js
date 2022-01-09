/* eslint-disable no-await-in-loop */
import { getPuzzlesWorker } from '../../../../modules/puzzleWorkers'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithMissingMoves,
} from '../log'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = Number.MAX_SAFE_INTEGER

export const getMissingPuzzle = async ({
    dominoesCountRange,
    rankRange,
    minPointsRange = [10, 15],

} = {}) => {
    let trialIndex = 0

    logPuzzleSearch(minPointsRange)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = await getPuzzlesWorker()
            .getInitialBoardForPuzzleFromWorker({
                dominoesCountRange,
                rankRange,
            }).then(props => props)

        trialIndex++

        if (board) {
            const {
                board: boardWithMissingMoves,
                missingMoves,
            } = await getPuzzlesWorker()
                .getBestMissingMovesForPuzzleFromWorker({
                    board,
                    pool,
                    minPointsRange,
                }).then(props => props)

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
