import { HAND_DOMINOES_COUNT } from '../../../../../constants/music/play'
import { getArrayOfIndices } from '../../../../general'
import { getRandomDomino } from '../pool'

export const generateHands = ({
    handsCount,
    dominoesCount = HAND_DOMINOES_COUNT,
    pool,
}) => (
    getArrayOfIndices(handsCount).map(() => ((
        getArrayOfIndices(dominoesCount).map(() => (
            getRandomDomino(pool).dominoIndex
        ))
    )))
)

// export const drawNewHand = ({
//     handIndex,
//     hands,
//     pool,
// }) =>

// * Hands
// * Util to draw into hand
// * Util to play hand
// * Util to exchange hand
