import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 19, placement: [[-1, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 6, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[-2, 0], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [1, 4, 7, 9],
                    [4, 9, 0, 6],
                ],
                points: 8,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 4, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 8, placement: [[1, 1], [1, 0]] },
        ],
        handList: [49, 44, 41],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [5, 8, 0, 3],
                    [9, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [10, 4, 7, 0],
                    [9, 5, 0, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [4, 7, 0, 8],
                    [7, 4, 0],
                    [3, 7, 10],
                ],
                points: 10,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 54, placement: [[2, -5], [1, -4]] },
            { dominoIndex: 48, placement: [[3, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[1, -2], [1, -1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 40, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 33, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[3, -2], [3, -3]] },
            { dominoIndex: 19, placement: [[5, -3], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [2, 3, 10, 6],
                    [9, 2, 6, 1],
                    [9, 8, 0, 4],
                ],
                points: 12,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 59, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 15, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 45, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 35, placement: [[-4, 3], [-3, 3]] },
        ],
        handList: [3, 60, 52],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-4, 2], [-5, 3]],
                pitchLists: [
                    [4, 7, 11],
                    [11, 3, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[-4, 1], [-5, 2]],
                pitchLists: [
                    [0, 4, 7, 10],
                    [0, 7, 3],
                    [3, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 52,
                placement: [[-6, 2], [-6, 3]],
                pitchLists: [
                    [6, 3, 7, 11],
                    [7, 11, 3, 8],
                    [0, 3, 7],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 19, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 8, placement: [[3, -1], [2, 0]] },
        ],
        handList: [35, 51, 25],
        moves: [
            {
                dominoIndex: 35,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [0, 3, 8],
                    [0, 8, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 51,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [11, 5, 8],
                    [0, 8, 3, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [11, 5, 8, 2],
                    [0, 3, 8, 6],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 27, placement: [[-1, -2], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 12, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [10, 4, 1],
                    [1, 7, 4],
                    [2, 7, 10],
                ],
                points: 9,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 11, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 6, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 3, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 27, placement: [[-1, 0], [-2, 0]] },
        ],
        handList: [28, 55, 2],
        moves: [
            {
                dominoIndex: 28,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [5, 2, 9],
                    [11, 2, 6],
                    [0, 3, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [3, 10, 6],
                    [9, 0, 6],
                    [11, 2, 6, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 2,
                placement: [[-2, 5], [-3, 5]],
                pitchLists: [
                    [3, 10, 6, 0],
                    [9, 0, 6, 2],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 16, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 23, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 18, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[2, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [4, 5, 1, 9],
                    [9, 8, 1, 5],
                    [4, 1, 9],
                    [9, 5, 1, 8],
                ],
                points: 15,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 58, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 60, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 44, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 17, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 4, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 12, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [33, 19, 14],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [11, 7, 3],
                    [10, 0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [9, 1, 6],
                    [3, 7, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [10, 6, 1],
                    [9, 1, 6, 4],
                    [11, 7, 3, 4],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 48, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 20, placement: [[4, -1], [3, 0]] },
        ],
        handList: [28, 13, 42],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [9, 2, 5],
                    [2, 11, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 13,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [6, 3, 1, 10],
                    [9, 2, 5, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 3, 4, 8],
                    [8, 1, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 44, placement: [[-2, 0], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[-1, 0], [-2, 1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 50, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [8, 1, 4],
                    [4, 7, 11],
                    [10, 1, 7],
                ],
                points: 9,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 60, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 24, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 29, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 6, placement: [[2, -1], [1, 0]] },
        ],
        handList: [54, 12, 49],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [1, 3, 9, 6],
                    [11, 2, 6],
                    [9, 2, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 49,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [5, 9, 2],
                    [9, 11, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 12,
                placement: [[3, 2], [2, 3]],
                pitchLists: [
                    [9, 2, 5, 1],
                    [5, 9, 2, 1],
                    [6, 10, 2],
                    [11, 5, 2],
                ],
                points: 14,
            },
        ],
        points: 33,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 2, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 49, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[2, 0], [1, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 37, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 60, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 24, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 55, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [2, 7, 11],
                    [2, 10, 6],
                    [5, 10, 2, 6],
                    [6, 10, 2],
                ],
                points: 13,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 15, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 48, placement: [[2, 2], [2, 1]] },
            { dominoIndex: 66, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 25, placement: [[-2, 4], [-1, 3]] },
        ],
        handList: [26, 34, 45],
        moves: [
            {
                dominoIndex: 26,
                placement: [[3, 1], [3, 2]],
                pitchLists: [
                    [10, 2, 7],
                    [2, 5, 10],
                    [10, 1, 5, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 45,
                placement: [[5, 1], [4, 1]],
                pitchLists: [
                    [8, 2, 11, 4],
                    [11, 7, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[5, 0], [4, 0]],
                pitchLists: [
                    [11, 10, 7, 3],
                    [3, 11, 7, 2],
                    [7, 2, 5, 10],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 41, placement: [[-2, 0], [-2, 1]] },
        ],
        handList: [59, 9, 4],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [4, 2, 10, 7],
                    [4, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [4, 7, 10, 0],
                    [6, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 5], [-3, 4]],
                pitchLists: [
                    [7, 4, 0],
                    [6, 9, 0, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 22, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 4, placement: [[-1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[1, 0], [0, 1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 51, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 24, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [6, 2, 11],
                    [5, 9, 2],
                    [6, 9, 2],
                    [11, 3, 6],
                ],
                points: 12,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 55, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 59, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[2, 0], [3, 0]] },
        ],
        handList: [36, 7, 34],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-1, 4], [-2, 5]],
                pitchLists: [
                    [10, 3, 7],
                ],
                points: 3,
            },
            {
                dominoIndex: 7,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [3, 0, 7],
                    [4, 7, 10, 0],
                    [0, 10, 3, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 36,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [3, 6, 10],
                    [7, 0, 9, 3],
                    [9, 3, 0, 7],
                    [9, 6, 3],
                ],
                points: 14,
            },
        ],
        points: 30,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 55, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 46, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 13, placement: [[1, 1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[1, -2], [1, -1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 19, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 15, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 64, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 35, placement: [[2, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [0, 8, 3],
                    [0, 5, 8],
                    [0, 3, 9],
                    [3, 5, 11, 8],
                ],
                points: 13,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 20, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 35, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 8, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 24, placement: [[3, 0], [3, -1]] },
        ],
        handList: [60, 4, 37],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [4, 10, 7],
                    [3, 4, 7, 11],
                    [8, 0, 3, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [0, 4, 10, 7],
                    [8, 0, 4],
                    [4, 7, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 37,
                placement: [[-5, 3], [-5, 2]],
                pitchLists: [
                    [8, 0, 4, 3],
                    [10, 4, 7, 1],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 52, placement: [[-2, 2], [-2, 3]] },
        ],
        handList: [30, 33, 56],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [2, 11, 6, 7],
                    [11, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [3, 11, 7],
                    [3, 6, 11],
                    [2, 6, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 56,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [6, 3, 11, 7],
                    [6, 11, 2],
                    [11, 3, 8],
                    [11, 6, 2],
                ],
                points: 13,
            },
        ],
        points: 31,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 66, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 54, placement: [[1, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 17, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 37, placement: [[-2, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [11, 7, 2, 5],
                    [1, 10, 7],
                    [10, 7, 3, 11],
                ],
                points: 11,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 9, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 47, placement: [[0, 3], [-1, 3]] },
        ],
        handList: [30, 19, 58],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [6, 2, 11],
                    [6, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 19,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [9, 1, 6, 4],
                    [9, 6, 2, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 58,
                placement: [[-4, 3], [-4, 2]],
                pitchLists: [
                    [6, 11, 2, 7],
                    [1, 6, 9],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
}
