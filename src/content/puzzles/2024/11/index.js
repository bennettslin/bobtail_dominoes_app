import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 47, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 34, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[0, -2], [0, -1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 7, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 56, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 59, placement: [[-3, 3], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [3, 6, 0],
                    [6, 3, 11, 7],
                    [7, 0, 3],
                    [6, 0, 3, 9],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 1, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 16, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 14, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 55, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 46, placement: [[-3, -1], [-2, -2]] },
        ],
        handList: [43, 41, 20],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [6, 1, 9, 4],
                    [9, 4, 1, 8],
                    [5, 0, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[-3, -2], [-4, -2]],
                pitchLists: [
                    [10, 1, 6],
                    [1, 5, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [10, 1, 6, 4],
                    [4, 6, 9, 1],
                    [7, 4, 10, 0],
                ],
                points: 12,
            },
        ],
        points: 32,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 47, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 43, placement: [[2, -1], [3, -1]] },
        ],
        handList: [62, 5, 25],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [9, 5, 0],
                    [1, 9, 4, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [9, 6, 2],
                    [2, 9, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 62,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [8, 0, 4, 9],
                    [1, 10, 8, 5],
                    [10, 9, 6, 2],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[0, 0], [1, -1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 56, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 9, placement: [[-1, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [5, 8, 11],
                    [5, 0, 9, 4],
                    [8, 2, 6, 11],
                ],
                points: 11,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 18, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 2, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 30, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-4, 2], [-3, 1]] },
        ],
        handList: [4, 54, 37],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [8, 4, 0],
                    [7, 1, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [0, 2, 9, 6],
                    [7, 1, 4, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 37,
                placement: [[2, 2], [3, 1]],
                pitchLists: [
                    [8, 4, 0, 3],
                    [10, 3, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 44, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 6, placement: [[-1, -3], [0, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[1, -2], [1, -3]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 29, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 16, placement: [[3, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [3, 10, 7],
                    [6, 10, 2, 7],
                    [1, 10, 7],
                    [11, 6, 2, 10],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 41, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 30, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 24, placement: [[3, -2], [3, -3]] },
            { dominoIndex: 36, placement: [[2, -3], [3, -4]] },
        ],
        handList: [50, 27, 60],
        moves: [
            {
                dominoIndex: 50,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [11, 2, 5],
                    [11, 2, 6, 10],
                    [9, 5, 2, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 27,
                placement: [[5, -3], [5, -2]],
                pitchLists: [
                    [2, 5, 10],
                    [11, 2, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[6, -4], [5, -4]],
                pitchLists: [
                    [7, 2, 5, 10],
                    [11, 2, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 39, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 3, placement: [[1, -4], [1, -3]] },
        ],
        handList: [9, 33, 7],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [0, 9, 4, 5],
                ],
                points: 4,
            },
            {
                dominoIndex: 33,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [0, 6, 3],
                    [3, 9, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 7,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [7, 0, 3, 11],
                    [3, 9, 6, 0],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[3, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[3, -3], [2, -2]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[-1, 2], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [6, 3, 11],
                    [2, 9, 6],
                    [0, 9, 3],
                ],
                points: 9,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 52, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 29, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 51, placement: [[-3, 1], [-2, 0]] },
        ],
        handList: [35, 25, 60],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [3, 8, 11],
                    [8, 2, 10, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [10, 9, 6, 2],
                    [3, 8, 11, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 60,
                placement: [[-4, 2], [-5, 2]],
                pitchLists: [
                    [11, 7, 2],
                    [2, 11, 5, 7],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 59, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 17, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 45, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 42, placement: [[2, 2], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [10, 7, 3],
                    [3, 8, 11, 4],
                    [3, 0, 7],
                    [7, 0, 4, 8],
                ],
                points: 14,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 24, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 51, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 41, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 18, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 8, placement: [[4, 0], [3, 0]] },
            { dominoIndex: 3, placement: [[3, -1], [2, -1]] },
        ],
        handList: [36, 5, 48],
        moves: [
            {
                dominoIndex: 36,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [0, 7, 9, 3],
                    [8, 11, 5, 3],
                    [4, 9, 5, 1],
                ],
                points: 12,
            },
            {
                dominoIndex: 5,
                placement: [[-1, 3], [-2, 4]],
                pitchLists: [
                    [0, 3, 8],
                    [2, 9, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[2, 3], [2, 4]],
                pitchLists: [
                    [0, 3, 8, 5],
                    [11, 1, 5, 8],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
        ],
        handList: [20, 56, 17],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [1, 10, 5],
                    [10, 0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [1, 10, 5, 6],
                    [2, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [10, 1, 7],
                    [7, 2, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 43, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, 0], [-1, 1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 18, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 37, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 60, placement: [[-1, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [4, 0, 8],
                    [3, 11, 7, 0],
                    [1, 7, 4],
                ],
                points: 10,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 12, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 60, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 28, placement: [[2, -2], [3, -2]] },
        ],
        handList: [3, 59, 38],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [3, 0, 9, 7],
                    [0, 2, 9, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 59,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [7, 10, 2],
                    [3, 10, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [11, 7, 3],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 9, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 60, placement: [[-4, 1], [-4, 2]] },
            { dominoIndex: 4, placement: [[-3, 0], [-4, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 31, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 60, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [10, 1, 7],
                    [3, 9, 6, 1],
                    [8, 5, 11, 1],
                    [11, 2, 6, 10],
                ],
                points: 15,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 33, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 52, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 49, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 4, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [24, 35, 8],
        moves: [
            {
                dominoIndex: 35,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [3, 11, 7],
                    [8, 4, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [8, 0, 4],
                    [3, 8, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [2, 5, 9, 0],
                    [8, 5, 2],
                    [3, 8, 0, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 45, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 34, placement: [[3, -2], [2, -2]] },
        ],
        handList: [2, 60, 4],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [7, 4, 0],
                    [7, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 60,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [4, 7, 11],
                    [7, 0, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 2,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [0, 7, 3],
                    [2, 10, 4, 7],
                    [2, 4, 7, 11],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[1, -3], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[3, -3], [2, -2]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 7, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [8, 1, 4],
                    [0, 7, 4],
                ],
                points: 10,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 16, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 36, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 3, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 5, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 17, placement: [[2, -1], [1, -1]] },
        ],
        handList: [2, 48, 28],
        moves: [
            {
                dominoIndex: 2,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [6, 3, 9, 0],
                    [5, 0, 9, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 48,
                placement: [[-2, 5], [-1, 4]],
                pitchLists: [
                    [0, 2, 8, 5],
                    [5, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[-1, 5], [0, 5]],
                pitchLists: [
                    [5, 2, 9],
                    [5, 0, 8, 2],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 48, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[-3, 0], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 62, placement: [[-1, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [10, 4, 7, 1],
                    [7, 4, 1],
                    [1, 4, 10],
                    [8, 1, 4],
                    [4, 7, 1],
                ],
                points: 16,
            },
        ],
    },
}
