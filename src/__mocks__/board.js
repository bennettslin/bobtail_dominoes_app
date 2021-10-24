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
export const MOCK_BOARD = [
    { dominoIndex: 4, placement: [[0, 0], [1, 0]] }, // C-E.
    { dominoIndex: 54, placement: [[0, 2], [0, 1]] }, // F#-A.
    { dominoIndex: 34, placement: [[0, -1], [-1, 0]] }, // Eb-G.
    { dominoIndex: 5, placement: [[-2, 1], [-1, 1]] }, // C-F.
    { dominoIndex: 30, placement: [[1, 1], [2, 0]] }, // D-B.
    { dominoIndex: 49, placement: [[-2, 3], [-2, 2]] }, // F-A.
]
