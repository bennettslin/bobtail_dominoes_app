import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 47, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 14, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 27, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 10, placement: [[2, -5], [3, -5]] },
        ],
        handList: [63, 5, 31],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, -4], [-1, -3]],
                pitchLists: [
                    [8, 11, 5],
                    [11, 8, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 5,
                placement: [[-2, -3], [-3, -2]],
                pitchLists: [
                    [0, 11, 8, 4],
                    [8, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 31,
                placement: [[-1, -5], [0, -5]],
                pitchLists: [
                    [3, 8, 11, 5],
                    [4, 8, 0, 5],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 43, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 58, placement: [[1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, 0], [0, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 23, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 51, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 25, placement: [[3, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 18,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [8, 1, 4],
                    [10, 5, 1],
                    [2, 6, 9, 1],
                    [5, 11, 8],
                    [1, 5, 8],
                ],
                points: 16,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 6, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 42, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 54, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 4, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 45, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [36, 8, 15],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [0, 8, 4],
                    [3, 6, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 36,
                placement: [[2, 3], [2, 2]],
                pitchLists: [
                    [0, 8, 4, 3],
                    [0, 6, 9, 3],
                    [0, 9, 6],
                    [0, 9, 4],
                ],
                points: 14,
            },
            {
                dominoIndex: 15,
                placement: [[0, 5], [0, 4]],
                pitchLists: [
                    [8, 5, 1],
                    [0, 9, 4, 5],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 15, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 50, placement: [[2, -1], [1, 0]] },
        ],
        handList: [17, 19, 42],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [10, 5, 1],
                    [10, 1, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[0, 3], [1, 3]],
                pitchLists: [
                    [9, 1, 4],
                    [10, 5, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [3, 10, 1, 7],
                    [5, 1, 9],
                    [7, 9, 1, 4],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 36, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 1, placement: [[-1, 1], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 13, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 43, placement: [[2, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [4, 1, 9],
                    [4, 10, 7],
                    [4, 1, 10],
                ],
                points: 9,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 24, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 17, placement: [[1, -1], [2, -2]] },
        ],
        handList: [19, 28, 20],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 4], [0, 3]],
                pitchLists: [
                    [5, 9, 1],
                    [10, 5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [5, 9, 2],
                    [2, 5, 9, 1],
                    [1, 0, 9, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [5, 9, 2, 1],
                    [8, 2, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 6, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 19, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 35, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 43, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[2, 0], [1, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 26, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 4, placement: [[-1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [7, 1, 4],
                    [4, 1, 7],
                    [7, 1, 10],
                    [10, 7, 0, 4],
                    [2, 7, 10],
                ],
                points: 16,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 61, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 48, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 59, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 50, placement: [[-1, -2], [-2, -1]] },
        ],
        handList: [27, 60, 34],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [11, 7, 4],
                    [7, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [11, 3, 7],
                    [3, 7, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [2, 11, 7, 4],
                    [2, 8, 5, 10],
                    [8, 11, 3, 7],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 21, placement: [[0, -1], [1, -1]] },
        ],
        handList: [48, 66, 25],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [5, 8, 2],
                    [1, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 66,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [5, 8, 2, 10],
                    [1, 6, 10],
                    [5, 2, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 25,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [9, 11, 2, 6],
                    [1, 6, 10, 2],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 58, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 9, placement: [[-1, -1], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[-1, -2], [0, -2]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 27, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [11, 3, 6],
                    [0, 8, 3],
                    [8, 2, 11, 6],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 29, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 32, placement: [[-1, -3], [-2, -2]] },
            { dominoIndex: 55, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 18, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 20, placement: [[-2, -4], [-2, -3]] },
        ],
        handList: [59, 42, 14],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [3, 2, 7, 10],
                    [1, 8, 5, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [8, 4, 10, 1],
                    [10, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [8, 1, 4],
                    [10, 7, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 48, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 16, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 29, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 34, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 66, placement: [[-1, 1], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 58, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 41, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 20, placement: [[-2, 1], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [10, 1, 4, 8],
                    [1, 7, 4],
                    [7, 0, 4],
                    [7, 4, 0, 8],
                ],
                points: 14,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 43, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 15, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 16, placement: [[0, -1], [-1, -1]] },
        ],
        handList: [59, 5, 29],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [0, 5, 9],
                    [1, 9, 4, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [2, 0, 5, 9],
                    [6, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [10, 7, 3, 1],
                    [7, 1, 4, 9],
                    [7, 6, 10, 2],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 43, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 17, placement: [[1, -3], [0, -2]] },
        ],
        handList: [59, 16, 18],
        moves: [
            {
                dominoIndex: 16,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [1, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [4, 1, 8],
                    [6, 10, 1],
                    [1, 4, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [7, 1, 10, 4],
                    [4, 7, 10],
                    [10, 4, 1, 8],
                    [6, 1, 10],
                ],
                points: 14,
            },
        ],
        points: 32,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 17, placement: [[1, 3], [1, 2]] },
            { dominoIndex: 49, placement: [[1, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 1], [1, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 48, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 7, placement: [[0, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [10, 1, 5],
                    [6, 2, 9, 10],
                ],
                points: 10,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 19, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 39, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 6, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 9, placement: [[3, 2], [2, 2]] },
        ],
        handList: [42, 45, 15],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, 3], [0, 4]],
                pitchLists: [
                    [9, 5, 1],
                    [9, 1, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[2, 3], [1, 4]],
                pitchLists: [
                    [0, 6, 9, 4],
                    [0, 4, 8],
                    [9, 5, 1, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[-1, 5], [0, 5]],
                pitchLists: [
                    [9, 1, 5, 4],
                    [0, 4, 8, 11],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 30, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 47, placement: [[3, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, -2], [0, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 46, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 28, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [5, 9, 2, 1],
                    [4, 8, 10, 1],
                    [2, 10, 5, 6],
                ],
                points: 12,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 42, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 3, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 36, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 4, placement: [[0, -2], [1, -3]] },
        ],
        handList: [56, 26, 62],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [6, 3, 11, 7],
                    [9, 4, 0, 6],
                    [8, 3, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[-4, 3], [-5, 3]],
                pitchLists: [
                    [6, 11, 2],
                    [8, 3, 11, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 62,
                placement: [[-4, 4], [-3, 3]],
                pitchLists: [
                    [6, 11, 2, 8],
                    [7, 2, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 12, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [28, 4, 49],
        moves: [
            {
                dominoIndex: 28,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [6, 9, 2],
                    [5, 8, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [9, 1, 6, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [9, 5, 1],
                    [8, 5, 0],
                    [9, 0, 4],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[2, 0], [1, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 20, placement: [[1, -3], [0, -3]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [10, 7, 1],
                    [6, 3, 11, 7],
                    [1, 6, 10],
                ],
                points: 10,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 13, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 55, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -1]] },
        ],
        handList: [54, 37, 65],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [2, 9, 6],
                    [2, 6, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[1, 3], [2, 2]],
                pitchLists: [
                    [6, 10, 3],
                    [2, 6, 9, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 65,
                placement: [[4, -1], [4, 0]],
                pitchLists: [
                    [10, 2, 5, 9],
                    [11, 6, 10, 3],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 60, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 4, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 34, placement: [[2, 1], [3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[2, 0], [3, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 11, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 19, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 4, placement: [[-1, 0], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [0, 8, 5, 3],
                    [0, 8, 3],
                    [4, 11, 8],
                    [8, 5, 1, 9],
                ],
                points: 14,
            },
        ],
    },
}
