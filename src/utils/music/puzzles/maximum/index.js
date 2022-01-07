/* eslint-disable no-await-in-loop */
import { getPuzzlesWorker } from '../../../../modules/puzzleWorkers'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithPoints,
} from '../log'
import { MAXIMUM_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 1000

export const getMaximumPuzzle = async ({
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
            const { move, ...rest } = await getPuzzlesWorker()
                .getBestMoveForPuzzleFromWorker({
                    board,
                    pool,
                    minPointsRange,
                    needsUniqueHighest: true,
                }).then(props => props)

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
