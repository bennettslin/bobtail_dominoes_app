import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMovesForPuzzleBoard } from '../general/moves'
import { logTrialForPuzzleWithPoints } from '../log'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 10
// const TRIALS_COUNT = 1000

export const getRegularPuzzle = ({
    minPoints = getRandomInteger(25, 30),

} = {}) => {
    let trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        trialIndex++

        if (!board) {
            break
        }

        const {
            hand,
            moves,
            ...rest
        } = getBestMovesForPuzzleBoard({
            board,
            pool,
            minPoints,
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
    }
}
