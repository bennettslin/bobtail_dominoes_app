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
    let validBoard,
        validMoves,
        validHand,
        trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (!validBoard && !validMoves && trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        if (board) {
            const {
                hand,
                moves,
                ...rest
            } = getBestMovesForPuzzleBoard({
                board,
                pool,
                handCount,
                minPoints,
            })

            logTrial({ trialIndex, ...rest })

            if (moves) {
                validBoard = board
                validMoves = moves
                validHand = hand
            }
        }

        trialIndex++
    }

    return validMoves ? {
        board: validBoard,
        moves: validMoves,
        hand: validHand,
        puzzleType: REGULAR_PUZZLE_TYPE,
    } : {}
}
