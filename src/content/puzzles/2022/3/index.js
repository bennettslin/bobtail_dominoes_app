import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 12, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [0, 1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 7, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 10, placement: [[-1, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [6, 9, 0],
                    [6, 3, 10],
                    [0, 3, 9],
                ],
                points: 9,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 65, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 33, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 20, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 2, placement: [[3, -3], [3, -2]] },
        ],
        handList: [37, 26, 49],
        moves: [
            {
                dominoIndex: 37,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [9, 0, 3],
                    [6, 11, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[6, -4], [5, -3]],
                pitchLists: [
                    [2, 7, 10],
                    [9, 0, 3, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [0, 2, 5, 9],
                    [2, 7, 10, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 25, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 6, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 7, placement: [[-1, 3], [-1, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[0, 2], [0, 3]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 19, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 16, placement: [[2, 2], [2, 1]] },
            { dominoIndex: 4, placement: [[1, 3], [2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [2, 6, 9, 1],
                    [8, 5, 2],
                    [5, 9, 2],
                    [5, 9, 1, 6],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 19, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 51, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 42, placement: [[-4, 1], [-3, 1]] },
            { dominoIndex: 4, placement: [[-3, 3], [-3, 2]] },
            { dominoIndex: 30, placement: [[-2, 3], [-3, 4]] },
        ],
        handList: [24, 8, 20],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [5, 2, 9],
                    [2, 5, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 8,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [0, 8, 5],
                    [8, 2, 5, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-4, 0], [-4, -1]],
                pitchLists: [
                    [10, 1, 4],
                    [0, 8, 5, 1],
                    [10, 5, 2, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[-3, 1], [-4, 2]] },
        ],
        handList: [15, 50, 18],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [1, 5, 8],
                    [5, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [2, 10, 5],
                    [1, 5, 8, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [9, 1, 5],
                    [4, 1, 8],
                    [2, 10, 5, 8],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 35, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 6, placement: [[4, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[3, 0], [2, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 24, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 55, placement: [[2, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [1, 6, 9],
                    [10, 2, 5, 6],
                    [2, 10, 5, 9],
                ],
                points: 11,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 30, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 53, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 33, placement: [[-2, 0], [-2, -1]] },
        ],
        handList: [60, 34, 57],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [8, 0, 3, 7],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [7, 11, 3],
                    [0, 7, 3],
                    [8, 11, 3],
                    [3, 7, 11, 2],
                    [6, 3, 7, 11],
                ],
                points: 17,
            },
            {
                dominoIndex: 57,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [6, 3, 11, 7],
                    [8, 11, 3, 7],
                    [0, 7, 3, 8],
                ],
                points: 12,
            },
        ],
        points: 38,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 22, placement: [[-3, 4], [-2, 4]] },
            { dominoIndex: 44, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 9, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 18, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 54, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 23, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 29, placement: [[-3, 1], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [2, 8, 5, 0],
                    [9, 1, 5, 8],
                    [2, 9, 5],
                    [4, 0, 8],
                ],
                points: 14,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 5, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 39, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 35, placement: [[1, -3], [0, -3]] },
            { dominoIndex: 56, placement: [[1, -5], [1, -4]] },
        ],
        handList: [48, 29, 54],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 0, 9, 5],
                    [1, 5, 8],
                    [5, 0, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [5, 0, 8, 2],
                    [1, 5, 8, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 4], [-4, 5]],
                pitchLists: [
                    [3, 10, 6],
                    [2, 6, 9],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 38, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 42, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 63, placement: [[1, -2], [1, -1]] },
        ],
        handList: [5, 25, 60],
        moves: [
            {
                dominoIndex: 5,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [0, 5, 8],
                    [3, 7, 0],
                    [8, 11, 3, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 25,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [2, 0, 5, 8],
                    [11, 2, 6],
                    [11, 7, 2],
                    [3, 0, 6],
                ],
                points: 13,
            },
            {
                dominoIndex: 60,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [7, 3, 11],
                    [7, 11, 2, 6],
                    [11, 3, 7, 0],
                ],
                points: 11,
            },
        ],
        points: 36,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 56, placement: [[-1, -1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 35, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[2, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [8, 2, 5],
                    [8, 2, 11],
                    [11, 2, 8, 5],
                ],
                points: 10,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 45, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 5, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 60, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 19, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [24, 18, 42],
        moves: [
            {
                dominoIndex: 24,
                placement: [[3, -1], [2, 0]],
                pitchLists: [
                    [5, 8, 11, 2],
                    [2, 5, 11],
                    [1, 9, 4, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 42,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [11, 8, 4],
                    [11, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 18,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 11, 8, 4],
                    [5, 9, 1, 8],
                    [7, 11, 4, 1],
                    [2, 5, 11, 8],
                ],
                points: 16,
            },
        ],
        points: 35,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 9, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 19, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 17, placement: [[2, -4], [3, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 48, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 5, placement: [[-4, 2], [-5, 2]] },
            { dominoIndex: 63, placement: [[-4, 1], [-5, 1]] },
            { dominoIndex: 17, placement: [[-1, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [11, 8, 5, 1],
                    [9, 1, 4],
                    [4, 1, 8],
                    [5, 0, 8, 4],
                ],
                points: 14,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 51, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 33, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 56, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 8, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 31, placement: [[-3, 5], [-2, 5]] },
        ],
        handList: [9, 3, 41],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [5, 3, 9, 0],
                    [2, 6, 9],
                    [9, 6, 0, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [0, 2, 6, 9],
                    [3, 0, 8],
                    [3, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [4, 3, 7, 11],
                    [7, 3, 0, 8],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 26, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 55, placement: [[0, -1], [0, -2]] },
        ],
        handList: [63, 38, 42],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [2, 8, 11],
                    [10, 6, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [3, 6, 11],
                    [6, 11, 3],
                    [11, 2, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [4, 11, 2, 8],
                    [8, 3, 6, 11],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 25, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 30, placement: [[3, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 50, placement: [[3, 0], [2, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 40, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 45, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [6, 3, 0],
                    [10, 4, 7, 0],
                    [3, 7, 11, 4],
                ],
                points: 11,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 56, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 26, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 50, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 52, placement: [[2, -3], [2, -2]] },
        ],
        handList: [29, 19, 6],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [10, 2, 7],
                    [5, 2, 11],
                    [10, 2, 6],
                ],
                points: 9,
            },
            {
                dominoIndex: 19,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [1, 9, 6],
                    [1, 10, 7, 3],
                    [1, 5, 10],
                    [9, 10, 2, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 6,
                placement: [[1, -5], [1, -4]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [6, 1, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 33,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 43, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 9, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 59, placement: [[2, 0], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 1, placement: [[1, -1], [1, 0]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 40, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 37, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 60, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 26, placement: [[0, 2], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [7, 3, 10, 11],
                    [10, 3, 6],
                    [6, 7, 3, 11],
                    [11, 6, 2, 7],
                    [2, 10, 6],
                ],
                points: 18,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 8, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 35, placement: [[-3, -2], [-3, -1]] },
            { dominoIndex: 5, placement: [[-4, 2], [-3, 1]] },
            { dominoIndex: 19, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 16, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 50, placement: [[1, -1], [0, -1]] },
        ],
        handList: [20, 41, 25],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [10, 1, 5],
                    [1, 10, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [10, 7, 4],
                    [7, 1, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[0, -3], [1, -4]],
                pitchLists: [
                    [2, 10, 7, 4],
                    [6, 2, 9],
                    [6, 10, 1, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
        ],
        handList: [12, 14, 60],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [1, 4, 9],
                    [4, 0, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 60,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [3, 11, 7],
                    [4, 0, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 12,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [10, 7, 3, 1],
                    [9, 0, 6, 2],
                    [2, 3, 11, 7],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 45, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 15, placement: [[0, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 45, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 35, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 5, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [3, 5, 11, 8],
                    [3, 0, 7],
                    [7, 0, 4],
                ],
                points: 10,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 5, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
        ],
        handList: [19, 18, 54],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [9, 4, 1],
                    [0, 5, 9, 1],
                    [4, 0, 9],
                    [0, 4, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 18,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [1, 5, 0, 9],
                    [1, 8, 4],
                    [8, 9, 4, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 54,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [6, 9, 2],
                    [9, 1, 8, 4],
                ],
                points: 7,
            },
        ],
        points: 33,
    },
}
