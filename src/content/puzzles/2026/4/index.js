import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 16, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 3, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 41, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [3, 6, 0],
                    [8, 11, 3],
                    [11, 1, 4, 7],
                ],
                points: 10,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 59, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 42, placement: [[-2, 3], [-3, 4]] },
        ],
        handList: [45, 41, 31],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [4, 1, 7, 10],
                    [7, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 31,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [3, 7, 10, 1],
                    [4, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [1, 7, 11, 4],
                    [4, 7, 1, 11],
                    [11, 0, 4, 8],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 56, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 7, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 30, placement: [[-2, 4], [-3, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 17, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 37, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 30, placement: [[3, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [4, 7, 10],
                    [4, 1, 7],
                    [8, 11, 2],
                    [8, 7, 3, 0],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 23, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 41, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 60, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 29, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 46, placement: [[-2, -2], [-2, -1]] },
        ],
        handList: [37, 17, 63],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-3, -1], [-3, 0]],
                pitchLists: [
                    [3, 6, 10, 1],
                    [2, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [1, 7, 4],
                    [2, 6, 10, 1],
                    [3, 10, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 63,
                placement: [[-4, 0], [-5, 1]],
                pitchLists: [
                    [5, 3, 8, 11],
                    [11, 1, 7, 4],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 34, placement: [[-2, -1], [-2, 0]] },
        ],
        handList: [60, 30, 42],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-1, -2], [-2, -2]],
                pitchLists: [
                    [11, 7, 4],
                    [0, 7, 3],
                    [11, 3, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 42,
                placement: [[-1, -3], [-2, -3]],
                pitchLists: [
                    [8, 4, 0],
                    [4, 7, 0],
                    [8, 11, 3, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [11, 7, 4, 2],
                    [11, 2, 5],
                    [8, 4, 0, 11],
                    [11, 4, 0, 7],
                ],
                points: 15,
            },
        ],
        points: 36,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 54, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 47, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 4, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 63, placement: [[2, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 7, 4],
                    [8, 1, 4],
                    [11, 8, 5, 1],
                    [0, 7, 4],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 60, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 4, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 37, placement: [[-1, 0], [0, -1]] },
        ],
        handList: [19, 35, 15],
        moves: [
            {
                dominoIndex: 35,
                placement: [[4, -3], [3, -2]],
                pitchLists: [
                    [4, 7, 11, 3],
                    [0, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [11, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [11, 8, 5, 1],
                    [1, 5, 9],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 54, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 26, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 36, placement: [[-2, 5], [-2, 6]] },
            { dominoIndex: 14, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 10, placement: [[-2, 4], [-1, 4]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 30, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 33, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 19, placement: [[-3, 4], [-3, 3]] },
            { dominoIndex: 51, placement: [[-3, 5], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [6, 3, 9],
                    [6, 9, 1, 5],
                    [1, 10, 6],
                    [10, 3, 6, 11],
                ],
                points: 14,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 17, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 22, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 55, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 15, placement: [[4, -2], [4, -3]] },
        ],
        handList: [28, 8, 32],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [5, 2, 9, 1],
                    [2, 8, 5, 11],
                    [9, 6, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[5, -4], [4, -4]],
                pitchLists: [
                    [0, 5, 9],
                    [8, 5, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 32,
                placement: [[6, -5], [6, -4]],
                pitchLists: [
                    [3, 0, 5, 9],
                    [8, 0, 5],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 62, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [24, 26, 33],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [5, 2, 11],
                    [10, 5, 2],
                    [8, 11, 5],
                ],
                points: 9,
            },
            {
                dominoIndex: 26,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [8, 11, 5, 2],
                    [10, 2, 7],
                    [5, 2, 11, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [3, 10, 2, 7],
                    [3, 8, 11, 5],
                    [6, 10, 5, 2],
                ],
                points: 12,
            },
        ],
        points: 34,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 9, placement: [[3, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[1, 0], [1, 1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 18, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 36, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [3, 0, 9],
                    [9, 0, 5],
                    [1, 9, 5],
                ],
                points: 9,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 40, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 59, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 37, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 3, placement: [[1, 0], [1, -1]] },
        ],
        handList: [65, 24, 4],
        moves: [
            {
                dominoIndex: 65,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [0, 4, 7, 9],
                    [6, 10, 3, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 24,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [2, 7, 10],
                    [5, 2, 9, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [0, 9, 3],
                    [4, 2, 7, 10],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 55, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 21, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 9, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 29, placement: [[-1, 0], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, -1], [0, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 29, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 15, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 49, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 27, placement: [[0, 3], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [5, 1, 8],
                    [2, 10, 5],
                    [10, 5, 2],
                    [6, 10, 1],
                ],
                points: 12,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 11, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 35, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 55, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 26, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 5, placement: [[2, -4], [1, -3]] },
        ],
        handList: [25, 30, 42],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [2, 7, 10, 3],
                    [6, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [7, 11, 2],
                    [2, 5, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [4, 8, 0, 11],
                    [7, 11, 2, 4],
                    [5, 2, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 8, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [51, 19, 35],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [0, 8, 4, 1],
                    [9, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [8, 11, 5],
                    [9, 1, 6, 5],
                    [1, 7, 4, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 35,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [3, 8, 11, 5],
                    [8, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 17, placement: [[-1, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[0, 0], [1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 5, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 63, placement: [[-4, 1], [-3, 1]] },
            { dominoIndex: 17, placement: [[-1, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [11, 2, 5],
                    [9, 0, 5, 2],
                    [10, 1, 7, 5],
                ],
                points: 11,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 28, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[2, -3], [2, -2]] },
        ],
        handList: [24, 63, 59],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [10, 7, 1],
                    [10, 2, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [11, 6, 2, 9],
                    [7, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [5, 2, 9, 11],
                    [8, 11, 2],
                    [7, 2, 11, 5],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 14, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 17, placement: [[-1, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[0, 1], [-1, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 47, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 9, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 34, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 36, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [0, 9, 3],
                    [8, 0, 3],
                    [3, 0, 7],
                    [8, 3, 0, 7],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 41, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 45, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 17, placement: [[-2, -3], [-2, -2]] },
            { dominoIndex: 54, placement: [[-4, -1], [-3, -2]] },
        ],
        handList: [29, 35, 60],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, -4], [-2, -4]],
                pitchLists: [
                    [2, 8, 4, 11],
                    [2, 1, 9, 6],
                    [10, 1, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 35,
                placement: [[-2, -1], [-3, 0]],
                pitchLists: [
                    [3, 11, 8],
                    [10, 1, 7, 3],
                    [11, 4, 3, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [3, 11, 8, 7],
                    [11, 7, 4, 0],
                ],
                points: 8,
            },
        ],
        points: 32,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[-1, 2], [-1, 3]] },
        ],
        handList: [16, 29, 34],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [1, 9, 6],
                    [0, 4, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [6, 2, 9],
                    [6, 2, 10],
                    [1, 6, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 34,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [1, 9, 6, 3],
                    [0, 7, 3],
                    [7, 6, 2, 10],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 64, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 27, placement: [[0, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[-1, 1], [0, 1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 27, placement: [[0, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [2, 5, 8],
                    [8, 2, 11],
                    [11, 5, 2],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 11, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 41, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 2, placement: [[2, 3], [1, 4]] },
            { dominoIndex: 58, placement: [[-1, 4], [-1, 3]] },
        ],
        handList: [3, 48, 4],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [6, 3, 0],
                    [0, 11, 4, 7],
                    [3, 11, 7, 2],
                    [3, 0, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 48,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [8, 5, 0],
                    [5, 3, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [4, 0, 9],
                    [4, 8, 5, 0],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
}
