import { getRowsForPlacement } from '.'

/**
 *        -3  -2  -1   0   1   2
 *
 *  3        F
 *          |
 *  2      A       F#
 *                |
 *  1    C - F   A   D
 *                    \
 *  0      G   C - E   B
 *          \
 * -1        Eb
 */
const MOCK_BOARD = [
    { dominoIndex: 4, placement: [[0, 0], [1, 0]] }, // C-E.
    { dominoIndex: 54, placement: [[0, 2], [0, 1]] }, // F#-A.
    { dominoIndex: 34, placement: [[0, -1], [-1, 0]] }, // Eb-G.
    { dominoIndex: 5, placement: [[-2, 1], [-1, 1]] }, // C-F.
    { dominoIndex: 30, placement: [[1, 1], [2, 0]] }, // D-B.
    { dominoIndex: 49, placement: [[-2, 3], [-2, 2]] }, // F-A.
]

const getProps = (dominoIndex, placement, board = MOCK_BOARD) => ({
    dominoIndex, placement, board,
})

describe('getRowsForPlacement', () => {
    it('returns null for conflicting placement', () => {
        expect(getRowsForPlacement(
            getProps(20, [[0, 0], [-1, 1]]),
        )).toBeNull()
    })

    it('returns array of single row for isolated placement', () => {
        expect(getRowsForPlacement(
            getProps(20, [[50, 0], [51, 0]]),
        )).toStrictEqual([[1, 10]])
    })

    it('returns array of single row when first domino', () => {
        expect(getRowsForPlacement(
            getProps(20, [[0, 0], [1, 0]], []),
        )).toStrictEqual([[1, 10]])
    })

    it('returns array of only dyads', () => {
        expect(getRowsForPlacement(
            getProps(20, [[-1, 1], [0, 1]], [MOCK_BOARD[0]]),
        )).toStrictEqual([
            [1, 10],
            [0, 1],
            [0, 10],
            [4, 10],
        ])
    })

    it('returns array of single row when placed alongside others', () => {
        expect(getRowsForPlacement(
            getProps(20, [[-3, 4], [-4, 5]]),
        )).toStrictEqual([[5, 1, 10]])
    })

    it('returns array of many rows when placed alongside others', () => {
        expect(getRowsForPlacement(
            getProps(20, [[2, -1], [3, -1]]),
        )).toStrictEqual([
            [1, 10],
            [1, 11],
            [1, 4, 9],
            [10, 11, 2, 6],
        ])
    })

    it('returns array of many rows when placed in between others', () => {
        expect(getRowsForPlacement(
            getProps(20, [[-1, 2], [-1, 3]]),
        )).toStrictEqual([
            [9, 1, 6],
            [7, 5, 1, 10],
            [4, 9, 1, 5],
            [5, 10],
            [11, 2, 6, 10],
        ])
    })

    it('returns array with duplicates', () => {
        expect(getRowsForPlacement(
            getProps(45, [[2, -1], [3, -1]]),
        )).toStrictEqual([
            [4, 11],
            [4, 11],
            [4, 4, 9],
            [11, 11, 2, 6],
        ])
    })

    it('returns array with long sonorities', () => {
        expect(getRowsForPlacement(
            getProps(20, [[2, 1], [3, 0]]),
        )).toStrictEqual([
            [0, 5, 9, 2, 1],
            [11, 1],
            [10, 1],
            [7, 0, 4, 11, 10],
        ])
    })
})
