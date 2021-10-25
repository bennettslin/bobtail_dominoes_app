import { getValidPlacements } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('getValidPlacements', () => {
    it('returns array for first domino', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: [],
        })).toStrictEqual([
            { dominoIndex: 20, placement: [[-1, 0], [0, 0]], points: 0 },
            { dominoIndex: 20, placement: [[0, 0], [1, 0]], points: 0 },
            { dominoIndex: 20, placement: [[0, 0], [0, 1]], points: 0 },
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]], points: 0 },
            { dominoIndex: 20, placement: [[0, -1], [0, 0]], points: 0 },
            { dominoIndex: 20, placement: [[1, -1], [0, 0]], points: 0 },
        ])
    })

    it('returns empty array if no valid placements', () => {
        expect(getValidPlacements({
            dominoIndex: 13, board: [MOCK_BOARD[0]],
        })).toStrictEqual([])
    })

    it('returns array of single valid placement', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: [MOCK_BOARD[0]],
        })).toStrictEqual([
            { dominoIndex: 20, placement: [[0, 1], [-1, 2]], points: 3 },
            { dominoIndex: 20, placement: [[1, -2], [1, -1]], points: 3 },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]], points: 3 },
            { dominoIndex: 20, placement: [[3, -2], [2, -1]], points: 3 },
        ])
    })

    it('returns array of multiple valid placements', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: MOCK_BOARD,
        })).toStrictEqual([
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]], points: 15 },
            { dominoIndex: 20, placement: [[2, -1], [3, -1]], points: 7 },
            { dominoIndex: 20, placement: [[-1, -2], [-1, -1]], points: 4 },
            { dominoIndex: 20, placement: [[1, -3], [1, -2]], points: 4 },
            { dominoIndex: 20, placement: [[3, -2], [3, -1]], points: 4 },
            { dominoIndex: 20, placement: [[-2, 4], [-1, 4]], points: 4 },
            { dominoIndex: 20, placement: [[-2, 4], [-3, 5]], points: 4 },
            { dominoIndex: 20, placement: [[-3, 3], [-3, 4]], points: 4 },
            { dominoIndex: 20, placement: [[-3, 4], [-4, 5]], points: 3 },
        ])
    })
})
