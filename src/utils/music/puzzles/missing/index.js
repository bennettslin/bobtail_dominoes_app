import { getRandomInteger } from '../../../general/random'
import { getInitialBoardForPuzzle } from '../general'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

export const getMissingPuzzle = () => {
    return getInitialBoardForPuzzle({
        dominoesCount: getRandomInteger(4, 7),
        moveRank: getRandomInteger(0, 5),
        puzzleType: MISSING_PUZZLE_TYPE,
    })
}
