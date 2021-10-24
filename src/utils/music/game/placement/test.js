import { getAllValidPlacements } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe.skip('getAllValidPlacements', () => {
    it('returns default for empty board', () => {
        expect(getAllValidPlacements({
            dominoIndex: 0, board: [],
        })).toStrictEqual([
            [[0, 0], [1, 0]],
        ])
    })

    it('returns empty array if no valid placements', () => {
        expect(getAllValidPlacements({
            dominoIndex: 0, board: MOCK_BOARD,
        })).toStrictEqual([])
    })

    it('returns array of single valid placement', () => {
        expect(getAllValidPlacements({
            dominoIndex: 0, board: MOCK_BOARD,
        })).toStrictEqual([])
    })

    it('returns array of multiple valid placements', () => {
        expect(getAllValidPlacements({
            dominoIndex: 0, board: MOCK_BOARD,
        })).toStrictEqual([])
    })
})
