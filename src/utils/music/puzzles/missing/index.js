import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMissingMoveForPuzzleBoard } from '../general/missing'
import { getRandomInteger } from '../../../general/random'
import { logTrialForPuzzleWithMissingMoves } from '../log'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 10
// const TRIALS_COUNT = 1000

export const getMissingPuzzle = ({
    // minPoints = getRandomInteger(10, 15),
    minPoints = getRandomInteger(1, 4),

} = {}) => {
    let trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle({ rankRange: [0, 0] })

        trialIndex++

        if (!board) {
            break
        }

        const {
            board: boardWithMissingMoves,
            missingMoves,
        } = getBestMissingMoveForPuzzleBoard({
            board,
            pool,
            minPoints,
        })

        logTrialForPuzzleWithMissingMoves({ trialIndex, missingMoves })

        if (missingMoves) {
            return {
                board: boardWithMissingMoves,
                missingMoves,
                puzzleType: MISSING_PUZZLE_TYPE,
            }
        }
    }
}
