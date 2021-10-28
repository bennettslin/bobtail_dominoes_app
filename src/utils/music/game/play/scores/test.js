import { addToScores, getInitialScores } from '.'

describe('getInitialScores', () => {
    it('generates scores for one hand', () => {
        expect(getInitialScores(1)).toStrictEqual([0])
    })

    it('generates scores for four hands', () => {
        expect(getInitialScores(4)).toStrictEqual([0, 0, 0, 0])
    })
})

describe('addToScores', () => {
    it('adds score for game with one hand', () => {
        expect(addToScores({
            handCount: 3,
            moves: [
                { pitchSets: [new Set([0, 3, 7]), new Set([2, 4, 7, 11])] },
                { pitchSets: [new Set([7, 10, 2])] },
            ],
            scores: [17],
        })).toStrictEqual([27])
    })

    it('adds score for game with multiple hands', () => {
        expect(addToScores({
            playerIndex: 2,
            handCount: 3,
            moves: [
                { pitchSets: [new Set([0, 3, 7]), new Set([2, 4, 7, 11])] },
                { pitchSets: [new Set([7, 10, 2])] },
                { pitchSets: [new Set([10, 2, 5, 9])] },
            ],
            scores: [5, 3, 0],
        })).toStrictEqual([5, 3, 16])
    })
})
