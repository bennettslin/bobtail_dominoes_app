import { getAllPossiblePlacements, getAllValidPlacements, getPointsForPlacement } from '.'

/**
 *      -4  -3  -2  -1   0   1   2
 *
 *  2  Bb- Ab          F
 *                    /
 *  1        C - F#  A   D
 *                        \
 *  0          G   C - E   B
 *              \
 * -1            Eb
 */
const MOCK_BOARD = [
    { dominoIndex: 4, placement: [[0, 0], [1, 0]] }, // C-E.
    { dominoIndex: 49, placement: [[0, 2], [0, 1]] }, // F-A.
    { dominoIndex: 34, placement: [[0, -1], [-1, 0]] }, // Eb-G.
    { dominoIndex: 6, placement: [[-2, 1], [-1, 1]] }, // C-F#.
    { dominoIndex: 30, placement: [[1, 1], [2, 0]] }, // D-B.
    { dominoIndex: 18, placement: [[-4, 2], [-3, 2]] }, // Db-Ab.
]

describe('getAllPossiblePlacements', () => {
    it('returns null for empty board', () => {
        expect(getAllPossiblePlacements({
            dominoIndex: 0, board: [],
        })).toBeNull()
    })

    it('returns array of placements for board with single domino', () => {
        expect(getAllPossiblePlacements({
            dominoIndex: 0, board: [],
        })).toStrictEqual([
            [[0, 0], [1, 0]],
        ])
    })

    it('returns array of placements for board with many dominoes', () => {
        expect(getAllPossiblePlacements({
            dominoIndex: 0, board: MOCK_BOARD,
        })).toStrictEqual([
            [[0, 0], [1, 0]],
        ])
    })
})

describe('getAllValidPlacements', () => {
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
