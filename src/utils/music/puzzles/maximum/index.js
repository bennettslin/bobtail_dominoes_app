import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general'

export const getMaximumPuzzle = () => {
    return getInitialBoardForPuzzle({
        dominoesCount: getRandomInteger(4, 7),
        moveRank: getRandomInteger(0, 5),
    })
}
