import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

// NOTE: Rank range was [0, 3] for low, [0, 5] for high.
export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 58, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 20, placement: [[2, -3], [2, -2]] },
        ],
        handList: [4, 43, 17],
        moves: [
            {
                dominoIndex: 43,
                placement: [[4, -3], [3, -3]],
                pitchLists: [
                    [1, 9, 4],
                    [9, 10, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[4, -2], [5, -3]],
                pitchLists: [
                    [4, 1, 7],
                    [7, 1, 10],
                    [1, 9, 4, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 4,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [6, 0, 4, 9],
                    [1, 10, 6, 4],
                    [7, 1, 10, 4],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 42, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[-1, 1], [0, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 50, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 16, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 44, placement: [[4, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [7, 2, 10],
                    [10, 2, 5],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 44, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 41, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -2]] },
        ],
        handList: [8, 49, 4],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [0, 8, 3, 5],
                    [4, 10, 7, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [4, 0, 5, 9],
                    [0, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [0, 4, 9],
                    [0, 8, 5, 4],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 6, placement: [[-3, 2], [-4, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 1, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 36, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 4, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 42, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[-2, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 6,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [9, 0, 3],
                    [6, 0, 9],
                    [1, 10, 5, 6],
                    [6, 9, 4, 0],
                ],
                points: 14,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 62, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 43, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 61, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 7, placement: [[3, -3], [2, -3]] },
        ],
        handList: [26, 14, 42],
        moves: [
            {
                dominoIndex: 26,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [11, 5, 2, 7],
                    [7, 4, 10, 2],
                    [2, 1, 5, 9],
                ],
                points: 12,
            },
            {
                dominoIndex: 14,
                placement: [[4, -5], [3, -4]],
                pitchLists: [
                    [1, 4, 7],
                    [4, 0, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [4, 8, 1],
                    [8, 4, 0, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 37, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 19, placement: [[-2, -1], [-3, 0]] },
        ],
        handList: [41, 60, 14],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [1, 9, 4],
                    [3, 10, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 60,
                placement: [[-5, 2], [-4, 2]],
                pitchLists: [
                    [1, 9, 4, 7],
                    [3, 10, 7, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [9, 7, 4, 1],
                    [7, 11, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 8, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 31, placement: [[-1, 0], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [4, 7, 1],
                    [1, 10, 7],
                    [7, 10, 2],
                ],
                points: 9,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 56, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 29, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 7, placement: [[4, -2], [3, -1]] },
        ],
        handList: [18, 31, 37],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [10, 7, 4, 1],
                    [11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 31,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [11, 4, 8, 3],
                    [1, 8, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [6, 11, 3, 10],
                    [10, 1, 8, 4],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 51, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 54, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 32, placement: [[1, -2], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[1, -1], [2, -2]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 36, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 6, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 43, placement: [[-1, 4], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [0, 6, 9],
                    [9, 4, 0],
                    [3, 9, 0],
                    [4, 9, 0],
                    [7, 0, 4],
                ],
                points: 15,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 39, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 8, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 5, placement: [[3, -2], [3, -3]] },
            { dominoIndex: 43, placement: [[4, -5], [3, -4]] },
        ],
        handList: [24, 23, 60],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [2, 5, 8, 0],
                    [5, 4, 9, 0],
                    [4, 9, 0, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 60,
                placement: [[5, -5], [6, -5]],
                pitchLists: [
                    [4, 7, 11],
                ],
                points: 3,
            },
            {
                dominoIndex: 23,
                placement: [[3, -5], [2, -4]],
                pitchLists: [
                    [2, 4, 7, 11],
                    [2, 9, 5, 0],
                    [4, 0, 8, 5],
                ],
                points: 12,
            },
        ],
        points: 29,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 14, placement: [[2, -1], [1, -1]] },
        ],
        handList: [63, 49, 19],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [8, 0, 3, 6],
                    [4, 7, 0, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [5, 8, 11],
                    [0, 9, 5],
                    [9, 8, 4, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 19,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [1, 9, 4],
                    [1, 0, 9, 5],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 59, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[0, -1], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 56, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [0, 11, 3, 7],
                    [9, 6, 3],
                    [6, 2, 11, 7],
                ],
                points: 11,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 5, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 24, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 45, placement: [[1, 2], [0, 2]] },
        ],
        handList: [25, 37, 60],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [2, 6, 9],
                    [9, 6, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [3, 9, 5, 0],
                    [10, 2, 6, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 60,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [10, 3, 11, 7],
                    [11, 9, 6, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 64, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 51, placement: [[0, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 1], [1, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 22, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 54, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 50, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 41, placement: [[-1, -1], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [10, 6, 2, 9],
                    [10, 2, 6, 3],
                    [7, 4, 1, 10],
                    [10, 6, 1],
                ],
                points: 15,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 28, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 59, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 51, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
        ],
        handList: [19, 55, 14],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [10, 6, 3, 1],
                    [7, 4, 0, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 55,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [9, 1, 6],
                    [5, 10, 1],
                    [7, 0, 3, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [10, 6, 1],
                    [9, 1, 6, 4],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 42, placement: [[3, -1], [3, 0]] },
        ],
        handList: [63, 45, 36],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [4, 3, 8, 11],
                    [7, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [0, 8, 4],
                    [8, 11, 4],
                    [2, 8, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 36,
                placement: [[0, 3], [1, 3]],
                pitchLists: [
                    [7, 2, 11, 3],
                    [8, 11, 4, 3],
                    [0, 8, 4, 9],
                ],
                points: 12,
            },
        ],
        points: 30,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 60, placement: [[2, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 0], [0, 1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 42, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 60, placement: [[0, 2], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [10, 5, 2],
                    [2, 11, 7],
                    [5, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 24, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [38, 15, 41],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [11, 3, 8],
                    [6, 11, 3],
                    [3, 8, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 15,
                placement: [[-4, 1], [-5, 2]],
                pitchLists: [
                    [1, 8, 11, 4],
                    [5, 11, 3, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[-4, 4], [-4, 3]],
                pitchLists: [
                    [1, 11, 7, 4],
                    [6, 11, 3, 7],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 16, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 29, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, -1], [0, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 22, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 33, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 59, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 27, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[3, -1], [4, -1]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [3, 6, 10],
                    [3, 11, 7, 2],
                    [11, 6, 2, 10],
                    [11, 3, 7],
                ],
                points: 14,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 48, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 15, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 43, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 49, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 6, placement: [[2, -4], [2, -3]] },
        ],
        handList: [41, 9, 14],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [1, 7, 4],
                    [9, 5, 0, 4],
                    [5, 1, 10, 7],
                    [4, 8, 0, 7],
                ],
                points: 15,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [0, 9, 6],
                    [9, 1, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-2, -2], [-3, -1]],
                pitchLists: [
                    [1, 5, 9],
                    [4, 0, 9, 6],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
}
