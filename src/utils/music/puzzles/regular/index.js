import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMovesForPuzzleBoard } from '../general/move'
import { logTrial } from '../log'
import { HAND_COUNT } from '../../../../constants/music/play'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 1000

export const getRegularPuzzle = ({
    handCount = HAND_COUNT,
    minPoints = getRandomInteger(10, 15),

} = {}) => {
    let returnConfig,
        trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (!returnConfig && trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        if (board) {
            const {
                hand,
                moves,
                yieldPoints,
                ...rest
            } = getBestMovesForPuzzleBoard({
                board,
                pool,
                handCount,
                minPoints,
            })

            logTrial({ trialIndex, yieldPoints, ...rest })

            if (moves) {
                returnConfig = {
                    board,
                    moves,
                    hand,
                    yieldPoints,
                    puzzleType: REGULAR_PUZZLE_TYPE,
                }
            }
        }

        trialIndex++
    }

    return returnConfig || null
}
