import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general/board'
import { getBestMoveForPuzzleBoard } from '../general/move'
import { logTrial } from '../log'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 1000

export const getMissingPuzzle = ({
    minPoints = getRandomInteger(10, 15),

} = {}) => {
    let validBoard,
        validMove,
        trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (!validBoard && !validMove && trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle()

        if (board) {
            const { move, ...rest } = getBestMoveForPuzzleBoard({
                board,
                pool,
                minPoints,
                needsUniqueHighest: true,
            })

            logTrial({ trialIndex, ...rest })

            if (move) {
                validBoard = board
                validMove = move
            }
        }

        trialIndex++
    }

    return validMove ? {
        board: validBoard,
        moves: [validMove],
        puzzleType: MISSING_PUZZLE_TYPE,
    } : {}
}
