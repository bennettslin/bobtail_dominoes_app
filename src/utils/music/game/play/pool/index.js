import { DOMINOES_COUNT } from '../../../../../constants/music/game'
import { getArrayOfIndices, getRandomInteger } from '../../../../general'

export const generatePool = () => (
    new Set(getArrayOfIndices(DOMINOES_COUNT - 1, 1))
)

export const getRandomDomino = pool => {
    if (!pool.size) {
        return null
    }

    const
        poolIndex = getRandomInteger(0, pool.size),
        dominoIndex = Array.from(pool)[poolIndex]

    pool.delete(dominoIndex)
    return { dominoIndex, pool }
}

export const exchangeDominoes = ({ dominoIndices, pool }) => {
    if (
        // Pool cannot already have domino indices.
        dominoIndices.some(dominoIndex => (
            pool.has(dominoIndex)
        )) ||

        // Pool cannot exchange more dominoes than it has.
        dominoIndices.length > pool.size
    ) {
        return null
    }

    // Draw new dominoes first.
    const newDominoes = dominoIndices.map(() => (
        getRandomDomino(pool).dominoIndex
    ))

    // Then put back dominoes from hand.
    dominoIndices.forEach(dominoIndex => {
        pool.add(dominoIndex)
    })

    return { dominoIndices: newDominoes, pool }
}
