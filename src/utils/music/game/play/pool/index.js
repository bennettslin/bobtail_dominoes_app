import { DOMINOES_COUNT, DOMINOES_PITCHES } from '../../../../../constants/music/game'
import { getArrayOfIndices, getRandomInteger } from '../../../../general'

export const getInitialStandardPool = () => (
    new Set(
        DOMINOES_PITCHES.map((pitches, pitchIndex) => ({
            pitches,
            pitchIndex,
        }))
            .filter(({ pitches }) => {
                if (!pitches) {
                    return null
                }

                const
                    [firstPitch, secondPitch] = pitches,
                    interval = secondPitch - firstPitch

                return interval !== 1 && interval !== 6 && interval !== 11
            })
            .map(({ pitchIndex }) => pitchIndex),
    )
)

export const getInitialExtendedPool = () => (
    new Set(getArrayOfIndices(DOMINOES_COUNT - 1, 1))
)

export const getRandomDominoIndex = pool => {
    if (!pool.size) {
        return 0
    }

    const
        poolIndex = getRandomInteger(0, pool.size),
        dominoIndex = Array.from(pool)[poolIndex]

    pool.delete(dominoIndex)
    return dominoIndex
}

export const exchangeDominoIndices = ({ discardedIndices, pool }) => {
    if (
        // Pool cannot already have domino indices.
        discardedIndices.some(dominoIndex => (
            pool.has(dominoIndex)
        )) ||

        // Pool cannot exchange more dominoes than it has.
        discardedIndices.length > pool.size
    ) {
        return null
    }

    // Draw new dominoes first.
    const exchangedIndices = discardedIndices.map(() => (
        getRandomDominoIndex(pool)
    ))

    // Then put back dominoes from hand.
    discardedIndices.forEach(dominoIndex => {
        pool.add(dominoIndex)
    })

    return exchangedIndices
}
