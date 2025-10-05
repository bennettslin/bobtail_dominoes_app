import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 5, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 42, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 65, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 19, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 4, placement: [[3, 0], [3, -1]] },
            { dominoIndex: 17, placement: [[1, 1], [1, 0]] },
        ],
        handList: [8, 43, 54],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [10, 7, 1, 4],
                    [0, 9, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [5, 9, 0],
                    [4, 0, 8],
                    [10, 1, 4, 8],
                    [8, 0, 9, 4],
                ],
                points: 14,
            },
            {
                dominoIndex: 54,
                placement: [[5, 0], [4, 0]],
                pitchLists: [
                    [0, 9, 6],
                    [4, 0, 8, 9],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 45, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 35, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [4, 60, 9],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [8, 0, 4],
                    [0, 1, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[3, -1], [2, 0]],
                pitchLists: [
                    [8, 0, 4, 7],
                    [7, 11, 3, 4],
                    [4, 11, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [4, 9, 0],
                    [4, 11, 8, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 28, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 54, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[1, -1], [2, -2]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 25, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 9, placement: [[-2, 0], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [2, 9, 6],
                    [6, 3, 9],
                    [9, 3, 6, 0],
                    [9, 6, 0],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 65, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 28, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 34, placement: [[0, 1], [1, 1]] },
        ],
        handList: [33, 60, 26],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [3, 6, 9],
                    [6, 11, 3, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [3, 7, 11],
                    [3, 6, 9, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [11, 2, 7],
                    [11, 7, 2],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 47, placement: [[-2, 2], [-2, 1]] },
            { dominoIndex: 62, placement: [[0, 3], [-1, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 2], [-1, 3]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 38, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 35, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 5, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 7, placement: [[-2, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 8, 5],
                    [3, 8, 11],
                    [0, 8, 3],
                    [0, 7, 3, 11],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 35, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 25, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 28, placement: [[1, -3], [2, -4]] },
        ],
        handList: [49, 15, 14],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [9, 5, 2, 0],
                    [5, 10, 6, 2],
                    [8, 11, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 15,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [5, 1, 10, 9],
                    [8, 11, 5, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [1, 5, 8],
                    [4, 9, 1],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[1, -1], [2, -1]] },
        ],
        handList: [3, 29, 48],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [9, 3, 0],
                    [0, 6, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [5, 9, 3, 0],
                    [0, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [10, 2, 5, 9],
                    [2, 0, 8, 5],
                    [10, 0, 6, 3],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 52, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 48, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, -1], [0, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 63, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [7, 11, 2],
                    [11, 6, 2],
                    [2, 11, 6],
                    [8, 3, 11],
                ],
                points: 12,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 38, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 41, placement: [[1, -1], [1, -2]] },
        ],
        handList: [4, 8, 59],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [7, 0, 4],
                    [0, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [10, 7, 4],
                    [7, 0, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 4, 8, 0],
                    [10, 7, 4, 0],
                    [0, 8, 5],
                    [4, 8, 1, 11],
                ],
                points: 15,
            },
        ],
        points: 30,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 26, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 50, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[-1, 2], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 31, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 30, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 48, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 25, placement: [[2, 0], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [11, 7, 2],
                    [2, 7, 10],
                    [11, 7, 4],
                    [6, 2, 10, 3],
                ],
                points: 13,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 50, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 63, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 24, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 54, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 29, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -3]] },
        ],
        handList: [38, 59, 26],
        moves: [
            {
                dominoIndex: 38,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [3, 11, 8],
                    [11, 5, 9, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [7, 3, 11, 8],
                    [10, 8, 5, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 26,
                placement: [[0, -3], [0, -4]],
                pitchLists: [
                    [2, 8, 11],
                    [7, 10, 2],
                    [7, 10, 3],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 32, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 6, placement: [[1, 2], [1, 1]] },
        ],
        handList: [61, 37, 9],
        moves: [
            {
                dominoIndex: 61,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [8, 11, 5],
                    [9, 3, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [8, 11, 5, 3],
                    [6, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [3, 5, 9, 0],
                    [9, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 62, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 3, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 1], [0, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 2, placement: [[2, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [4, 10, 1],
                    [8, 5, 1],
                    [2, 5, 10],
                ],
                points: 9,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 15, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 52, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 64, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 2, placement: [[0, -3], [-1, -3]] },
        ],
        handList: [49, 29, 25],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [2, 0, 5, 9],
                    [5, 10, 1, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[1, -4], [1, -5]],
                pitchLists: [
                    [10, 2, 5],
                    [2, 0, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [9, 10, 6, 2],
                    [10, 2, 5, 6],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 17, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 30, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 24, placement: [[2, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[2, 0], [1, 0]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 10, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 30, placement: [[-2, -1], [-2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [3, 7, 0],
                    [11, 2, 7, 3],
                    [7, 0, 3],
                    [4, 0, 7],
                    [10, 4, 7],
                ],
                points: 16,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 4, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 19, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 7, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 37, placement: [[-2, -1], [-2, -2]] },
        ],
        handList: [15, 42, 55],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [7, 10, 4, 1],
                    [0, 3, 9, 5],
                    [9, 1, 4, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 42,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [1, 0, 8, 4],
                    [5, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [9, 4, 0, 6],
                    [5, 1, 8, 10],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 12, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[1, 1], [0, 2]] },
        ],
        handList: [49, 29, 1],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [5, 8, 2],
                    [1, 9, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [2, 10, 6],
                    [11, 5, 2],
                    [1, 9, 5, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 1,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [5, 8, 2, 0],
                    [2, 10, 6, 1],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 33, placement: [[2, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, 2], [0, 3]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 47, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 24, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 4, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [2, 11, 8],
                    [7, 0, 4, 8],
                    [5, 2, 9, 11],
                ],
                points: 11,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 9, placement: [[-1, 0], [-1, 1]] },
        ],
        handList: [15, 29],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [5, 1, 9],
                    [4, 9, 1],
                    [5, 9, 1],
                    [9, 0, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 29,
                placement: [[-1, 3], [-2, 4]],
                pitchLists: [
                    [0, 9, 5, 2],
                    [5, 1, 9, 10],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 24, placement: [[1, 3], [0, 4]] },
            { dominoIndex: 19, placement: [[3, 2], [2, 2]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[1, 1], [1, 2]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 56, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [0, 6, 3],
                    [8, 11, 3],
                    [8, 3, 11],
                    [11, 6, 3],
                ],
                points: 12,
            },
        ],
    },
}
