import { getAllPhysicalPlacements, getAllValidPlacements, getSurroundingCoordinates } from '.'
import { MOCK_BOARD } from '../board/test'

describe('getSurroundingCoordinates', () => {
    it('returns empty array for empty board', () => {
        expect(getSurroundingCoordinates([])).toStrictEqual([])
    })

    it('returns array of coordinates for board with single domino', () => {
        expect(getSurroundingCoordinates([MOCK_BOARD[0]])).toStrictEqual([
            [0, 1], [0, -1], [1, 1], [1, -1], [2, 0], [2, -1], [-1, 0], [-1, 1],
        ])
    })

    it('returns array of coordinates for board with many dominoes', () => {
        expect(getSurroundingCoordinates(MOCK_BOARD)).toStrictEqual([
            [0, 3], [0, -2], [1, 2], [1, -1], [1, -2], [2, 1], [2, -1], [3, 0], [3, -1], [-1, 2], [-1, 3], [-1, -1], [-2, 0], [-2, 4], [-3, 1], [-3, 2], [-3, 3], [-3, 4],
        ])
    })
})

describe.skip('getAllPhysicalPlacements', () => {
    it('returns null for empty board', () => {
        expect(getAllPhysicalPlacements([])).toBeNull()
    })

    it('returns array of placements for board with single domino', () => {
        expect(getAllPhysicalPlacements([MOCK_BOARD[0]])).toStrictEqual([
            [[0, 0], [1, 0]],
        ])
    })

    it('returns array of placements for board with many dominoes', () => {
        expect(getAllPhysicalPlacements(MOCK_BOARD)).toStrictEqual([
            [[0, 0], [1, 0]],
        ])
    })
})

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
