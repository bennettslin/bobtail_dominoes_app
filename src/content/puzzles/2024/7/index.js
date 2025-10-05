import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 53, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 27, placement: [[2, 0], [2, 1]] },
        ],
        handList: [3, 48, 63],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [8, 11, 5],
                    [11, 2, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [3, 0, 8],
                    [6, 0, 3],
                    [8, 11, 5, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [2, 0, 8, 5],
                    [6, 0, 3, 8],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 18, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 43, placement: [[1, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[3, 0], [2, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 1, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 49, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 54, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [1, 9, 0, 5],
                    [7, 4, 1],
                    [4, 9, 1],
                ],
                points: 10,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 52, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 30, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 56, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
        ],
        handList: [41, 37],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [4, 11, 8, 3],
                    [4, 7, 11],
                    [7, 3, 0, 9],
                    [11, 7, 2],
                ],
                points: 14,
            },
            {
                dominoIndex: 37,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [11, 7, 2, 3],
                    [10, 2, 11, 6],
                ],
                points: 8,
            },
        ],
        points: 22,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 49, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 17, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 45, placement: [[-2, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 2], [0, 1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 51, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 19, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 26, placement: [[-1, -2], [0, -3]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, -4], [1, -4]],
                pitchLists: [
                    [2, 11, 5],
                    [2, 5, 9],
                    [10, 5, 1, 9],
                    [10, 7, 2],
                ],
                points: 13,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 10, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 15, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 55, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 42, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 19, placement: [[2, -3], [3, -3]] },
        ],
        handList: [43, 24, 6],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [4, 1, 9],
                    [9, 4, 1],
                    [9, 1, 4, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 6,
                placement: [[3, -4], [3, -5]],
                pitchLists: [
                    [6, 0, 9],
                    [6, 9, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [6, 0, 9, 2],
                    [5, 2, 8, 10],
                    [4, 1, 9, 5],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 39, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [18, 20, 55],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [1, 8, 5],
                    [11, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [1, 10, 5],
                    [1, 11, 4, 8],
                    [10, 1, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [1, 6, 10],
                    [6, 10, 1, 5],
                ],
                points: 7,
            },
        ],
        points: 25,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 6, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[2, -2], [1, -1]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 6, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 18, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [0, 4, 8, 1],
                    [6, 9, 0],
                    [9, 4, 1, 7],
                ],
                points: 11,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 6, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 33, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[1, -2], [2, -2]] },
        ],
        handList: [48, 44, 18],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [5, 6, 1, 10],
                    [0, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 10, 1],
                    [4, 0, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [4, 1, 8],
                    [1, 10, 6],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 59, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 11, placement: [[-1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[1, 0], [0, 1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 20, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 24, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 46, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 28, placement: [[-1, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [1, 2, 9, 6],
                    [6, 1, 10, 5],
                    [5, 9, 1],
                    [9, 5, 0],
                ],
                points: 14,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 12, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 15, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 54, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 27, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 2, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 49, placement: [[-3, 4], [-3, 3]] },
        ],
        handList: [50, 64, 14],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [10, 5, 1],
                    [8, 5, 2],
                    [10, 2, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 64,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [9, 8, 1, 5],
                    [10, 8, 5, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [1, 10, 4],
                    [4, 1, 9],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 39, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
        ],
        handList: [49, 20, 27],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [2, 5, 9],
                    [0, 4, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 9, 4],
                    [4, 10, 1],
                    [10, 2, 5, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 27,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [2, 8, 10, 5],
                    [8, 1, 9, 4],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 43, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 1, placement: [[1, 0], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[-1, 1], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 18, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 20, placement: [[0, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [4, 11, 7],
                    [4, 8, 1],
                    [2, 8, 11],
                ],
                points: 9,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 8, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 24, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 38, placement: [[2, -5], [2, -4]] },
        ],
        handList: [19, 9, 25],
        moves: [
            {
                dominoIndex: 9,
                placement: [[4, -5], [3, -5]],
                pitchLists: [
                    [3, 9, 0],
                    [9, 11, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[4, -4], [5, -5]],
                pitchLists: [
                    [6, 2, 11],
                    [3, 9, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [5, 4, 9, 1],
                    [3, 11, 6, 9],
                    [6, 2, 11, 9],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 6, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 33, placement: [[-3, 2], [-3, 1]] },
            { dominoIndex: 35, placement: [[-2, 3], [-3, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 43, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 20, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 4, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [5, 0, 9],
                    [5, 9, 1, 10],
                    [9, 4, 1],
                    [6, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 8, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 17, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 63, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 4, placement: [[4, -2], [3, -1]] },
        ],
        handList: [36, 25, 50],
        moves: [
            {
                dominoIndex: 36,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [3, 11, 8, 4],
                    [9, 3, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[3, -4], [3, -5]],
                pitchLists: [
                    [2, 7, 11, 3],
                    [6, 9, 3, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 50,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [9, 2, 5],
                    [3, 7, 10],
                    [6, 2, 10],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 44, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [-1, -1]] },
        ],
        handList: [5, 27, 59],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [0, 2, 6, 9],
                    [5, 2, 10, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 27,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [7, 10, 2, 4],
                    [10, 6, 1],
                    [2, 8, 5, 10],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 50, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 52, placement: [[0, 0], [-1, 1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 17, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 14, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 66,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [10, 2, 7],
                    [10, 7, 1],
                    [11, 7, 4, 1],
                ],
                points: 10,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 2, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 32, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 48, placement: [[3, -1], [3, 0]] },
        ],
        handList: [11, 54, 36],
        moves: [
            {
                dominoIndex: 11,
                placement: [[4, -1], [4, 0]],
                pitchLists: [
                    [0, 8, 5, 2],
                    [3, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[5, 0], [5, -1]],
                pitchLists: [
                    [3, 8, 11, 6],
                    [5, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 36,
                placement: [[6, -1], [7, -2]],
                pitchLists: [
                    [5, 0, 9, 3],
                    [9, 3, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 35, placement: [[-2, -1], [-2, -2]] },
            { dominoIndex: 51, placement: [[-1, -3], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 17, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 23, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 43, placement: [[2, 2], [2, 3]] },
            { dominoIndex: 58, placement: [[2, 0], [3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [3, 0, 7, 9],
                    [0, 4, 7],
                    [0, 7, 3],
                    [7, 4, 1],
                    [7, 4, 11, 2],
                ],
                points: 17,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 27, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 28, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 50, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 15, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 64, placement: [[-3, 3], [-4, 3]] },
        ],
        handList: [59, 33, 14],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [7, 2, 5, 10],
                    [7, 10, 1],
                    [10, 2, 8, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-4, 2], [-4, 1]],
                pitchLists: [
                    [6, 3, 10],
                    [7, 10, 1, 3],
                    [6, 1, 9, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 4], [-3, 4]],
                pitchLists: [
                    [6, 3, 10, 1],
                    [1, 5, 9, 4],
                ],
                points: 8,
            },
        ],
        points: 32,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 20, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 39, placement: [[1, -3], [2, -3]] },
        ],
        handList: [17, 4, 30],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [9, 5, 1],
                    [5, 1, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [0, 4, 8],
                    [9, 5, 1, 0],
                    [7, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [8, 11, 2],
                    [7, 1, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 21, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[-1, 1], [0, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 11, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [2, 8, 11],
                    [2, 5, 8],
                    [0, 8, 5],
                ],
                points: 9,
            },
        ],
    },
}
