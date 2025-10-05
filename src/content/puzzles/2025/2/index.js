import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 1, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 4, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 63, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 43, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [8, 1, 4, 0],
                    [11, 8, 4, 1],
                    [5, 9, 1],
                    [9, 0, 4, 8],
                ],
                points: 15,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 49, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 4, placement: [[3, -1], [4, -2]] },
            { dominoIndex: 7, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [55, 36, 3],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [6, 11, 3, 7],
                    [10, 0, 7, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 36,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [10, 6, 3],
                    [2, 7, 11, 3],
                    [0, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[-5, 2], [-5, 3]],
                pitchLists: [
                    [0, 9, 3],
                    [0, 6, 9, 3],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 54, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [37, 30, 27],
        moves: [
            {
                dominoIndex: 27,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [2, 0, 6, 9],
                ],
                points: 4,
            },
            {
                dominoIndex: 30,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [2, 11, 7],
                    [11, 2, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [10, 3, 6],
                    [2, 11, 7, 3],
                    [8, 0, 3],
                    [2, 7, 10],
                ],
                points: 13,
            },
        ],
        points: 25,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[2, 0], [1, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 4, placement: [[1, 0], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [2, 5, 8],
                    [1, 10, 7, 5],
                    [0, 4, 9, 8],
                ],
                points: 11,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 6, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 9, placement: [[2, -1], [1, -1]] },
        ],
        handList: [15, 33, 55],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [10, 3, 6],
                    [0, 3, 7, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [6, 9, 3],
                    [10, 6, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [1, 10, 3, 6],
                    [5, 1, 6, 9],
                    [10, 6, 3, 1],
                    [5, 3, 9, 0],
                ],
                points: 16,
            },
        ],
        points: 31,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 32, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 43, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 6, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 13, placement: [[3, 1], [2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [0, 1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 26, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 56, placement: [[0, -2], [0, -3]] },
            { dominoIndex: 31, placement: [[1, -3], [1, -4]] },
            { dominoIndex: 48, placement: [[-1, -4], [-1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [8, 11, 3, 7],
                    [7, 11, 3],
                    [2, 6, 11],
                    [4, 3, 11, 8],
                ],
                points: 14,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 6, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[3, -3], [2, -3]] },
            { dominoIndex: 38, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 58, placement: [[4, -2], [3, -2]] },
        ],
        handList: [3, 57, 51],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [0, 4, 9],
                    [0, 9, 4],
                    [3, 9, 0, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 57,
                placement: [[3, -5], [4, -5]],
                pitchLists: [
                    [7, 0, 4, 9],
                    [7, 3, 0],
                    [8, 0, 9, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[4, -7], [4, -6]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 7, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 51, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[3, -3], [2, -2]] },
        ],
        handList: [29, 43, 24],
        moves: [
            {
                dominoIndex: 29,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [5, 11, 8, 2],
                    [2, 10, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [0, 9, 4],
                    [9, 2, 10, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [2, 5, 8, 10],
                    [5, 0, 9, 4],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 34, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 16, placement: [[-1, 0], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, -1], [-1, -1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 15, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 26, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [2, 7, 11, 5],
                    [1, 8, 5],
                    [11, 8, 5],
                ],
                points: 10,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 9, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 22, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 64, placement: [[2, 3], [3, 2]] },
        ],
        handList: [24, 52, 29],
        moves: [
            {
                dominoIndex: 52,
                placement: [[2, 4], [3, 3]],
                pitchLists: [
                    [2, 9, 6],
                    [0, 3, 9, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[3, 4], [4, 4]],
                pitchLists: [
                    [6, 2, 10],
                    [10, 7, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[0, 5], [1, 4]],
                pitchLists: [
                    [10, 9, 5, 2],
                    [5, 6, 2, 10],
                    [0, 9, 3, 5],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 1, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 41, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 3, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 36, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, -1], [0, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 32, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 27, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 7, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 24, placement: [[-2, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [11, 8, 3, 5],
                    [8, 2, 5],
                    [11, 2, 8, 5],
                    [11, 8, 2],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 38, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 34, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 59, placement: [[-3, 0], [-2, -1]] },
            { dominoIndex: 30, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 25, placement: [[-2, -2], [-2, -3]] },
            { dominoIndex: 58, placement: [[-2, -4], [-3, -3]] },
        ],
        handList: [60, 3, 41],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, -4], [0, -5]],
                pitchLists: [
                    [11, 7, 2],
                    [7, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[1, -5], [2, -5]],
                pitchLists: [
                    [11, 4, 7],
                    [4, 7, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[-1, -5], [0, -6]],
                pitchLists: [
                    [0, 11, 4, 7],
                    [3, 0, 7, 9],
                    [3, 11, 7, 2],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
        ],
        handList: [41, 27, 7],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [11, 7, 4],
                    [1, 5, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [5, 8, 2],
                    [2, 11, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[3, -1], [4, -2]],
                pitchLists: [
                    [5, 8, 2, 0],
                    [7, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 22, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 9, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, -2], [1, -2]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 42, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 19, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 15, placement: [[2, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [11, 5, 8],
                    [9, 1, 5, 10],
                    [4, 1, 8],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 16, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 41, placement: [[1, 1], [2, 0]] },
        ],
        handList: [20, 59, 4],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [1, 10, 5],
                    [7, 4, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [1, 10, 5, 7],
                    [4, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [0, 4, 7],
                    [1, 10, 4],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 17, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 20, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[0, 1], [1, 1]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 45, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 48, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 20, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 30, placement: [[2, 0], [3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [8, 6, 2, 11],
                    [6, 5, 1, 10],
                    [11, 6, 2],
                    [11, 2, 8],
                ],
                points: 14,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 11, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 25, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 3, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 7, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 14, placement: [[4, -4], [4, -3]] },
        ],
        handList: [36, 8, 46],
        moves: [
            {
                dominoIndex: 36,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [0, 7, 3],
                    [3, 6, 11, 9],
                    [1, 4, 7, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[6, -3], [6, -2]],
                pitchLists: [
                    [0, 3, 9],
                    [0, 7, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 46,
                placement: [[6, -4], [7, -4]],
                pitchLists: [
                    [5, 0, 8],
                    [6, 0, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 1, placement: [[-1, 2], [0, 2]] },
        ],
        handList: [28, 48, 20],
        moves: [
            {
                dominoIndex: 28,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [9, 2, 6, 0],
                    [2, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [9, 2, 5],
                    [5, 8, 1],
                    [5, 2, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 20,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [9, 2, 5, 1],
                    [2, 5, 9, 10],
                    [10, 5, 8, 1],
                ],
                points: 12,
            },
        ],
        points: 30,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 63, placement: [[3, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[3, -3], [2, -2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 62, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 6, placement: [[1, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [6, 3, 0, 8],
                    [0, 6, 9],
                    [0, 3, 6],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 20, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 14, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 5, placement: [[4, -3], [3, -2]] },
        ],
        handList: [54, 41, 18],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [3, 6, 9],
                    [1, 4, 10, 6],
                    [0, 5, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[5, -4], [4, -4]],
                pitchLists: [
                    [1, 7, 4],
                    [4, 0, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[5, -5], [5, -6]],
                pitchLists: [
                    [8, 1, 4],
                    [1, 7, 10],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 21, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[1, -1], [2, -1]] },
        ],
    },
}
