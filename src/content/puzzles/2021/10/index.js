import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 14, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 29, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 59, placement: [[-2, 0], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 16, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 10, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 4, placement: [[-2, 4], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [9, 6, 3],
                    [10, 6, 1, 3],
                    [3, 8, 0],
                    [0, 3, 6, 8],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 55, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 18, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 50, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 19, placement: [[4, 1], [3, 1]] },
            { dominoIndex: 6, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 33, placement: [[1, 3], [2, 2]] },
        ],
        handList: [37, 7, 20],
        moves: [
            {
                dominoIndex: 37,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [3, 10, 6],
                    [1, 4, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 7,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [3, 7, 0],
                    [9, 6, 3, 0],
                    [1, 4, 10, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [1, 3, 10, 6],
                    [10, 7, 3],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 1, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [37, 9, 25],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [5, 0, 9],
                ],
                points: 3,
            },
            {
                dominoIndex: 37,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [3, 5, 0, 9],
                    [10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [2, 6, 0, 9],
                    [10, 2, 7, 6],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 4, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 16, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 55, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[2, 0], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [4, 10, 6, 1],
                    [4, 7, 1],
                    [7, 4, 10],
                ],
                points: 10,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 33, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 28, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[3, -1], [2, 0]] },
        ],
        handList: [44, 60, 20],
        moves: [
            {
                dominoIndex: 44,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [10, 4, 1],
                    [10, 2, 6, 11],
                    [10, 6, 2, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [7, 10, 4, 1],
                    [11, 6, 2, 9],
                    [11, 2, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [6, 1, 10],
                    [4, 9, 1],
                ],
                points: 6,
            },
        ],
        points: 30,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, 1], [-1, 2]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 13, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 47, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 54, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 30, placement: [[-1, 0], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [10, 3, 1, 7],
                    [3, 9, 6],
                    [3, 6, 11],
                    [10, 6, 2, 11],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 32, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 45, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 8, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 3, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 49, placement: [[3, 0], [3, -1]] },
        ],
        handList: [63, 15, 10],
        moves: [
            {
                dominoIndex: 63,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [8, 11, 4],
                    [8, 4, 11],
                    [11, 8, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 15,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [1, 8, 4, 11],
                    [5, 11, 8, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 10,
                placement: [[2, -5], [3, -6]],
                pitchLists: [
                    [0, 8, 11, 4],
                    [10, 1, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 17, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 49, placement: [[-4, 1], [-5, 2]] },
        ],
        handList: [14, 29, 60],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [1, 4, 7],
                    [4, 1, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [5, 2, 10],
                    [1, 4, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [4, 11, 7],
                    [7, 3, 10],
                    [11, 7, 2],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 54, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 7, placement: [[-1, 0], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, -2], [0, -1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 37, placement: [[2, 2], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [1, 4, 10],
                    [10, 4, 7],
                    [7, 10, 3],
                ],
                points: 9,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 1, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 29, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 52, placement: [[-3, 1], [-3, 2]] },
        ],
        handList: [48, 20, 59],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-5, 3], [-4, 2]],
                pitchLists: [
                    [6, 10, 1],
                    [10, 7, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [5, 2, 9],
                    [8, 5, 10, 1],
                    [5, 6, 10, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 59,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [7, 9, 4, 1],
                    [5, 2, 9, 10],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 66, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 17, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 10, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 33, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 39, placement: [[0, 0], [-1, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 6, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 34, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 38, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 45, placement: [[2, 3], [3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [9, 0, 3],
                    [0, 8, 3],
                    [2, 8, 11],
                    [3, 8, 0],
                ],
                points: 12,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 26, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 51, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 63, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 60, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 14, placement: [[1, -3], [1, -2]] },
        ],
        handList: [25, 34, 20],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [6, 2, 11, 10],
                    [11, 2, 7, 5],
                    [5, 2, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [3, 11, 7, 2],
                    [11, 6, 3],
                    [5, 2, 11, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[-6, 2], [-5, 2]],
                pitchLists: [
                    [1, 10, 7],
                    [11, 6, 3, 10],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 51, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 29, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 56, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [57, 63, 19],
        moves: [
            {
                dominoIndex: 63,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [4, 2, 11, 8],
                    [8, 2, 6, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [4, 9, 1],
                    [9, 5, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 57,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 2, 10, 6],
                    [7, 4, 9, 1],
                    [8, 11, 2],
                    [8, 2, 5, 11],
                ],
                points: 15,
            },
        ],
        points: 32,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 19, placement: [[-2, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 1], [0, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 18, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [5, 1, 8, 0],
                    [0, 9, 3],
                    [2, 6, 9],
                ],
                points: 10,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 50, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 49, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 19, placement: [[2, -3], [2, -4]] },
            { dominoIndex: 8, placement: [[1, 0], [2, -1]] },
        ],
        handList: [41, 14, 51],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [4, 1, 9, 5],
                    [4, 7, 10, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [1, 4, 9],
                    [1, 9, 4],
                    [4, 1, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 51,
                placement: [[4, -6], [4, -5]],
                pitchLists: [
                    [5, 1, 9, 4],
                    [11, 4, 1, 7],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 44, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 63, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 39, placement: [[2, 1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[0, 1], [-1, 1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 46, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 6, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 33, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 19, placement: [[-1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [3, 9, 0, 5],
                    [9, 3, 0],
                    [9, 6, 3],
                    [9, 6, 3],
                ],
                points: 13,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 1, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 42, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 35, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 51, placement: [[5, -3], [4, -2]] },
        ],
        handList: [41, 31, 63],
        moves: [
            {
                dominoIndex: 41,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [3, 8, 11, 4],
                    [6, 11, 3, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 63,
                placement: [[7, -3], [6, -3]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 4, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 31,
                placement: [[4, -3], [4, -4]],
                pitchLists: [
                    [3, 5, 11, 8],
                    [4, 3, 11, 7],
                    [3, 8, 11, 5],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 29, placement: [[0, -1], [0, -2]] },
        ],
        handList: [7, 63, 24],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [3, 0, 7],
                    [10, 2, 5, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [2, 8, 11],
                    [8, 5, 0],
                    [11, 2, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 24,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [5, 2, 11, 9],
                    [2, 8, 5, 0],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 35, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 2, placement: [[0, 0], [1, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 23, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [1, 9, 4, 7],
                    [2, 4, 10, 7],
                    [6, 1, 10],
                ],
                points: 11,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 14, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 49, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 8, placement: [[-3, 2], [-3, 1]] },
            { dominoIndex: 63, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 41, placement: [[-2, 4], [-1, 4]] },
        ],
        handList: [5, 29, 16],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-3, 6], [-2, 5]],
                pitchLists: [
                    [7, 10, 2],
                    [1, 8, 4, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [11, 4, 7, 0],
                    [9, 5, 0],
                    [5, 7, 10, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 16,
                placement: [[0, 5], [-1, 5]],
                pitchLists: [
                    [10, 6, 1],
                    [9, 5, 0, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 2, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 36, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 0], [1, -1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 27, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 25, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 6, placement: [[-1, 0], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [5, 2, 8],
                    [5, 9, 1, 6],
                    [8, 5, 0],
                    [8, 2, 5],
                ],
                points: 13,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 7, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 36, placement: [[-3, 2], [-4, 2]] },
            { dominoIndex: 56, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 9, placement: [[-2, 4], [-3, 5]] },
            { dominoIndex: 37, placement: [[-2, 0], [-2, 1]] },
        ],
        handList: [26, 24, 63],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [5, 2, 10],
                    [2, 7, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [2, 7, 11],
                    [10, 3, 7],
                    [5, 2, 10, 7],
                ],
                points: 14,
            },
            {
                dominoIndex: 63,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [2, 11, 8],
                    [10, 3, 7, 11],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
}
