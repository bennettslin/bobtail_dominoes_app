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
    {
        dominoIndex: 4,
        placement: [[0, 0], [1, 0]],
    }, // C-E.
    {
        dominoIndex: 54,
        handIndex: 0,
        placement: [[0, 2], [0, 1]],
        pitchSets: [new Set([0, 9, 6])],
        points: 3,
    }, // F#-A.
    {
        dominoIndex: 34,
        handIndex: 1,
        placement: [[0, -1], [-1, 0]],
        pitchSets: [
            new Set([3, 0, 9, 6]),
            new Set([7, 0, 4]),
        ],
        points: 7,
    }, // Eb-G.
    {
        dominoIndex: 5,
        handIndex: 1,
        placement: [[-2, 1], [-1, 1]],
        pitchSets: [
            new Set([0, 5, 9]),
            new Set([3, 7, 0]),
        ],
        points: 6,
    }, // C-F.
    {
        dominoIndex: 30,
        handIndex: 2,
        placement: [[1, 1], [2, 0]],
        pitchSets: [
            new Set([0, 5, 9, 2]),
            new Set([11, 2, 6]),
            new Set([7, 0, 4, 11]),
        ],
        points: 11,
    }, // D-B.
    {
        dominoIndex: 49,
        handIndex: 2,
        placement: [[-2, 3], [-2, 2]],
        pitchSets: [
            new Set([0, 9, 5]),
            new Set([0, 5, 9]),
        ],
        points: 6,
    }, // F-A.
]
