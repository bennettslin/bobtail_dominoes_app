import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 13, placement: [[1, 0], [1, 1]] },
        ],
        handList: [58, 63, 33],
        moves: [
            {
                dominoIndex: 58,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [0, 3, 7],
                    [5, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [8, 5, 1, 9],
                    [8, 11, 5],
                    [11, 0, 3, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [9, 3, 6],
                    [8, 11, 5, 3],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 63, placement: [[2, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[2, 0], [1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 17, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [1, 4, 7],
                    [10, 4, 1],
                    [10, 1, 8, 4],
                ],
                points: 10,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 18, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 45, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 34, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[2, -1], [2, -2]] },
        ],
        handList: [24, 54, 3],
        moves: [
            {
                dominoIndex: 24,
                placement: [[3, 0], [2, 1]],
                pitchLists: [
                    [11, 7, 3, 2],
                    [8, 0, 3, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 54,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [0, 6, 9],
                    [9, 2, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[5, -2], [5, -1]],
                pitchLists: [
                    [0, 9, 2, 5],
                    [0, 6, 9, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 2, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 8, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 15, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 54, placement: [[2, -2], [3, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, -1], [1, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 38, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [7, 11, 2, 6],
                    [3, 11, 7, 2],
                    [7, 10, 2, 5],
                    [3, 10, 6],
                ],
                points: 15,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 61, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 12, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 24, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 49, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 55, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 64, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [34, 6, 3],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [3, 9, 0, 5],
                    [7, 10, 5, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 6,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [7, 3, 0],
                    [5, 9, 0],
                    [10, 3, 6],
                ],
                points: 9,
            },
            {
                dominoIndex: 3,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [0, 9, 5],
                    [6, 3, 0],
                    [5, 9, 0, 3],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 18, placement: [[1, -1], [2, -1]] },
        ],
        handList: [26, 4, 34],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [10, 2, 7],
                    [8, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [0, 4, 1, 8],
                    [4, 10, 2, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 34,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [3, 7, 10, 11],
                    [0, 7, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 44, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 27, placement: [[-3, 1], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 60, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 34, placement: [[-1, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [2, 6, 9],
                    [6, 10, 3],
                    [9, 2, 5, 11],
                ],
                points: 10,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 34, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 24, placement: [[-2, 4], [-1, 3]] },
        ],
        handList: [38, 60, 48],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [3, 8, 11, 5],
                    [7, 11, 3],
                    [3, 11, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 60,
                placement: [[-4, 2], [-4, 1]],
                pitchLists: [
                    [7, 11, 4],
                    [11, 7, 3],
                    [11, 3, 7, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[-3, 0], [-4, 0]],
                pitchLists: [
                    [5, 3, 11, 8],
                    [8, 11, 7, 3],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 17, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 15, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 50, placement: [[1, -3], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 10, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 36, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 33, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 6, placement: [[3, 0], [4, -1]] },
            { dominoIndex: 38, placement: [[4, -2], [4, -3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[5, -3], [5, -2]],
                pitchLists: [
                    [3, 11, 6],
                    [6, 3, 9],
                    [6, 3, 9],
                    [9, 6, 0],
                ],
                points: 12,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 25, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 28, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 5, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 37, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 1]] },
        ],
        handList: [54, 63, 26],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [6, 2, 5, 10],
                    [9, 6, 0],
                    [0, 5, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 63,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [8, 3, 0, 7],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[-4, 3], [-5, 3]],
                pitchLists: [
                    [8, 11, 2],
                    [6, 3, 11, 7],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 64, placement: [[2, -4], [2, -3]] },
        ],
        handList: [4, 58, 14],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [0, 8, 3],
                    [9, 4, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 58,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [7, 4, 10],
                    [7, 0, 8, 3],
                    [9, 0, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [1, 7, 4, 10],
                    [4, 9, 0, 5],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[2, 0], [1, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 16, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 43, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [7, 3, 0],
                    [6, 10, 3],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 36, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 7, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 39, placement: [[-2, -1], [-1, -2]] },
        ],
        handList: [5, 9, 28],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [8, 1, 0, 5],
                    [5, 3, 9, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 9,
                placement: [[-4, 4], [-4, 3]],
                pitchLists: [
                    [5, 9, 0],
                    [11, 6, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[-4, 1], [-5, 1]],
                pitchLists: [
                    [9, 2, 0, 6],
                    [2, 5, 9, 0],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 15, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 21, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 7, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[-2, 2], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [5, 0, 9],
                    [3, 8, 0],
                    [11, 8, 3],
                    [1, 0, 8, 5],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 23, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 19, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 59, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 55, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 44, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 22, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 24, placement: [[-2, 0], [-3, 1]] },
        ],
        handList: [54, 60, 29],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [5, 2, 10],
                    [1, 10, 6, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [6, 2, 10, 7],
                    [6, 5, 2, 10],
                    [2, 9, 6],
                    [9, 2, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 60,
                placement: [[-3, -2], [-2, -2]],
                pitchLists: [
                    [7, 11, 2, 4],
                    [11, 9, 2, 6],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [11, 56, 55],
        moves: [
            {
                dominoIndex: 11,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [5, 8, 2, 0],
                    [7, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [6, 7, 2, 11],
                    [11, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [3, 6, 0],
                    [2, 6, 10],
                    [11, 6, 3, 10],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [1, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 36, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [6, 3, 9],
                    [6, 11, 2],
                    [3, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 66, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 37, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 52, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 34, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [6, 64, 22],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [0, 3, 6],
                    [3, 6, 0],
                    [6, 3, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 64,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [9, 6, 1],
                    [10, 0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [2, 9, 6, 1],
                    [3, 9, 0],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 47, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 13, placement: [[-3, 1], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[0, 0], [0, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 49, placement: [[0, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [0, 9, 5],
                    [3, 9, 0],
                    [9, 5, 0],
                    [1, 5, 9],
                    [6, 0, 9],
                ],
                points: 15,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 53, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 7, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 34, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 9, placement: [[1, -2], [1, -3]] },
        ],
        handList: [30, 29, 54],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [2, 7, 11, 3],
                    [11, 3, 8],
                    [0, 3, 7, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [6, 11, 3, 8],
                    [2, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [2, 10, 7, 3],
                    [10, 3, 7, 0],
                    [10, 2, 6, 9],
                ],
                points: 12,
            },
        ],
        points: 32,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 47, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 42, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 38, placement: [[0, 1], [1, 0]] },
        ],
        handList: [14, 62, 37],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [4, 7, 11, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 62,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [8, 1, 4],
                    [8, 5, 11],
                    [10, 1, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 37,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [3, 8, 5, 11],
                    [10, 8, 1, 4],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 16, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 51, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, 3], [0, 2]] },
        ],
    },
}
