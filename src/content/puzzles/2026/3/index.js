import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 43, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 52, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 20, placement: [[-2, 4], [-3, 4]] },
            { dominoIndex: 8, placement: [[0, 5], [0, 4]] },
        ],
        handList: [26, 40, 45],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-3, 6], [-3, 5]],
                pitchLists: [
                    [10, 7, 2],
                    [4, 9, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [4, 6, 9, 1],
                    [4, 10, 7, 2],
                    [1, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[-4, 5], [-5, 5]],
                pitchLists: [
                    [11, 4, 7],
                    [1, 6, 10, 4],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 15, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[-1, 3], [-2, 4]] },
        ],
        handList: [43, 33, 10],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [4, 5, 0, 8],
                ],
                points: 4,
            },
            {
                dominoIndex: 10,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [5, 9, 0],
                    [1, 4, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [3, 5, 9, 0],
                    [6, 3, 0],
                    [6, 1, 4, 10],
                ],
                points: 11,
            },
        ],
        points: 23,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 57, placement: [[2, 1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, 1], [1, 1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 21, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [2, 5, 8],
                    [1, 8, 5],
                    [11, 2, 8],
                ],
                points: 9,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 44, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 25, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 43, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 5, placement: [[2, 1], [3, 0]] },
        ],
        handList: [9, 15, 41],
        moves: [
            {
                dominoIndex: 9,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [9, 4, 0],
                    [9, 5, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [5, 1, 10],
                    [9, 1, 6],
                    [5, 9, 4, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [7, 4, 1],
                    [9, 1, 6, 4],
                ],
                points: 7,
            },
        ],
        points: 25,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 7, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 38, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 37, placement: [[2, 1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 1]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 33, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 54, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 28, placement: [[3, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [3, 10, 6, 2],
                    [6, 10, 3],
                    [9, 6, 2],
                    [10, 2, 6, 9],
                ],
                points: 14,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 42, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 50, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 56, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 3, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 58, placement: [[4, 2], [3, 3]] },
        ],
        handList: [35, 44, 5],
        moves: [
            {
                dominoIndex: 35,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [4, 8, 11, 3],
                    [0, 6, 3],
                    [5, 11, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 44,
                placement: [[4, 1], [4, 0]],
                pitchLists: [
                    [8, 5, 0, 4],
                    [10, 4, 7],
                    [10, 0, 6, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 5,
                placement: [[4, 3], [3, 4]],
                pitchLists: [
                    [10, 4, 7, 0],
                    [0, 3, 9, 5],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 11, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 37, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 33, placement: [[3, -4], [2, -3]] },
        ],
        handList: [7, 38, 29],
        moves: [
            {
                dominoIndex: 7,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [3, 10, 6, 0],
                    [3, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [0, 11, 3, 7],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [6, 2, 10],
                    [7, 11, 2],
                    [6, 3, 11, 10],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 14, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, 0], [0, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 50, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 26, placement: [[1, 1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [5, 1, 10],
                    [1, 7, 4],
                    [2, 7, 10],
                ],
                points: 9,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 3, placement: [[1, 2], [0, 3]] },
        ],
        handList: [49, 50, 29],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [1, 5, 9],
                    [0, 3, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 50,
                placement: [[-2, 5], [-1, 5]],
                pitchLists: [
                    [0, 3, 9, 5],
                    [1, 5, 9, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 5], [-2, 4]],
                pitchLists: [
                    [2, 5, 10],
                    [8, 5, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 2, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 59, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 21, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 18, placement: [[3, -1], [3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [0, 5, 8],
                    [2, 8, 5],
                    [8, 11, 5],
                    [5, 11, 8],
                ],
                points: 12,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 9, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 54, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 60, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 22, placement: [[3, 0], [3, -1]] },
            { dominoIndex: 28, placement: [[-2, 4], [-3, 5]] },
        ],
        handList: [3, 6, 36],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-2, 5], [-3, 6]],
                pitchLists: [
                    [5, 9, 2, 0],
                    [9, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[-4, 6], [-4, 7]],
                pitchLists: [
                    [6, 2, 9, 0],
                    [9, 0, 3, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 36,
                placement: [[-4, 5], [-5, 6]],
                pitchLists: [
                    [3, 9, 0],
                    [3, 0, 6],
                    [9, 0, 3],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[-4, 3], [-3, 3]] },
        ],
        handList: [25, 9, 37],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [5, 9, 2],
                    [11, 2, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [6, 3, 10],
                    [5, 9, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [0, 6, 3, 10],
                    [4, 0, 9],
                    [9, 11, 2, 6],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 0], [0, -1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 61, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 51, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 42, placement: [[-1, 0], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [0, 6, 3],
                    [0, 4, 8, 11],
                    [6, 0, 9],
                ],
                points: 10,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 22, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 64, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
        ],
        handList: [29, 61, 49],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [11, 2, 7],
                    [6, 2, 10],
                    [10, 2, 5],
                ],
                points: 9,
            },
            {
                dominoIndex: 61,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [11, 5, 2, 8],
                    [6, 2, 10, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 49,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [5, 11, 2, 7],
                    [9, 5, 2],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 22, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 48, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 45, placement: [[4, 1], [3, 1]] },
            { dominoIndex: 4, placement: [[4, -2], [5, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[2, 0], [1, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 56, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 34, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 3, placement: [[-3, 2], [-3, 3]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [3, 10, 7],
                    [11, 3, 7],
                    [6, 3, 11, 7],
                    [11, 6, 3, 10],
                ],
                points: 14,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 14, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 8, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 23, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 9, placement: [[1, 1], [2, 1]] },
        ],
        handList: [54, 4, 42],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [9, 4, 0],
                    [8, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[2, 3], [1, 3]],
                pitchLists: [
                    [0, 9, 6],
                    [8, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [4, 0, 9, 6],
                    [11, 4, 8],
                    [9, 4, 0, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 37, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 30, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [26, 16, 49],
        moves: [
            {
                dominoIndex: 26,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [11, 2, 7],
                    [9, 4, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [10, 6, 1],
                    [11, 2, 7, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [5, 10, 6, 1],
                    [2, 1, 5, 9],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[-1, 0], [0, 0]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 15, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 2,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [0, 9, 4],
                    [0, 5, 2, 8],
                    [2, 5, 10],
                ],
                points: 10,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 63, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [24, 59, 27],
        moves: [
            {
                dominoIndex: 27,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [11, 2, 8],
                    [2, 5, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [2, 11, 5],
                    [2, 5, 11],
                    [5, 11, 2, 8],
                    [5, 2, 8],
                ],
                points: 13,
            },
            {
                dominoIndex: 59,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [7, 2, 11, 5],
                    [10, 2, 5],
                    [10, 5, 2, 8],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 21, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 36, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 57, placement: [[-3, 0], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 0], [1, -1]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 17, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 51, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 24, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 62, placement: [[3, -2], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [9, 5, 2],
                    [11, 1, 5, 8],
                    [10, 2, 7, 5],
                    [5, 2, 8],
                ],
                points: 14,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 4, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 18, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 14, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 28, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 11, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [25, 48, 38],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [0, 9, 5],
                    [1, 4, 9, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [2, 5, 8],
                    [7, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [6, 3, 11],
                    [7, 11, 2, 3],
                    [0, 9, 5, 3],
                    [2, 8, 11],
                ],
                points: 14,
            },
        ],
        points: 29,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 45, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 60, placement: [[2, -3], [2, -2]] },
        ],
        handList: [3, 55, 24],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [8, 3, 0],
                    [7, 11, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [3, 2, 6, 10],
                    [7, 11, 3, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 24,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [2, 5, 10],
                    [8, 3, 0, 5],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 37, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[0, -1], [0, 0]] },
        ],
    },
}
