import { getRandomInteger } from '../../../general/random'
import { getBestMoveForBoard, getInitialBoardForPuzzle } from '../general'

const sortTrialsByHighestPoints = (
    { move: { points: firstPoints } },
    { move: { points: secondPoints } },
) => secondPoints - firstPoints

export const getMaximumPuzzle = ({
    dominoesCount = getRandomInteger(4, 7),
    moveRank = getRandomInteger(0, 5),
    minPoints = 10,
    trialsCount = 100,

} = {}) => {
    const trials = []

    while (trialsCount) {
        const {
            board,
            pool,
        } = getInitialBoardForPuzzle({
            dominoesCount,
            moveRank,
        })

        if (board) {
            const { move } = getBestMoveForBoard({
                board,
                pool,
                minPoints,
                needsUniqueHighest: true,
            })

            if (move) {
                trials.push({
                    board,
                    move,
                })
            }
            trialsCount--
        }
    }

    trials.sort(sortTrialsByHighestPoints)

    return trials.length ? {
        moves: [trials[0].move],
        board: trials[0].board,
    } : {}
}
