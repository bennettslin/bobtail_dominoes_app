import { getBestPointedMovesForTurn } from '.'
import { MOCK_BOARD } from '../../../__mocks__/board'

describe('getBestPointedMovesForTurn', () => {
    it('returns empty for empty hand', () => {
        expect(getBestPointedMovesForTurn({
            hand: new Set(),
            board: [{ dominoIndex: 2, placement: [[-1, 1], [0, 0]] }],
        })).toStrictEqual({ moves: [] })
    })

    it('returns empty when no dominoes can be played', () => {
        expect(getBestPointedMovesForTurn({
            hand: new Set([14, 47, 64]),
            board: [{ dominoIndex: 2, placement: [[-1, 1], [0, 0]] }],
        })).toStrictEqual({
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            moves: [],
            yieldPoints: 0,
        })
    })

    it('returns best moves when some dominoes can be played', () => {
        expect(getBestPointedMovesForTurn({
            hand: new Set([1, 2, 10]),
            board: MOCK_BOARD,
        })).toStrictEqual({
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            moves: [
                {
                    dominoIndex: 1,
                    pitchSets: [new Set([0, 9, 5, 1])],
                    placement: [[-3, 4], [-2, 4]],
                    points: 4,
                },
                {
                    dominoIndex: 10,
                    pitchSets: [
                        new Set([0, 4, 9]),
                        new Set([10, 11, 2, 6]),
                    ],
                    placement: [[2, -1], [3, -1]],
                    points: 7,
                },
            ],
            yieldPoints: 11,
        })
    })

    it('returns best moves when all dominoes can be played', () => {
        expect(getBestPointedMovesForTurn({
            hand: new Set([18, 20, 38]),
            board: MOCK_BOARD,
        })).toStrictEqual({
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            moves: [
                {
                    dominoIndex: 18,
                    pitchSets: [
                        new Set([8, 1, 5]),
                        new Set([0, 5, 9, 1]),
                    ],
                    placement: [[-3, 3], [-4, 3]],
                    points: 7,
                },
                {
                    dominoIndex: 20,
                    pitchSets: [
                        new Set([9, 1, 6]),
                        new Set([7, 5, 1, 10]),
                        new Set([4, 9, 1, 5]),
                        new Set([8, 1, 5, 10]),
                        new Set([11, 2, 6, 10]),
                    ],
                    placement: [[-1, 2], [-1, 3]],
                    points: 19,
                },
                {
                    dominoIndex: 38,
                    pitchSets: [new Set([11, 3, 7, 0])],
                    placement: [[1, -3], [1, -2]],
                    points: 4,
                },
            ],
            yieldPoints: 30,
        })
    })

    it('returns worse moves when specified', () => {
        expect(getBestPointedMovesForTurn({
            hand: new Set([18, 20, 38]),
            board: MOCK_BOARD,
            rankRange: [10, 10],
        })).toStrictEqual({
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            moves: [
                {
                    dominoIndex: 20,
                    pitchSets: [
                        new Set([9, 1, 6]),
                        new Set([7, 5, 1, 10]),
                        new Set([4, 9, 1, 5]),
                        new Set([11, 2, 6, 10]),
                    ],
                    placement: [[-1, 2], [-1, 3]],
                    points: 15,
                },
                {
                    dominoIndex: 18,
                    pitchSets: [
                        new Set([8, 1, 5, 10]),
                        new Set([0, 5, 9, 1]),
                    ],
                    placement: [[-3, 3], [-4, 3]],
                    points: 8,
                },
                {
                    dominoIndex: 38,
                    pitchSets: [new Set([3, 11, 8])],
                    placement: [[-4, 1], [-4, 2]],
                    points: 3,
                },
            ],
            yieldPoints: 26,
        })
    })
})
