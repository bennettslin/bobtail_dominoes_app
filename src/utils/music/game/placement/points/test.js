import { getPointsForPlacement } from '.'

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

describe('getPointsForPlacement', () => {
    test.each([
        // Conflicting placement.
        [getProps(20, [[0, 0], [-1, 1]]), -1],
        // Isolated placement.
        [getProps(20, [[50, 0], [51, 0]]), -1],
        // Duplicates.
        [getProps(45, [[2, -1], [3, -1]]), -1],
        // Invalid sonorities.
        [getProps(20, [[-1, 3], [-1, 2]]), -1],
        // Long (and also invalid) sonorities.
        [getProps(20, [[2, 1], [3, 0]]), -1],
        // Only dyads.
        [getProps(20, [[-1, 1], [0, 1]], [MOCK_BOARD[0]]), -1],
        // First domino.
        [getProps(20, [[0, 0], [1, 0]], []), 0],
        // Single chord.
        [getProps(20, [[-3, 4], [-4, 5]]), 3],
        // Two chords.
        [getProps(20, [[2, -1], [3, -1]]), 7],
        // Many chords.
        [getProps(20, [[-1, 2], [-1, 3]]), 15],
    ])('%p returns %p', (props, result) => {
        expect(getPointsForPlacement(props)).toBe(result)
    })
})
