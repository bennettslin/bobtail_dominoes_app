import { getBestMovesForTurn, getValidMoves } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('getValidMoves', () => {
    it('returns array for first domino', () => {
        expect(getValidMoves({
            dominoIndex: 20,
        })).toStrictEqual([
            { dominoIndex: 20, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 20, placement: [[0, 0], [1, -1]] },
        ])
    })

    it('returns empty array if no valid moves', () => {
        expect(getValidMoves({
            dominoIndex: 13, board: [MOCK_BOARD[0]],
        })).toStrictEqual([])
    })

    it('returns array of single valid move', () => {
        expect(getValidMoves({
            dominoIndex: 20, board: [MOCK_BOARD[0]],
        })).toStrictEqual([
            { dominoIndex: 20, pitchSets: [new Set([4, 1, 10])], placement: [[0, 1], [-1, 2]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([1, 10, 4])], placement: [[1, -2], [1, -1]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([4, 1, 10])], placement: [[1, 1], [1, 2]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([1, 10, 4])], placement: [[3, -2], [2, -1]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([4, 10, 1])], placement: [[-1, 2], [0, 1]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([10, 1, 4])], placement: [[1, -1], [1, -2]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([4, 10, 1])], placement: [[1, 2], [1, 1]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([10, 1, 4])], placement: [[2, -1], [3, -2]], points: 3 },
        ])
    })

    it('returns array of multiple valid moves', () => {
        expect(getValidMoves({
            dominoIndex: 20, board: MOCK_BOARD,
        })).toStrictEqual([
            { dominoIndex: 20, pitchSets: [new Set([9, 1, 6]), new Set([7, 5, 1, 10]), new Set([4, 9, 1, 5]), new Set([11, 2, 6, 10])], placement: [[-1, 2], [-1, 3]], points: 15 }, { dominoIndex: 20, pitchSets: [new Set([0, 5, 9, 1]), new Set([3, 7, 0, 10])], placement: [[-3, 3], [-3, 2]], points: 8 }, { dominoIndex: 20, pitchSets: [new Set([1, 4, 9]), new Set([10, 11, 2, 6])], placement: [[2, -1], [3, -1]], points: 7 }, { dominoIndex: 20, pitchSets: [new Set([10, 1, 5]), new Set([0, 5, 9, 1])], placement: [[-3, 3], [-4, 3]], points: 7 }, { dominoIndex: 20, pitchSets: [new Set([1, 10, 7, 5])], placement: [[-1, -2], [-1, -1]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([10, 3, 7, 0])], placement: [[1, -3], [1, -2]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([10, 11, 2, 6])], placement: [[3, -2], [3, -1]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([0, 9, 5, 1])], placement: [[-2, 4], [-1, 4]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([0, 9, 5, 1])], placement: [[-2, 4], [-3, 5]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([0, 5, 9, 1])], placement: [[-3, 3], [-3, 4]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([11, 2, 6, 10])], placement: [[-1, 4], [-1, 3]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([10, 1, 7, 5])], placement: [[-1, -1], [-1, -2]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([10, 3, 7, 0])], placement: [[2, -2], [1, -2]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([10, 11, 2, 6])], placement: [[4, -1], [3, -1]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([0, 9, 5, 1])], placement: [[-2, 4], [-3, 4]], points: 4 }, { dominoIndex: 20, pitchSets: [new Set([5, 1, 10])], placement: [[-3, 4], [-4, 5]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([5, 10, 1])], placement: [[-4, 5], [-3, 4]], points: 3 },
        ])
    })
})

describe('getBestMovesForTurn', () => {
    it('returns best moves for hand', () => {
        expect(getBestMovesForTurn({
            hand: new Set([18, 20, 38]),
            board: MOCK_BOARD,
        })).toStrictEqual({
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
                }],
            points: 30,
        })
    })
})
