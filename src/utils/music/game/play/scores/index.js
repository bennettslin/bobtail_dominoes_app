import { getArrayOfIndices } from '../../../../general'

export const generateScores = handsCount => (
    getArrayOfIndices(handsCount).map(() => 0)
)

export const addToScore = ({ handIndex, scores }) => {
    const points = 5
    scores[handIndex] += points
    return scores
}
