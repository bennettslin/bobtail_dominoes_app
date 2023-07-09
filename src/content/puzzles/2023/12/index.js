import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 42, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 7, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 65, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 43, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[-2, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [0, 3, 7],
                    [8, 3, 0, 7],
                    [0, 3, 8],
                    [8, 0, 9, 4],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 38, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 9, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 25, placement: [[3, 0], [3, -1]] },
            { dominoIndex: 61, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 5, placement: [[3, -3], [2, -2]] },
        ],
        handList: [48, 13, 49],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [5, 0, 9, 3],
                    [8, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 13,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [1, 8, 4, 11],
                    [10, 5, 1],
                    [0, 8, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 49,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [0, 8, 3, 5],
                    [10, 5, 1, 9],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [24, 28, 55],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [2, 0, 6, 9],
                    [9, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [10, 6, 3],
                    [0, 6, 9],
                    [10, 9, 2, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 24,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [10, 6, 3, 2],
                    [5, 2, 10, 9],
                    [2, 9, 0, 6],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[2, 0], [1, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 40, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 28, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 60, placement: [[0, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [4, 0, 8],
                    [0, 3, 9],
                    [8, 3, 7, 11],
                ],
                points: 10,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 9, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 6, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 4, placement: [[-1, 2], [-1, 1]] },
        ],
        handList: [3, 35, 54],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [8, 6, 3, 0],
                    [6, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [3, 8, 0],
                    [6, 0, 3],
                    [4, 0, 8],
                    [6, 0, 3, 8],
                ],
                points: 13,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [6, 3, 8, 0],
                    [6, 0, 3, 9],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 33, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 36, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 47, placement: [[1, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[1, -1], [0, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 19, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 34, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [6, 7, 2, 10],
                    [2, 5, 11],
                    [2, 10, 5],
                    [10, 5, 2, 9],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 55, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 9, placement: [[3, -5], [3, -4]] },
            { dominoIndex: 26, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
        ],
        handList: [24, 51],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [9, 2, 6],
                    [5, 2, 10, 7],
                    [9, 2, 6],
                    [0, 5, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 51,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [5, 11, 2, 7],
                    [11, 1, 4, 8],
                    [9, 2, 6, 11],
                ],
                points: 12,
            },
        ],
        points: 25,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 35, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [60, 45, 25],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [2, 5, 11, 7],
                    [7, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [4, 11, 8],
                    [7, 10, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [4, 11, 8, 2],
                    [11, 10, 6, 2],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 23, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 21, placement: [[1, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, 0], [0, 1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 18, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [8, 1, 5],
                    [5, 8, 11],
                    [4, 8, 11],
                    [11, 5, 2],
                ],
                points: 12,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 48, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 29, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-2, 1], [-2, 0]] },
        ],
        handList: [41, 54, 50],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [4, 10, 7, 2],
                    [7, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [10, 5, 2],
                    [7, 4, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [0, 2, 9, 6],
                    [7, 10, 2, 6],
                    [10, 5, 2, 9],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 6, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 14, placement: [[-2, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[-1, 1], [0, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 29, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 8, placement: [[0, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 18,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [10, 4, 8, 1],
                    [1, 5, 8],
                    [8, 5, 11],
                    [8, 11, 5],
                ],
                points: 13,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 27, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 3, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 7, placement: [[-1, 1], [0, 1]] },
        ],
        handList: [35, 41, 56],
        moves: [
            {
                dominoIndex: 35,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [8, 0, 5, 3],
                    [0, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [11, 0, 7, 4],
                    [4, 0, 3, 8],
                    [3, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 56,
                placement: [[4, 1], [3, 1]],
                pitchLists: [
                    [3, 11, 6],
                    [3, 7, 0, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 39, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 28, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 1, placement: [[3, -3], [2, -3]] },
        ],
        handList: [49, 4, 54],
        moves: [
            {
                dominoIndex: 49,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [5, 8, 2],
                    [1, 4, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[3, -1], [4, -2]],
                pitchLists: [
                    [5, 8, 2, 0],
                    [4, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [4, 0, 9, 6],
                    [5, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [1, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 38, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 52, placement: [[0, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 61,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [5, 11, 8],
                    [8, 3, 11, 6],
                    [9, 11, 2, 5],
                ],
                points: 11,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 39, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 27, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 51, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 59, placement: [[2, -4], [3, -4]] },
        ],
        handList: [45, 17, 24],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 7, 10],
                    [4, 11, 8],
                    [7, 11, 4],
                ],
                points: 9,
            },
            {
                dominoIndex: 17,
                placement: [[3, -5], [3, -6]],
                pitchLists: [
                    [7, 1, 10],
                    [1, 7, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [4, 7, 10, 2],
                    [2, 5, 11],
                    [11, 2, 5],
                    [7, 1, 10, 5],
                ],
                points: 14,
            },
        ],
        points: 32,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 37, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 34, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 63, placement: [[0, 3], [0, 4]] },
            { dominoIndex: 27, placement: [[3, 2], [3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[2, 0], [3, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 56, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 26, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 16, placement: [[-2, 1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [10, 2, 6, 11],
                    [8, 10, 2, 5],
                    [6, 1, 10, 5],
                ],
                points: 12,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 37, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 38, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 14, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 41, placement: [[2, 2], [1, 2]] },
        ],
        handList: [48, 60, 32],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [1, 5, 8],
                    [2, 10, 5],
                    [8, 11, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 60,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [7, 8, 11, 3],
                    [4, 7, 11],
                    [2, 10, 5, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 32,
                placement: [[-3, 5], [-4, 5]],
                pitchLists: [
                    [4, 7, 11, 3],
                    [8, 11, 5],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[1, -4], [1, -3]] },
        ],
        handList: [63, 16, 4],
        moves: [
            {
                dominoIndex: 63,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [2, 8, 11],
                    [8, 5, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [10, 6, 1],
                    [6, 2, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [4, 0, 8],
                    [4, 10, 6, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[3, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[3, 0], [2, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 4, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[2, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [8, 4, 11],
                    [1, 4, 8],
                    [2, 8, 11],
                ],
                points: 9,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 35, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 36, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 25, placement: [[3, 0], [3, -1]] },
        ],
        handList: [3, 26, 56],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [0, 3, 8],
                    [0, 9, 5],
                    [3, 9, 0],
                ],
                points: 9,
            },
            {
                dominoIndex: 26,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [2, 0, 9, 5],
                    [7, 0, 3, 8],
                    [7, 3, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 56,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [11, 6, 7, 2],
                    [6, 3, 9, 0],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 27, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 34, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 19, placement: [[3, -1], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[0, 0], [1, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 27, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 49, placement: [[-4, 2], [-3, 1]] },
            { dominoIndex: 24, placement: [[-2, 0], [-3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [9, 5, 2],
                    [2, 5, 8],
                    [9, 8, 5, 1],
                    [5, 2, 8, 11],
                ],
                points: 14,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 53, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 34, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 4, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 50, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 38, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 45, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 7, placement: [[-3, 0], [-2, 0]] },
        ],
        handList: [9, 54, 44],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [0, 9, 3],
                    [0, 4, 11, 7],
                    [9, 0, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [0, 6, 9],
                    [6, 9, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[4, -3], [3, -2]],
                pitchLists: [
                    [0, 6, 9, 4],
                    [4, 10, 7],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
}
