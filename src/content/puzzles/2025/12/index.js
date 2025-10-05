import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 20, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 14, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [44, 57, 24],
        moves: [
            {
                dominoIndex: 44,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [7, 0, 10, 4],
                    [9, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [5, 2, 9],
                    [2, 6, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 57,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [7, 4, 10],
                    [2, 6, 10, 7],
                    [9, 1, 4, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 37, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 18, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 62, placement: [[-2, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [8, 1, 4],
                    [7, 1, 10],
                    [7, 4, 1],
                ],
                points: 9,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 39, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 30, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 19, placement: [[1, 1], [0, 1]] },
        ],
        handList: [48, 38, 9],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [1, 9, 8, 5],
                    [11, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [3, 11, 5, 8],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [0, 9, 4, 5],
                    [9, 6, 3, 11],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 43, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 50, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 17, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 2, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 37, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 20, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 33, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 60, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [7, 2, 11],
                    [11, 2, 6],
                    [2, 10, 6, 3],
                    [11, 6, 3, 10],
                ],
                points: 14,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 35, placement: [[1, 3], [0, 4]] },
            { dominoIndex: 51, placement: [[3, 2], [2, 2]] },
            { dominoIndex: 14, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 8, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 64, placement: [[2, 0], [2, -1]] },
        ],
        handList: [5, 37, 26],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-1, 4], [-1, 5]],
                pitchLists: [
                    [8, 0, 5],
                    [8, 4, 0],
                    [11, 3, 8, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 37,
                placement: [[-1, 6], [0, 5]],
                pitchLists: [
                    [8, 0, 5, 3],
                    [1, 4, 8, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 26,
                placement: [[-3, 5], [-2, 5]],
                pitchLists: [
                    [2, 7, 5, 10],
                    [8, 4, 0, 7],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 21, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 33, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 63, placement: [[2, -2], [1, -1]] },
        ],
        handList: [41, 5, 18],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [11, 4, 8],
                    [7, 4, 11],
                    [7, 11, 3, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 5,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [7, 4, 11, 0],
                    [3, 8, 11, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 18,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [11, 4, 8, 1],
                    [8, 1, 5, 0],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[0, 0], [0, -1]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 11, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [2, 9, 6],
                    [11, 3, 6],
                    [0, 6, 9],
                ],
                points: 9,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 38, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 30, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
        ],
        handList: [41, 35, 17],
        moves: [
            {
                dominoIndex: 35,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [0, 8, 3],
                    [11, 4, 8],
                    [8, 3, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [4, 0, 8, 3],
                    [4, 7, 11],
                    [2, 11, 8, 4],
                    [8, 4, 0, 7],
                ],
                points: 15,
            },
            {
                dominoIndex: 17,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [4, 7, 11, 1],
                    [8, 3, 11, 7],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 16, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 44, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 47, placement: [[3, -3], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[2, -2], [1, -1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 2, placement: [[5, -2], [4, -1]] },
            { dominoIndex: 19, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 43, placement: [[3, -3], [4, -3]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[3, -2], [4, -2]],
                pitchLists: [
                    [9, 1, 5, 0],
                    [4, 1, 9],
                    [9, 1, 6],
                    [9, 5, 2],
                ],
                points: 13,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 55, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 49, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 29, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 42, placement: [[0, -1], [-1, -1]] },
        ],
        handList: [26, 41, 38],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [10, 7, 2],
                    [6, 10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [4, 10, 7, 2],
                    [0, 10, 7, 4],
                    [2, 7, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 5], [-3, 6]],
                pitchLists: [
                    [2, 7, 10, 3],
                    [7, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 23, placement: [[3, -4], [3, -3]] },
        ],
        handList: [34, 43, 18],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [7, 3, 10],
                    [3, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 43,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [9, 4, 1],
                    [9, 3, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [1, 7, 3, 10],
                    [8, 9, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 5, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 49, placement: [[2, -4], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[1, -1], [2, -2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 40, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 49, placement: [[-2, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [5, 8, 0, 1],
                    [1, 9, 4],
                    [0, 9, 6],
                ],
                points: 10,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 46, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 59, placement: [[1, -2], [0, -1]] },
        ],
        handList: [60, 34, 4],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [7, 10, 2],
                    [11, 7, 2, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[-2, -1], [-3, 0]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [11, 3, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [0, 4, 10, 7],
                    [0, 11, 3, 7],
                    [11, 4, 7],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 3, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 45, placement: [[1, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[-1, 2], [-1, 3]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 58, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 27, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 63, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[-2, 1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [5, 11, 2],
                    [5, 8, 11],
                    [11, 5, 2, 9],
                    [11, 8, 3],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 15, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 18, placement: [[3, 0], [3, -1]] },
            { dominoIndex: 61, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 14, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 63, placement: [[-1, 2], [-2, 2]] },
        ],
        handList: [48, 24, 3],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [11, 2, 5],
                    [5, 11, 8, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [8, 5, 11, 1],
                    [9, 2, 5, 11],
                    [8, 11, 2, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 3,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [8, 3, 0],
                    [3, 11, 8, 5],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
        ],
        handList: [63, 33, 37],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [11, 7, 3],
                    [11, 3, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [3, 10, 6],
                    [11, 7, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [4, 8, 11],
                    [5, 11, 2, 8],
                    [3, 10, 6, 11],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 7, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 63, placement: [[0, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[1, -2], [1, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 4, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 56, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 29, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [3, 10, 6],
                    [0, 3, 7],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 19, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 50, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 41, placement: [[2, -1], [1, -1]] },
        ],
        handList: [24, 8, 40],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [5, 2, 8],
                    [10, 2, 5],
                    [1, 8, 5],
                ],
                points: 9,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [5, 8, 0],
                    [1, 8, 5, 0],
                    [5, 2, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 40,
                placement: [[-2, 5], [-1, 4]],
                pitchLists: [
                    [5, 8, 0, 4],
                    [10, 2, 5, 6],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 60, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 26, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 39, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, 1], [0, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 10, placement: [[-4, 1], [-4, 2]] },
            { dominoIndex: 33, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 25, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 1, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [5, 9, 0, 1],
                    [5, 2, 10, 6],
                    [9, 6, 3],
                    [9, 2, 6, 10],
                ],
                points: 15,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 27, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 30, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 18, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 56, placement: [[1, -1], [1, -2]] },
        ],
        handList: [34, 8, 45],
        moves: [
            {
                dominoIndex: 34,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [11, 7, 3],
                    [7, 6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [0, 11, 7, 3],
                    [0, 8, 3, 5],
                    [11, 8, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [11, 4, 7],
                    [4, 11, 8, 2],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 39, placement: [[3, 0], [3, 1]] },
        ],
        handList: [34, 63, 3],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [3, 7, 0],
                    [7, 3, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [3, 11, 8],
                    [11, 7, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [8, 0, 4, 5],
                    [11, 3, 8],
                    [8, 3, 0],
                ],
                points: 13,
            },
        ],
        points: 28,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 2, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 46, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 61, placement: [[0, -1], [0, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 33, placement: [[-3, 2], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [3, 7, 10, 11],
                    [7, 11, 6, 3],
                ],
                points: 8,
            },
        ],
    },
}
