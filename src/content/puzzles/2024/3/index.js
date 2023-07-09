import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 7, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 39, placement: [[-1, 0], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 45, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 51, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 2, placement: [[2, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [11, 8, 4, 3],
                    [0, 8, 3],
                    [5, 11, 8],
                    [8, 4, 11],
                ],
                points: 13,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 64, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 16, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 52, placement: [[1, 3], [2, 2]] },
            { dominoIndex: 37, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 29, placement: [[3, 1], [4, 0]] },
        ],
        handList: [49, 38, 55],
        moves: [
            {
                dominoIndex: 38,
                placement: [[2, 4], [2, 3]],
                pitchLists: [
                    [6, 7, 11, 3],
                    [3, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[3, 2], [3, 3]],
                pitchLists: [
                    [10, 1, 7, 5],
                    [2, 5, 9],
                    [3, 6, 11, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 55,
                placement: [[4, 4], [3, 4]],
                pitchLists: [
                    [3, 10, 6],
                    [2, 5, 9, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 59, placement: [[2, 0], [2, 1]] },
        ],
        handList: [32, 17, 60],
        moves: [
            {
                dominoIndex: 32,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [3, 2, 7, 10],
                    [5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [5, 2, 9, 1],
                ],
                points: 4,
            },
            {
                dominoIndex: 60,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 11, 2],
                    [7, 4, 1],
                    [3, 11, 4, 7],
                ],
                points: 10,
            },
        ],
        points: 23,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 26, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 4, placement: [[2, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 50, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 51, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[2, -1], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [11, 5, 2],
                    [8, 2, 5],
                    [2, 5, 8],
                    [2, 5, 10],
                ],
                points: 12,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 6, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 54, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 35, placement: [[1, 0], [1, 1]] },
        ],
        handList: [9, 25, 5],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [0, 9, 3],
                    [9, 0, 4],
                    [6, 0, 9],
                    [9, 4, 1, 8],
                ],
                points: 13,
            },
            {
                dominoIndex: 25,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [2, 9, 6, 0],
                    [2, 6, 9],
                    [6, 0, 9, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 5,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [0, 2, 6, 9],
                    [5, 9, 0, 4],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 40, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 5, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 17, placement: [[-1, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[1, 0], [0, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 39, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 33, placement: [[1, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [0, 8, 4, 5],
                    [0, 3, 7],
                    [0, 3, 8],
                    [8, 0, 4, 7],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 25, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 30, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 46, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 13, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 41, placement: [[-4, 1], [-3, 0]] },
        ],
        handList: [63, 60, 20],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [8, 2, 6, 11],
                    [5, 3, 11, 8],
                    [7, 11, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[-5, 4], [-4, 3]],
                pitchLists: [
                    [2, 11, 7],
                    [4, 8, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[-4, 4], [-3, 4]],
                pitchLists: [
                    [7, 1, 10],
                    [4, 8, 11, 1],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 36, placement: [[0, -3], [1, -3]] },
        ],
        handList: [2, 6, 25],
        moves: [
            {
                dominoIndex: 2,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [3, 9, 0],
                    [2, 9, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 6,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [6, 0, 9],
                    [2, 9, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [6, 0, 9, 2],
                    [9, 6, 2, 10],
                    [0, 6, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 24, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 66, placement: [[-1, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 12, placement: [[-1, 1], [0, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 37, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 14, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [9, 0, 3],
                    [0, 7, 4],
                    [9, 6, 1],
                ],
                points: 9,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 64, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 18, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 39, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 62, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 13, placement: [[-1, -2], [0, -3]] },
        ],
        handList: [7, 37, 48],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-2, -3], [-1, -3]],
                pitchLists: [
                    [0, 7, 3],
                    [7, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[-1, -4], [0, -5]],
                pitchLists: [
                    [5, 7, 1, 10],
                    [8, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-3, -2], [-3, -3]],
                pitchLists: [
                    [8, 5, 0, 3],
                    [10, 0, 7, 3],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 49, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 20, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[1, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, -1], [0, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 57, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 53, placement: [[-2, -1], [-3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [2, 7, 11, 3],
                    [5, 10, 2],
                    [6, 2, 10, 7],
                    [11, 2, 7],
                ],
                points: 14,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 38, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 55, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 3, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 57, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 18, placement: [[0, 3], [0, 2]] },
        ],
        handList: [26, 14, 54],
        moves: [
            {
                dominoIndex: 26,
                placement: [[5, -1], [4, 0]],
                pitchLists: [
                    [3, 6, 10, 2],
                    [2, 7, 11],
                    [0, 3, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[5, 1], [5, 0]],
                pitchLists: [
                    [2, 9, 6],
                    [0, 3, 7, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[5, -2], [6, -2]],
                pitchLists: [
                    [1, 2, 9, 6],
                    [1, 10, 3, 7],
                    [4, 2, 7, 11],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 17, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 50, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 4, placement: [[2, -2], [1, -1]] },
        ],
        handList: [19, 45, 8],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [5, 4, 1, 9],
                    [0, 4, 8, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 45,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 4, 7],
                    [8, 4, 11],
                    [1, 4, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 8,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [4, 8, 0],
                    [8, 1, 4, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 8, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-1, 0], [0, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 14, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 9, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 24, placement: [[0, -3], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [2, 9, 6, 1],
                    [9, 1, 6],
                    [9, 1, 4],
                    [0, 5, 9],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 4, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 43, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 25, placement: [[3, -2], [2, -2]] },
        ],
        handList: [8, 3, 42],
        moves: [
            {
                dominoIndex: 8,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [0, 9, 6, 2],
                    [8, 9, 4, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [3, 0, 6],
                    [3, 8, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[3, -5], [2, -5]],
                pitchLists: [
                    [4, 3, 8, 0],
                    [8, 3, 0, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 44, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 27, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 39, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 63, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 14, placement: [[2, -4], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [2, 8, 11, 5],
                    [1, 8, 5],
                    [5, 8, 0, 4],
                    [8, 11, 4],
                ],
                points: 14,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 60, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 38, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 35, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 33, placement: [[-3, -1], [-2, -2]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 57, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [45, 59, 14],
        moves: [
            {
                dominoIndex: 45,
                placement: [[-1, -4], [-1, -3]],
                pitchLists: [
                    [4, 11, 3, 8],
                    [11, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-4, 0], [-3, 0]],
                pitchLists: [
                    [7, 10, 3],
                    [11, 6, 3, 7],
                    [3, 10, 7],
                    [7, 3, 11, 10],
                ],
                points: 14,
            },
            {
                dominoIndex: 14,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [3, 10, 7, 1],
                    [8, 1, 4],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 27, placement: [[-4, 1], [-5, 2]] },
        ],
        handList: [5, 35, 24],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [0, 5, 2, 8],
                ],
                points: 4,
            },
            {
                dominoIndex: 35,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [0, 8, 3],
                    [5, 2, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [0, 8, 5, 2],
                    [0, 8, 3, 5],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 17, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[-1, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[0, 1], [-1, 1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 12, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 54, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 9, placement: [[-2, 3], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [10, 3, 6],
                    [3, 1, 6, 9],
                    [6, 2, 9],
                ],
                points: 10,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 18, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 61, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 45, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 51, placement: [[5, -2], [4, -2]] },
            { dominoIndex: 30, placement: [[5, -3], [5, -4]] },
        ],
        handList: [34, 63, 55],
        moves: [
            {
                dominoIndex: 34,
                placement: [[6, -2], [5, -1]],
                pitchLists: [
                    [8, 11, 5, 3],
                    [11, 2, 5, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 63,
                placement: [[6, -3], [7, -3]],
                pitchLists: [
                    [2, 8, 11],
                    [11, 3, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[8, -3], [8, -4]],
                pitchLists: [
                    [2, 8, 11, 6],
                    [10, 11, 3, 7],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 16, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 29, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 1], [1, 1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 39, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 8, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 35, placement: [[-2, 1], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [8, 5, 0, 4],
                    [8, 11, 4, 0],
                    [4, 8, 0],
                    [1, 8, 4],
                    [7, 0, 4],
                ],
                points: 17,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 19, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 16, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 59, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 28, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 55, placement: [[2, -1], [2, -2]] },
        ],
        handList: [24, 27, 42],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [1, 9, 2, 6],
                    [5, 2, 9, 10],
                    [10, 2, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 27,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [5, 10, 2],
                    [2, 6, 9, 1],
                    [8, 10, 2, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 42,
                placement: [[4, -1], [4, -2]],
                pitchLists: [
                    [4, 1, 7],
                    [5, 10, 2, 8],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
}
