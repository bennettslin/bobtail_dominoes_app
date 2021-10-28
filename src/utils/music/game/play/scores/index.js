import { getArrayOfIndices } from '../../../../general'

export const generateScores = handsCount => (
    getArrayOfIndices(handsCount).map(() => 0)
)

export const addToScore = ({ handIndex, points, scores }) => {
    scores[handIndex] += points
    return scores
}
