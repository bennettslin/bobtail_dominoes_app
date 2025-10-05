import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 34, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 60, placement: [[2, -4], [3, -4]] },
        ],
        handList: [3, 41, 45],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 7, 11],
                    [4, 11, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [0, 3, 9],
                    [4, 11, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [7, 0, 4],
                    [11, 7, 4],
                    [11, 3, 7],
                    [7, 0, 3, 9],
                ],
                points: 13,
            },
        ],
        points: 31,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 5, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 50, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 26, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [2, 11, 5],
                    [8, 5, 11],
                    [5, 2, 8],
                    [5, 2, 11],
                ],
                points: 12,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 32, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 20, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [1, 1]] },
        ],
        handList: [30, 51, 42],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [7, 11, 2],
                    [4, 11, 8],
                    [3, 11, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 51,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [7, 11, 2, 5],
                    [1, 4, 7, 11],
                    [8, 2, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [8, 2, 11, 4],
                    [8, 11, 5],
                    [3, 11, 7, 8],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 51, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 27, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 17, placement: [[-2, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 20, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 41, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 37, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 53, placement: [[-3, 3], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [6, 8, 11, 3],
                    [2, 11, 7, 3],
                    [7, 3, 11],
                    [1, 4, 7, 11],
                ],
                points: 15,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 26, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 55, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 33, placement: [[-2, 2], [-2, 1]] },
            { dominoIndex: 49, placement: [[1, -1], [2, -2]] },
        ],
        handList: [5, 9, 35],
        moves: [
            {
                dominoIndex: 5,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [0, 9, 5, 1],
                    [1, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [1, 9, 5, 0],
                    [0, 9, 5],
                    [0, 5, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [0, 8, 3],
                    [3, 0, 9, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 20, placement: [[3, -5], [3, -4]] },
        ],
        handList: [59, 3, 33],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [7, 10, 2],
                ],
                points: 3,
            },
            {
                dominoIndex: 33,
                placement: [[1, -4], [2, -4]],
                pitchLists: [
                    [3, 6, 10],
                    [3, 10, 6],
                    [1, 6, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 3,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [0, 3, 6],
                    [3, 7, 0],
                    [7, 3, 11, 0],
                    [1, 6, 10, 3],
                ],
                points: 14,
            },
        ],
        points: 28,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, 0], [-1, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 9, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [7, 4, 0],
                    [0, 4, 9],
                    [1, 8, 4],
                    [8, 3, 0, 7],
                ],
                points: 13,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 43, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[3, -1], [2, -1]] },
        ],
        handList: [57, 7, 18],
        moves: [
            {
                dominoIndex: 57,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [7, 11, 5, 2],
                    [7, 0, 9, 4],
                    [8, 0, 4],
                    [8, 4, 1],
                ],
                points: 14,
            },
            {
                dominoIndex: 7,
                placement: [[-1, 3], [-2, 4]],
                pitchLists: [
                    [8, 4, 1, 0],
                    [4, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [4, 9, 8, 1],
                    [11, 4, 8],
                    [8, 4, 0, 7],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 4, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 37, placement: [[0, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 18, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 66, placement: [[2, -4], [3, -4]] },
            { dominoIndex: 45, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 3, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 55, placement: [[1, -3], [0, -3]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [2, 8, 4, 11],
                    [10, 2, 5, 7],
                    [10, 6, 2, 9],
                    [9, 5, 0],
                ],
                points: 15,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 61, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 6, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 7, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 42, placement: [[-4, 3], [-3, 2]] },
        ],
        handList: [14, 35, 56],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [4, 1, 8, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [0, 8, 3],
                    [4, 9, 1, 8],
                    [0, 4, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 56,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [11, 0, 4, 8],
                    [11, 7, 0, 4],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 21, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[0, -2], [1, -2]] },
        ],
        handList: [48, 54, 16],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [6, 3, 10],
                    [9, 3, 7, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [6, 3, 10, 1],
                    [1, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [5, 1, 6, 9],
                    [5, 10, 7, 1],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 37, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 60, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[1, 0], [1, 1]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 27, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 66, placement: [[2, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [10, 11, 2, 6],
                    [2, 8, 11, 6],
                ],
                points: 8,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 55, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 15, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 9, placement: [[2, -1], [1, 0]] },
        ],
        handList: [34, 49, 14],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [0, 10, 3, 7],
                    [6, 3, 0],
                    [7, 0, 9, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 49,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [9, 5, 0],
                    [9, 6, 3, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[1, -4], [0, -4]],
                pitchLists: [
                    [4, 1, 9],
                    [1, 5, 10],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 45, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 31, placement: [[-3, 2], [-4, 2]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-2, 3], [-1, 2]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 43, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 55, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 17, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 59, placement: [[-2, -2], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [1, 4, 9],
                    [7, 10, 1],
                    [10, 4, 7, 1],
                    [1, 7, 4],
                    [9, 1, 4],
                ],
                points: 16,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 33, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 1, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 6, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 28, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, 4], [-1, 4]] },
            { dominoIndex: 5, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [4, 48, 63],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [6, 2, 9, 0],
                    [4, 1, 9],
                    [9, 0, 6, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 48,
                placement: [[-4, 6], [-3, 5]],
                pitchLists: [
                    [1, 8, 5],
                    [0, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[-2, 6], [-3, 6]],
                pitchLists: [
                    [5, 11, 8],
                    [0, 4, 8, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 27, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 31, placement: [[0, 2], [1, 2]] },
        ],
        handList: [56, 8, 5],
        moves: [
            {
                dominoIndex: 56,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [6, 11, 2],
                    [11, 8, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [0, 8, 3, 4],
                    [6, 11, 2, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 5,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [8, 0, 5],
                    [8, 3, 0],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 35, placement: [[2, -3], [2, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[0, -3], [1, -3]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 9, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 52, placement: [[3, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [0, 5, 8],
                    [2, 9, 5],
                    [10, 4, 1, 8],
                ],
                points: 10,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 49, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 19, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 6, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 29, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 42, placement: [[-3, 4], [-2, 3]] },
        ],
        handList: [13, 7, 35],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-4, 5], [-4, 6]],
                pitchLists: [
                    [1, 8, 4, 0],
                ],
                points: 4,
            },
            {
                dominoIndex: 35,
                placement: [[-4, 3], [-4, 4]],
                pitchLists: [
                    [3, 8, 0, 7],
                    [8, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 13,
                placement: [[-2, 5], [-1, 4]],
                pitchLists: [
                    [5, 8, 0, 1],
                    [8, 4, 0, 3],
                    [9, 1, 6, 3],
                ],
                points: 12,
            },
        ],
        points: 25,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 18, placement: [[-1, 3], [-1, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 57, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 59, placement: [[3, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [3, 7, 11, 8],
                    [7, 10, 2],
                    [7, 2, 11, 6],
                ],
                points: 15,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 34, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 20, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 44, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 28, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 6, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 1, placement: [[-4, 3], [-4, 2]] },
        ],
        handList: [41, 17, 37],
        moves: [
            {
                dominoIndex: 17,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [10, 7, 1],
                    [7, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[4, -2], [4, -3]],
                pitchLists: [
                    [7, 4, 1],
                    [4, 7, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[5, -1], [4, 0]],
                pitchLists: [
                    [10, 7, 1, 3],
                    [3, 10, 0, 6],
                    [7, 4, 1, 10],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 14, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 49, placement: [[-1, 2], [-2, 3]] },
        ],
        handList: [19, 8, 42],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [5, 1, 9],
                    [1, 2, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [8, 0, 5],
                    [8, 5, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [4, 8, 1],
                    [4, 11, 8],
                    [8, 5, 0],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 16, placement: [[2, 1], [2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 30, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 55, placement: [[1, -3], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [3, 6, 11],
                    [11, 6, 2],
                    [6, 10, 3, 11],
                ],
                points: 10,
            },
        ],
    },
}
