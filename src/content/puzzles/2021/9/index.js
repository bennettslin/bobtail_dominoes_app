import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 8, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 45, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [6, 3, 11],
                    [0, 7, 3],
                    [11, 7, 4],
                    [3, 7, 11],
                ],
                points: 12,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 2, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 34, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 43, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 6, placement: [[2, -1], [3, -1]] },
        ],
        handList: [54, 14, 48],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [2, 6, 9],
                    [0, 9, 4, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [4, 1, 7, 9],
                    [1, 2, 6, 9],
                    [7, 10, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 48,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [0, 5, 8],
                    [5, 7, 10, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 22, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 35, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 4, placement: [[-2, 1], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[-1, 1], [-1, 2]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 52, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 18, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 3, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 42, placement: [[-1, -2], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [4, 0, 9],
                    [0, 4, 10, 7],
                    [0, 8, 3],
                    [9, 4, 1, 8],
                ],
                points: 14,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 42, placement: [[-2, 2], [-2, 1]] },
            { dominoIndex: 33, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 56, placement: [[0, 4], [-1, 4]] },
            { dominoIndex: 36, placement: [[-2, 6], [-1, 5]] },
        ],
        handList: [20, 3, 9],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 3], [1, 4]],
                pitchLists: [
                    [7, 1, 10],
                    [1, 6, 9, 3],
                    [3, 11, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[0, 5], [1, 5]],
                pitchLists: [
                    [9, 0, 3],
                    [7, 1, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, 7], [0, 6]],
                pitchLists: [
                    [3, 9, 0],
                    [6, 0, 9],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [54, 19, 27],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [6, 9, 3],
                    [3, 6, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [6, 9, 1],
                    [6, 9, 3, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [5, 2, 8],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 30, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 2, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 48, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [3, 8, 0],
                    [3, 11, 8],
                    [3, 8, 11],
                    [8, 11, 5],
                ],
                points: 12,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 25, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-1, 0]] },
        ],
        handList: [3, 55, 14],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [0, 3, 6],
                    [3, 11, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [6, 10, 2, 3],
                    [3, 11, 7, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [4, 1, 7, 10],
                    [1, 10, 5],
                    [10, 1, 6],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 18, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 48, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 8, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 21, placement: [[-2, 3], [-2, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[1, 1], [1, 2]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 30, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 16, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 24, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 28, placement: [[5, -2], [4, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [7, 2, 11, 6],
                    [7, 10, 2, 3],
                    [5, 10, 2],
                    [10, 5, 1],
                ],
                points: 14,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 13, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 60, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 59, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 42, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 7, placement: [[-2, 3], [-3, 4]] },
        ],
        handList: [1, 48, 29],
        moves: [
            {
                dominoIndex: 1,
                placement: [[-4, 2], [-4, 3]],
                pitchLists: [
                    [0, 11, 7, 3],
                    [7, 4, 11, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[-1, 4], [-2, 4]],
                pitchLists: [
                    [7, 10, 2],
                    [4, 7, 0, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-4, 4], [-4, 5]],
                pitchLists: [
                    [5, 7, 10, 2],
                    [0, 1, 5, 8],
                    [3, 0, 7, 8],
                ],
                points: 12,
            },
        ],
        points: 29,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 52, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[0, -2], [1, -2]] },
        ],
        handList: [28, 15, 13],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [2, 6, 10],
                    [0, 6, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [1, 2, 6, 10],
                    [5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 13,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [5, 2, 9, 1],
                    [0, 6, 9, 3],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 4, placement: [[3, -1], [4, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, 0], [2, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 32, placement: [[1, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [3, 0, 6],
                    [9, 6, 0],
                    [5, 0, 9],
                ],
                points: 9,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [50, 15, 8],
        moves: [
            {
                dominoIndex: 15,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [9, 6, 3, 1],
                    [9, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [0, 3, 5, 9],
                    [10, 5, 6, 2],
                    [10, 9, 1, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 8,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [8, 0, 5, 3],
                    [0, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 49, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 37, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 24, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 25, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 55, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [7, 11, 3],
                    [7, 2, 11],
                    [5, 2, 11],
                    [11, 5, 8],
                ],
                points: 12,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 66, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 50, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 54, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 42, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 9, placement: [[1, -4], [0, -3]] },
        ],
        handList: [4, 59, 34],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-1, -3], [-1, -2]],
                pitchLists: [
                    [0, 9, 6, 3],
                    [0, 4, 9],
                    [0, 9, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[0, -4], [-1, -4]],
                pitchLists: [
                    [7, 3, 0],
                    [7, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[2, -5], [2, -4]],
                pitchLists: [
                    [7, 10, 3, 11],
                    [7, 0, 9, 4],
                    [7, 3, 0, 10],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 46, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 17, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[3, -2], [2, -2]] },
        ],
        handList: [42, 16, 49],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [4, 1, 7, 10],
                    [8, 1, 10, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 16,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [1, 6, 10],
                    [1, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 49,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [5, 1, 6, 10],
                    [9, 1, 4, 8],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 50, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 21, placement: [[2, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 2], [1, 2]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 15, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 19, placement: [[-2, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [1, 9, 5, 2],
                    [6, 5, 10, 2],
                    [5, 10, 1],
                ],
                points: 11,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 40, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 7, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 30, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 9, placement: [[3, -1], [2, -1]] },
        ],
        handList: [37, 55, 14],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [7, 0, 3],
                    [10, 0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [10, 6, 2],
                    [10, 3, 6],
                    [7, 0, 3, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [1, 10, 6, 2],
                    [10, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 31, placement: [[3, -3], [4, -3]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 44, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 26, placement: [[-1, -2], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, -2], [2, -2]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 45, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 13, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 30, placement: [[0, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [2, 11, 5],
                    [2, 6, 10, 11],
                    [2, 6, 11],
                    [11, 6, 2],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 18, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 32, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 58, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 8, placement: [[-2, -1], [-3, 0]] },
        ],
        handList: [38, 41, 25],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-4, 1], [-4, 0]],
                pitchLists: [
                    [0, 8, 3],
                    [11, 8, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[-5, 0], [-4, -1]],
                pitchLists: [
                    [4, 11, 8, 3],
                    [7, 11, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-4, 2], [-5, 2]],
                pitchLists: [
                    [6, 2, 9, 11],
                    [7, 11, 3, 2],
                    [0, 8, 3, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 15, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 64, placement: [[2, 1], [1, 2]] },
        ],
        handList: [30, 28],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [5, 9, 2],
                    [6, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 30,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [6, 2, 11],
                    [2, 5, 10],
                    [11, 5, 9, 2],
                ],
                points: 10,
            },
        ],
        points: 16,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 29, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 56, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[1, -1], [0, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 14, placement: [[-1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [2, 8, 11],
                    [8, 5, 2],
                    [5, 8, 1],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 53, placement: [[2, -3], [2, -4]] },
            { dominoIndex: 29, placement: [[-1, -1], [-1, -2]] },
        ],
        handList: [35, 39, 1],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [10, 2, 7, 3],
                    [11, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 39,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [7, 11, 4],
                    [2, 8, 5],
                    [5, 11, 3, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 1,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [2, 8, 5, 0],
                    [7, 11, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
}
