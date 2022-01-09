/* eslint-disable no-await-in-loop */
import { getPuzzlesWorker } from '../../../../modules/puzzleWorkers'
import {
    logBoardError,
    logPuzzleSearch,
    logTrialForPuzzleWithPoints,
} from '../log'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = Number.MAX_SAFE_INTEGER

export const getRegularPuzzle = async ({
    dominoesCountRange,
    rankRange,
    minPointsRange = [25, 30],

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
                hand,
                moves,
                ...rest
            } = await getPuzzlesWorker()
                .getBestMovesForPuzzleFromWorker({
                    board,
                    pool,
                    minPointsRange,
                    needsUniqueHighest: true,
                }).then(props => props)

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
