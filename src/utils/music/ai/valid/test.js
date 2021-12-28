import { getValidPointedMoves } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('getValidPointedMoves', () => {
    it('returns array for first domino', () => {
        expect(getValidPointedMoves({
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
        expect(getValidPointedMoves({
            dominoIndex: 13, board: [MOCK_BOARD[0]],
        })).toStrictEqual([])
    })

    it('returns array of single valid move', () => {
        expect(getValidPointedMoves({
            dominoIndex: 20, board: [MOCK_BOARD[0]], limit: 3,
        })).toStrictEqual([
            {
                dominoIndex: 20,
                pitchSets: [new Set([4, 1, 10])],
                placement: [[0, 1], [-1, 2]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([1, 10, 4])],
                placement: [[1, -2], [1, -1]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([4, 1, 10])],
                placement: [[1, 1], [1, 2]],
                points: 3,
            },
        ])
    })

    it('returns array of single valid move with custom limit', () => {
        expect(getValidPointedMoves({
            dominoIndex: 20, board: [MOCK_BOARD[0]], limit: 2,
        })).toStrictEqual([
            {
                dominoIndex: 20,
                pitchSets: [new Set([4, 1, 10])],
                placement: [[0, 1], [-1, 2]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([1, 10, 4])],
                placement: [[1, -2], [1, -1]],
                points: 3,
            },
        ])
    })

    it('returns array of multiple valid moves with custom limit', () => {
        expect(getValidPointedMoves({
            dominoIndex: 20, board: MOCK_BOARD, limit: 2,
        })).toStrictEqual([
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
                dominoIndex: 20,
                pitchSets: [
                    new Set([0, 5, 9, 1]),
                    new Set([3, 7, 0, 10]),
                ],
                placement: [[-3, 3], [-3, 2]],
                points: 8,
            },
        ])
    })
})
