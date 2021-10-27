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
            dominoIndex: 20, board: [MOCK_BOARD[0]], limit: 2,
        })).toStrictEqual([
            { dominoIndex: 20, pitchSets: [new Set([4, 1, 10])], placement: [[0, 1], [-1, 2]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([1, 10, 4])], placement: [[1, -2], [1, -1]], points: 3 },
        ])
    })

    it('returns array of single valid move with different limit', () => {
        expect(getValidMoves({
            dominoIndex: 20, board: [MOCK_BOARD[0]], limit: 3,
        })).toStrictEqual([
            { dominoIndex: 20, pitchSets: [new Set([4, 1, 10])], placement: [[0, 1], [-1, 2]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([1, 10, 4])], placement: [[1, -2], [1, -1]], points: 3 }, { dominoIndex: 20, pitchSets: [new Set([4, 1, 10])], placement: [[1, 1], [1, 2]], points: 3 },
        ])
    })

    it('returns array of multiple valid moves', () => {
        expect(getValidMoves({
            dominoIndex: 20, board: MOCK_BOARD, limit: 2,
        })).toStrictEqual([
            { dominoIndex: 20, pitchSets: [new Set([9, 1, 6]), new Set([7, 5, 1, 10]), new Set([4, 9, 1, 5]), new Set([11, 2, 6, 10])], placement: [[-1, 2], [-1, 3]], points: 15 }, { dominoIndex: 20, pitchSets: [new Set([0, 5, 9, 1]), new Set([3, 7, 0, 10])], placement: [[-3, 3], [-3, 2]], points: 8 },
        ])
    })
})

describe('getBestMovesForTurn', () => {
    it('returns null for empty hand', () => {
        expect(getBestMovesForTurn({
            hand: new Set([]),
            board: [{ dominoIndex: 2, placement: [[-1, 1], [0, 0]] }],
        })).toBeNull()
    })

    it('returns empty when no dominoes can be played', () => {
        expect(getBestMovesForTurn({
            hand: new Set([14, 47, 64]),
            board: [{ dominoIndex: 2, placement: [[-1, 1], [0, 0]] }],
        })).toStrictEqual({ moves: [], points: 0 })
    })

    it('returns best moves when some dominoes can be played', () => {
        expect(getBestMovesForTurn({
            hand: new Set([1, 2, 10]),
            board: MOCK_BOARD,
            limit: 3,
        })).toStrictEqual({
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
            points: 11,
        })
    })

    it('returns best moves when all dominoes can be played', () => {
        expect(getBestMovesForTurn({
            hand: new Set([18, 20, 38]),
            board: MOCK_BOARD,
            limit: 3,
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
