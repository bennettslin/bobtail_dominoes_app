import { addToScore, generateScores } from '.'

describe('generateScores', () => {
    it('generates scores for one hand', () => {
        expect(generateScores(1)).toStrictEqual([0])
    })

    it('generates scores for four hands', () => {
        expect(generateScores(4)).toStrictEqual([0, 0, 0, 0])
    })
})

describe('addToScore', () => {
    it('adds score to one hand', () => {
        expect(addToScore({
            handIndex: 0,
            points: 5,
            scores: [17],
        })).toStrictEqual([22])
    })

    it('adds score to multiple hands', () => {
        expect(addToScore({
            handIndex: 2,
            points: 12,
            scores: [5, 3, 0],
        })).toStrictEqual([5, 3, 12])
    })
})
