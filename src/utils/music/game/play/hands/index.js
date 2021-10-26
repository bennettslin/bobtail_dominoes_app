import { HAND_COUNT } from '../../../../../constants/music/play'
import { getArrayOfIndices } from '../../../../general'
import { exchangeDominoIndices, getRandomDominoIndex } from '../pool'

export const generateHands = ({
    handsCount,
    handCount = HAND_COUNT,
    pool,
}) => (
    getArrayOfIndices(handsCount).map(() => ((
        new Set(getArrayOfIndices(handCount).map(() => (
            getRandomDominoIndex(pool)
        )))
    )))
)

export const fillHand = ({
    hand,
    handCount = HAND_COUNT,
    pool,
}) => {
    while (hand.size < handCount && pool.size) {
        hand.add(getRandomDominoIndex(pool))
    }
    return hand
}

export const exchangeHand = ({
    exchangedIndices,
    hand,
    pool,
}) => {
    const newIndices = exchangeDominoIndices({
        dominoIndices: exchangedIndices,
        pool,
    })

    if (!newIndices) {
        return null
    }

    exchangedIndices.forEach(dominoIndex => {
        hand.delete(dominoIndex)
    })

    newIndices.forEach(newIndex => {
        hand.add(newIndex)
    })

    return hand
}
