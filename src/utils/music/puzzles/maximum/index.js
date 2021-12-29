import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMoveForPuzzleBoard } from '../general/move'
import { logTrialForPuzzleWithPoints } from '../log'
import { MAXIMUM_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 10
// const TRIALS_COUNT = 1000

export const getMaximumPuzzle = ({
    // minPoints = getRandomInteger(10, 15),
    minPoints = getRandomInteger(1, 4),

} = {}) => {
    let trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        trialIndex++

        if (!board) {
            break
        }

        const { move, ...rest } = getBestMoveForPuzzleBoard({
            board,
            pool,
            minPoints,
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
    }
}
