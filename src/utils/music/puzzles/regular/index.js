import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general'
import { REGULAR_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

export const getRegularPuzzle = () => {
    return getInitialBoardForPuzzle({
        dominoesCount: getRandomInteger(4, 7),
        moveRank: getRandomInteger(0, 5),
        puzzleType: REGULAR_PUZZLE_TYPE,
    })
}
