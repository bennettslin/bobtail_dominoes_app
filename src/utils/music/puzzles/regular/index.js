import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMovesForPuzzleBoard } from '../general/moves'
import { logTrial } from '../log'
import { HAND_COUNT } from '../../../../constants/music/play'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 10
// const TRIALS_COUNT = 1000

export const getRegularPuzzle = ({
    handCount = HAND_COUNT,
    minPoints = getRandomInteger(10, 15),

} = {}) => {
    let trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (trialIndex < TRIALS_COUNT) {
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
                return {
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
}
