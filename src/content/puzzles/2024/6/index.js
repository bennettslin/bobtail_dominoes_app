import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 62, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 43, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 7, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 63, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [10, 4, 1],
                    [4, 8, 1],
                    [5, 1, 9],
                    [1, 8, 5],
                ],
                points: 12,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 3, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 49, placement: [[1, -3], [1, -4]] },
            { dominoIndex: 24, placement: [[-2, 2], [-2, 1]] },
            { dominoIndex: 51, placement: [[2, -5], [1, -5]] },
        ],
        handList: [54, 18, 38],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, -4], [-1, -3]],
                pitchLists: [
                    [6, 9, 3],
                    [9, 0, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[-2, -3], [-3, -2]],
                pitchLists: [
                    [3, 9, 0, 5],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-1, -5], [0, -5]],
                pitchLists: [
                    [1, 8, 11, 5],
                    [1, 6, 9, 3],
                    [8, 6, 3, 11],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 56, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, -2], [0, -2]] },
        ],
        handList: [42, 63, 5],
        moves: [
            {
                dominoIndex: 42,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [4, 8, 11, 0],
                    [0, 3, 6, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 63,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [8, 11, 4],
                    [8, 6, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[3, -5], [2, -4]],
                pitchLists: [
                    [0, 5, 8, 3],
                    [5, 11, 8],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 49, placement: [[-1, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 2], [1, 2]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 5, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 20, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 15, placement: [[-1, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [6, 1, 10, 5],
                    [9, 5, 0],
                ],
                points: 11,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 36, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 3, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 54, placement: [[2, 0], [3, -1]] },
        ],
        handList: [49, 50, 16],
        moves: [
            {
                dominoIndex: 16,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [9, 6, 1],
                    [1, 9, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [5, 9, 6, 1],
                    [5, 0, 9, 3],
                    [5, 9, 0],
                    [3, 9, 0],
                ],
                points: 14,
            },
            {
                dominoIndex: 50,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [5, 3, 9, 0],
                    [10, 3, 0, 7],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 33, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 63, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 3, placement: [[-1, 0], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [1, -1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 31, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 21, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 26, placement: [[-2, -1], [-2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [7, 2, 10, 6],
                    [9, 3, 6],
                    [6, 3, 9],
                    [1, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 55, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 29, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 46, placement: [[3, 2], [3, 1]] },
            { dominoIndex: 19, placement: [[3, 0], [3, -1]] },
        ],
        handList: [6, 43, 35],
        moves: [
            {
                dominoIndex: 43,
                placement: [[5, 0], [4, 0]],
                pitchLists: [
                    [1, 9, 4],
                    [9, 6, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 6,
                placement: [[5, -1], [4, -1]],
                pitchLists: [
                    [9, 6, 0],
                    [0, 9, 6, 2],
                    [6, 1, 5, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 35,
                placement: [[6, -1], [6, 0]],
                pitchLists: [
                    [9, 6, 0, 3],
                    [1, 9, 4, 8],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 65, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 16, placement: [[1, -3], [2, -3]] },
        ],
        handList: [28, 20, 48],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [6, 2, 9],
                    [6, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 6, 2, 9],
                    [6, 10, 1],
                    [1, 10, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [2, 5, 8],
                    [1, 10, 6, 5],
                    [6, 11, 2, 8],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 39, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 61, placement: [[0, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 1, placement: [[-1, 0], [0, 0]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 63, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 4, placement: [[-1, 5], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [2, 8, 11],
                    [5, 11, 2],
                    [11, 2, 8],
                    [11, 8, 4, 0],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 38, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 20, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 42, placement: [[2, 1], [1, 2]] },
        ],
        handList: [25, 55, 50],
        moves: [
            {
                dominoIndex: 55,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [6, 10, 1],
                ],
                points: 3,
            },
            {
                dominoIndex: 25,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [6, 10, 1, 2],
                    [2, 6, 11],
                    [2, 10, 1, 6],
                    [10, 6, 3],
                ],
                points: 14,
            },
            {
                dominoIndex: 50,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [5, 10, 1],
                    [10, 2, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 15, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 39, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 37, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 17, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[0, -2], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [2, 6, 10],
                    [6, 1, 10, 5],
                    [10, 7, 3],
                    [10, 1, 7],
                ],
                points: 13,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 13, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 25, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 55, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 9, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 42, placement: [[0, 3], [1, 2]] },
        ],
        handList: [54, 44, 24],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, -1], [4, -2]],
                pitchLists: [
                    [2, 9, 6],
                    [9, 6, 3, 11],
                    [6, 0, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 24,
                placement: [[4, -3], [4, -4]],
                pitchLists: [
                    [5, 2, 9],
                    [2, 0, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [6, 0, 9, 4],
                    [2, 9, 6, 10],
                    [5, 2, 9, 10],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [59, 27, 16],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [3, 10, 7],
                    [2, 5, 8, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [2, 3, 10, 7],
                    [8, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [10, 1, 6],
                    [8, 2, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 28, placement: [[-2, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, 3], [0, 2]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [1, 4, 10],
                    [1, 10, 7],
                    [10, 3, 6],
                ],
                points: 9,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 44, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 27, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 60, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 33, placement: [[-2, 0], [-3, 0]] },
        ],
        handList: [41, 3, 56],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [2, 8, 11, 4],
                    [4, 7, 10],
                    [11, 7, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [0, 7, 4],
                    [0, 3, 8],
                    [3, 11, 7, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 56,
                placement: [[2, -5], [1, -5]],
                pitchLists: [
                    [6, 0, 3, 8],
                    [11, 0, 7, 4],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[-5, 3], [-4, 3]] },
            { dominoIndex: 35, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 45, placement: [[-2, 1], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 6, placement: [[-2, 4], [-1, 4]] },
            { dominoIndex: 48, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 9, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 37, placement: [[1, 2], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 31,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [3, 0, 6],
                    [0, 8, 3],
                    [4, 8, 3, 0],
                    [0, 8, 5, 4],
                ],
                points: 14,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 19, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 15, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 4, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 58, placement: [[-3, 2], [-4, 3]] },
            { dominoIndex: 55, placement: [[-5, 2], [-4, 1]] },
        ],
        handList: [49, 25, 29],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [9, 5, 1],
                    [5, 9, 0],
                    [5, 1, 10, 6],
                    [9, 1, 4, 7],
                ],
                points: 14,
            },
            {
                dominoIndex: 25,
                placement: [[-2, -2], [-1, -3]],
                pitchLists: [
                    [2, 5, 9, 0],
                    [6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[0, -3], [0, -4]],
                pitchLists: [
                    [10, 2, 5],
                    [10, 6, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 21, placement: [[1, 2], [0, 3]] },
        ],
        handList: [48, 3, 7],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 5, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [8, 6, 0, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[-3, 4], [-3, 5]],
                pitchLists: [
                    [3, 0, 7],
                    [2, 8, 5, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 62, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 7, placement: [[0, -2], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[-1, -1], [-2, 0]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 41, placement: [[-2, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [7, 5, 11, 2],
                    [7, 10, 4],
                    [10, 7, 1],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 21, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 28, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 9, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 55, placement: [[1, 1], [0, 1]] },
        ],
        handList: [23, 53, 5],
        moves: [
            {
                dominoIndex: 23,
                placement: [[-3, 4], [-2, 4]],
                pitchLists: [
                    [10, 6, 1, 2],
                    [9, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 53,
                placement: [[-2, 5], [-3, 5]],
                pitchLists: [
                    [9, 1, 4, 6],
                    [11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[-4, 6], [-3, 6]],
                pitchLists: [
                    [11, 4, 8, 0],
                    [2, 8, 5],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 25, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 34, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[1, -1], [2, -2]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 5, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 63, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 30, placement: [[3, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [10, 4, 7],
                    [8, 11, 4, 0],
                    [2, 11, 7],
                    [11, 2, 7],
                ],
                points: 13,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 35, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 28, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 66, placement: [[3, 0], [3, -1]] },
        ],
        handList: [5, 38, 40],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [0, 5, 9],
                    [9, 0, 5],
                    [5, 8, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [3, 0, 5, 9],
                    [11, 5, 8, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 40,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [9, 0, 5, 4],
                    [3, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
}
