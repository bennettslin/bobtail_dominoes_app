import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 25, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 37, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 16, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [1, 10, 6],
                    [1, 6, 3, 10],
                    [1, 10, 6],
                ],
                points: 10,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 60, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 62, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 14, placement: [[0, -4], [-1, -3]] },
            { dominoIndex: 56, placement: [[-3, 0], [-3, -1]] },
            { dominoIndex: 29, placement: [[-3, 1], [-3, 2]] },
        ],
        handList: [24, 33, 53],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [11, 5, 2],
                    [2, 5, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 53,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [10, 2, 6],
                    [11, 5, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[-4, 2], [-4, 3]],
                pitchLists: [
                    [3, 10, 2, 6],
                    [7, 11, 2, 3],
                    [2, 5, 10, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 8, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[2, -4], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 39, placement: [[1, -1], [0, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 9, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 42, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 53, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 12, placement: [[-1, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [1, 6, 9, 2],
                    [11, 9, 5, 2],
                    [9, 5, 0],
                    [8, 1, 5],
                ],
                points: 14,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 47, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 60, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 34, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 50, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 23, placement: [[0, -2], [0, -3]] },
            { dominoIndex: 48, placement: [[3, -1], [3, -2]] },
        ],
        handList: [18, 30, 59],
        moves: [
            {
                dominoIndex: 18,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [1, 8, 4],
                    [8, 5, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [8, 11, 2],
                    [11, 5, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[3, -5], [3, -6]],
                pitchLists: [
                    [10, 7, 2],
                    [7, 11, 5, 2],
                    [10, 1, 8, 4],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 62, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [16, 49, 25],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [6, 1, 10],
                    [9, 3, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [5, 9, 4, 1],
                    [0, 9, 3, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 25,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [2, 6, 9],
                    [2, 9, 5],
                    [6, 3, 9],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 45, placement: [[1, -2], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 43, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 7, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 34, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [1, 10, 7],
                    [10, 3, 0, 7],
                ],
                points: 10,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 24, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [9, 49, 29],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [9, 0, 4],
                    [9, 5, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [5, 9, 2],
                    [9, 2, 5],
                    [0, 5, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [0, 5, 9, 2],
                    [9, 2, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 18, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 4, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 35, placement: [[0, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[0, 0], [1, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 20, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 63, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 19, placement: [[1, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [3, 0, 9],
                    [7, 3, 11, 0],
                    [0, 8, 3],
                    [6, 11, 3],
                ],
                points: 13,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 7, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 18, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 43, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 49, placement: [[-4, 2], [-3, 1]] },
            { dominoIndex: 56, placement: [[2, 0], [1, 0]] },
        ],
        handList: [60, 35, 25],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [9, 4, 0, 7],
                    [4, 3, 7, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 35,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [7, 3, 11],
                    [0, 3, 8],
                    [11, 7, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 25,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [11, 8, 2],
                    [0, 3, 8, 6],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 28, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 47, placement: [[1, 2], [0, 3]] },
        ],
        handList: [48, 38, 60],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [8, 5, 2],
                    [3, 9, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [3, 8, 0],
                    [11, 8, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [3, 8, 0, 7],
                    [11, 7, 4, 2],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 26, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 32, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[2, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [5, 11, 2],
                    [7, 2, 11],
                    [0, 4, 8, 11],
                ],
                points: 10,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 6, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 35, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [54, 7, 29],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [6, 9, 2],
                    [6, 2, 9],
                    [9, 5, 0],
                ],
                points: 9,
            },
            {
                dominoIndex: 29,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [6, 2, 10],
                    [2, 9, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [7, 6, 2, 10],
                    [7, 2, 5, 11],
                ],
                points: 12,
            },
        ],
        points: 30,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 26, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 41, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, 0], [1, 1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 29, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 38, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 35, placement: [[3, -2], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [3, 11, 7, 2],
                    [3, 6, 11, 7],
                    [6, 11, 3],
                    [6, 3, 10],
                ],
                points: 14,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 44, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 17, placement: [[-3, 2], [-4, 3]] },
            { dominoIndex: 42, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 59, placement: [[-2, 3], [-3, 4]] },
        ],
        handList: [43, 7, 20],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [4, 1, 9, 6],
                    [4, 9, 1],
                    [9, 4, 0],
                    [4, 8, 1, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 7,
                placement: [[-5, 2], [-4, 1]],
                pitchLists: [
                    [4, 7, 0],
                    [7, 9, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-5, 3], [-6, 3]],
                pitchLists: [
                    [10, 1, 7],
                    [4, 7, 0, 10],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 2, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 43, placement: [[2, 1], [2, 0]] },
        ],
        handList: [16, 9, 48],
        moves: [
            {
                dominoIndex: 16,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [1, 9, 4],
                    [6, 9, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 9,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [1, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [5, 1, 6, 9],
                    [8, 5, 0, 2],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 0], [1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 51, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 41, placement: [[-1, 0], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [8, 11, 5],
                    [8, 0, 5],
                    [7, 4, 0, 11],
                ],
                points: 10,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 42, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 15, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 60, placement: [[4, -1], [4, -2]] },
        ],
        handList: [55, 22, 50],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [6, 10, 3],
                    [10, 7, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[4, -3], [5, -4]],
                pitchLists: [
                    [6, 10, 3, 2],
                    [2, 11, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[4, 0], [3, 0]],
                pitchLists: [
                    [1, 10, 5],
                    [2, 11, 7, 5],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 4, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 54, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 58, placement: [[0, 1], [0, 0]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 8, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 55, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, 3], [-3, 4]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [8, 3, 0],
                    [0, 7, 3, 10],
                    [0, 3, 7],
                    [3, 11, 6],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[-4, 3], [-3, 3]] },
            { dominoIndex: 3, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 7, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 37, placement: [[-3, 5], [-2, 5]] },
            { dominoIndex: 36, placement: [[1, 2], [0, 2]] },
        ],
        handList: [57, 45, 25],
        moves: [
            {
                dominoIndex: 57,
                placement: [[-4, 5], [-3, 4]],
                pitchLists: [
                    [7, 3, 10],
                    [0, 3, 8, 7],
                    [11, 8, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 25,
                placement: [[-4, 7], [-3, 6]],
                pitchLists: [
                    [10, 6, 2],
                    [11, 8, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [8, 0, 11, 4],
                    [3, 0, 7, 11],
                    [11, 10, 6, 2],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 35, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 58, placement: [[0, -1], [-1, 0]] },
        ],
        handList: [25, 22, 55],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [2, 7, 11],
                    [6, 9, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 22,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [2, 6, 9, 0],
                    [3, 2, 7, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 55,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [6, 2, 9],
                    [10, 6, 3, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 53, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 27, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, -1], [1, -1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [9, 0, 4],
                    [3, 0, 8],
                    [4, 7, 0],
                    [11, 4, 8],
                ],
                points: 12,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 17, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 53, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 14, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 45, placement: [[0, 3], [1, 2]] },
        ],
        handList: [50, 40, 8],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [4, 0, 8],
                    [11, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 50,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [10, 5, 1],
                    [5, 4, 0, 8],
                    [8, 10, 5, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 40,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [4, 10, 1],
                    [6, 10, 5, 1],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
}
