import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 3, placement: [[-1, 0], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 0], [0, -1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 16, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 59, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [10, 3, 6],
                    [1, 10, 6],
                    [6, 9, 1],
                    [10, 3, 7],
                ],
                points: 12,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 37, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 12, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 30, placement: [[1, -3], [2, -3]] },
        ],
        handList: [55, 60, 34],
        moves: [
            {
                dominoIndex: 55,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [10, 2, 6],
                    [1, 4, 10, 6],
                    [7, 2, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 60,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 10, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[2, -5], [2, -4]],
                pitchLists: [
                    [3, 7, 11],
                    [7, 2, 11],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 6, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 41, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 28, placement: [[0, -2], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 42, placement: [[2, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [0, 9, 6, 2],
                    [1, 5, 9, 2],
                    [5, 2, 10],
                    [1, 9, 5],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 49, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 44, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 16, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 14, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 19, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 62, placement: [[3, -2], [3, -3]] },
        ],
        handList: [42, 51, 22],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -4], [2, -4]],
                pitchLists: [
                    [4, 1, 9],
                    [8, 5, 1, 9],
                    [8, 1, 4, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[1, -5], [0, -4]],
                pitchLists: [
                    [5, 4, 1, 9],
                    [11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[-1, -3], [-1, -4]],
                pitchLists: [
                    [5, 11, 2],
                    [3, 11, 4, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 28, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 17, placement: [[2, 1], [2, 2]] },
        ],
        handList: [4, 59, 43],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, 3], [2, 3]],
                pitchLists: [
                    [1, 7, 4],
                ],
                points: 3,
            },
            {
                dominoIndex: 43,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [9, 4, 0],
                    [1, 4, 9],
                    [9, 0, 4],
                ],
                points: 9,
            },
            {
                dominoIndex: 59,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 7, 10],
                    [7, 9, 4, 0],
                    [10, 1, 7, 4],
                ],
                points: 11,
            },
        ],
        points: 25,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 5, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 16, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 58, placement: [[1, -1], [2, -1]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 47, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 48, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [1, 5, 10],
                    [8, 1, 4],
                    [4, 8, 0, 5],
                ],
                points: 10,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 18, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 50, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 16, placement: [[1, -3], [1, -4]] },
        ],
        handList: [29, 49, 15],
        moves: [
            {
                dominoIndex: 29,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [6, 10, 2],
                    [10, 1, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 49,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [6, 10, 2, 5],
                    [5, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[3, -6], [3, -5]],
                pitchLists: [
                    [1, 5, 2, 9],
                    [5, 10, 1, 7],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 3, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 26, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 60, placement: [[0, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 42, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 24, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 15, placement: [[2, 0], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [9, 1, 8, 5],
                    [10, 1, 4],
                    [4, 1, 8],
                    [5, 2, 10, 9],
                ],
                points: 14,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 12, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 59, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 33, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 29, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 50, placement: [[3, -4], [2, -4]] },
        ],
        handList: [9, 41, 4],
        moves: [
            {
                dominoIndex: 9,
                placement: [[3, -5], [3, -6]],
                pitchLists: [
                    [9, 0, 5],
                    [0, 10, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[2, -5], [1, -5]],
                pitchLists: [
                    [7, 4, 0],
                    [4, 10, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[2, -6], [3, -7]],
                pitchLists: [
                    [0, 4, 10, 7],
                    [4, 0, 7],
                    [4, 9, 0, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 7, placement: [[0, -3], [-1, -2]] },
        ],
        handList: [5, 43, 49],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [0, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 43,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [0, 4, 9],
                    [4, 0, 5, 8],
                    [9, 0, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 49,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [5, 0, 4, 9],
                    [9, 7, 3, 0],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 25, placement: [[1, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[1, 0], [0, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 5, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 61, placement: [[0, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [9, 5, 2],
                    [2, 11, 5],
                    [8, 5, 11],
                ],
                points: 9,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 25, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 41, placement: [[2, 1], [2, 2]] },
        ],
        handList: [37, 20, 47],
        moves: [
            {
                dominoIndex: 37,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [3, 10, 11, 6],
                    [10, 0, 4, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 20,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [1, 6, 10],
                    [10, 1, 4, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 47,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [5, 1, 6, 10],
                    [7, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 3, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 7, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 33, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 49, placement: [[2, 1], [3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[3, 0], [2, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 51, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 38, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 7, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 55, placement: [[1, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [9, 3, 11, 6],
                    [0, 3, 8],
                    [7, 3, 11],
                    [0, 9, 5],
                ],
                points: 13,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 45, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 3, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 62, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 30, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 27, placement: [[-2, 2], [-2, 3]] },
        ],
        handList: [25, 63, 6],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [2, 11, 5],
                    [3, 10, 6, 2],
                    [6, 2, 9],
                    [6, 11, 2, 8],
                ],
                points: 14,
            },
            {
                dominoIndex: 63,
                placement: [[-3, -1], [-3, 0]],
                pitchLists: [
                    [8, 11, 2],
                    [11, 6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[-2, -2], [-3, -2]],
                pitchLists: [
                    [6, 0, 8, 3],
                    [6, 8, 11, 2],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 58, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 15, placement: [[-2, 2], [-3, 3]] },
        ],
        handList: [30, 17, 14],
        moves: [
            {
                dominoIndex: 17,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [7, 1, 10],
                    [1, 7, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [7, 4, 1],
                    [4, 1, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [2, 6, 10, 1],
                    [11, 7, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 50, placement: [[-2, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 1], [0, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 52, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 30, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [6, 3, 10],
                    [0, 7, 3],
                    [7, 2, 11, 6],
                ],
                points: 10,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 33, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 29, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 24, placement: [[0, 2], [1, 1]] },
        ],
        handList: [49, 8, 35],
        moves: [
            {
                dominoIndex: 49,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [11, 2, 5, 9],
                    [9, 11, 5, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [5, 8, 0],
                    [5, 11, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 35,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [5, 11, 8, 3],
                    [0, 3, 8],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 29, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 60, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 35, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 30, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 33, placement: [[3, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [4, 8, 11, 2],
                    [4, 11, 7],
                    [11, 3, 6],
                    [8, 11, 2],
                ],
                points: 13,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 10, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 18, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 63, placement: [[1, 3], [0, 3]] },
            { dominoIndex: 45, placement: [[2, 0], [3, -1]] },
        ],
        handList: [34, 51, 26],
        moves: [
            {
                dominoIndex: 34,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [3, 11, 8],
                    [3, 7, 0, 10],
                    [7, 4, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 51,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [5, 3, 11, 8],
                    [11, 7, 4, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 26,
                placement: [[4, -2], [5, -2]],
                pitchLists: [
                    [11, 3, 2, 7],
                    [2, 11, 4, 7],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 21, placement: [[3, -1], [2, 0]] },
        ],
        handList: [48, 56, 36],
        moves: [
            {
                dominoIndex: 48,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [1, 8, 5],
                    [6, 3, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [11, 6, 3],
                    [11, 1, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 36,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [3, 6, 11],
                    [3, 9, 6],
                    [3, 9, 6, 1],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 7, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 44, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[1, -1], [2, -2]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 63, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 11, 8],
                    [0, 6, 3, 10],
                    [10, 8, 2, 5],
                ],
                points: 11,
            },
        ],
    },
}
