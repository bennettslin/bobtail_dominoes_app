import { getArrayOfIndices } from '../../../../general'
import { exchangeDominoIndices, getRandomDominoIndex } from '../pool'

export const getInitialHands = ({
    playersCount,
    handCount,
    pool,
}) => (
    getArrayOfIndices(playersCount).map(() => ((
        new Set(getArrayOfIndices(handCount).map(() => (
            getRandomDominoIndex(pool)
        )))
    )))
)

export const playHand = ({
    hand,
    handCount,
    moves,
    pool,
}) => {
    moves.forEach(({ dominoIndex }) => {
        hand.delete(dominoIndex)
    })

    // Refill hand.
    while (hand.size < handCount && pool.size) {
        hand.add(getRandomDominoIndex(pool))
    }

    return hand
}

export const exchangeHand = ({
    hand,
    discardedIndices,
    pool,
}) => {
    const newIndices = exchangeDominoIndices({
        discardedIndices,
        pool,
    })

    if (!newIndices) {
        return null
    }

    discardedIndices.forEach(dominoIndex => {
        hand.delete(dominoIndex)
    })

    newIndices.forEach(newIndex => {
        hand.add(newIndex)
    })

    return hand
}
