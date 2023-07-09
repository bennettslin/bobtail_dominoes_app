import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 26, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 30, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 51, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 35, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [5, 11, 2],
                    [3, 10, 6, 2],
                    [11, 6, 3],
                    [11, 2, 6],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 51, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 57, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 54, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 37, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 25, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 27, placement: [[2, 0], [1, 1]] },
        ],
        handList: [58, 4, 28],
        moves: [
            {
                dominoIndex: 58,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [2, 10, 7],
                    [9, 10, 6, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [6, 9, 0],
                    [0, 7, 3],
                    [2, 10, 7, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 28,
                placement: [[5, -3], [5, -4]],
                pitchLists: [
                    [6, 9, 0, 2],
                    [9, 0, 7, 3],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 40, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 24, placement: [[1, -1], [2, -1]] },
        ],
        handList: [8, 29, 41],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [8, 0, 5],
                    [8, 10, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, -2], [-2, -2]],
                pitchLists: [
                    [10, 2, 6],
                    [2, 8, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [4, 7, 10, 0],
                    [10, 2, 6, 7],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[1, 0], [0, 1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 24, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 63, placement: [[-4, 2], [-4, 3]] },
            { dominoIndex: 49, placement: [[-4, 1], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [8, 5, 1],
                    [7, 10, 1],
                    [5, 9, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 61, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 63, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 41, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 31, placement: [[2, -1], [2, -2]] },
        ],
        handList: [3, 57, 8],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [4, 0, 8, 9],
                    [7, 0, 3],
                    [3, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 8,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [7, 0, 3, 8],
                ],
                points: 4,
            },
            {
                dominoIndex: 57,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [7, 3, 8, 11],
                    [4, 8, 7, 0],
                    [8, 0, 3],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 50, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 17, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 29, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 46, placement: [[-1, 4], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 17, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 18, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 41, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 50, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 9, placement: [[4, -1], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [1, 4, 8, 0],
                    [9, 4, 0],
                    [7, 10, 1, 4],
                    [0, 4, 8, 7],
                ],
                points: 15,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 27, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 48, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 50, placement: [[-3, 5], [-3, 4]] },
            { dominoIndex: 19, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 54, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 22, placement: [[2, -2], [2, -1]] },
        ],
        handList: [59, 34, 56],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [7, 2, 10, 5],
                    [1, 7, 10],
                    [10, 2, 8, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[-5, 4], [-4, 4]],
                pitchLists: [
                    [3, 7, 10],
                    [1, 7, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[-5, 6], [-5, 5]],
                pitchLists: [
                    [3, 11, 6],
                    [2, 7, 11],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 23, placement: [[0, 3], [-1, 4]] },
        ],
        handList: [60, 42, 35],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [11, 7, 2, 4],
                ],
                points: 4,
            },
            {
                dominoIndex: 35,
                placement: [[2, 2], [2, 3]],
                pitchLists: [
                    [10, 7, 3],
                    [11, 3, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [9, 1, 8, 4],
                    [4, 11, 3, 8],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[-2, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 40, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 9, placement: [[-1, 2], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[1, 2], [1, 3]],
                pitchLists: [
                    [9, 0, 6, 2],
                    [10, 4, 2, 7],
                ],
                points: 8,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 30, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 26, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 51, placement: [[3, -2], [2, -1]] },
        ],
        handList: [40, 13, 60],
        moves: [
            {
                dominoIndex: 40,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [4, 7, 11],
                    [4, 11, 7],
                    [6, 7, 2, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 13,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [4, 11, 7, 1],
                    [3, 7, 2, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [7, 1, 10],
                    [2, 3, 7, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 6, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 51, placement: [[1, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [-1, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 42, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 8, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 35, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[2, 0], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [11, 4, 8, 0],
                    [3, 0, 7],
                    [0, 3, 8],
                    [3, 8, 0, 4],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 36, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 8, placement: [[4, -2], [5, -2]] },
            { dominoIndex: 26, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 60, placement: [[2, -2], [3, -3]] },
            { dominoIndex: 34, placement: [[4, -4], [4, -3]] },
            { dominoIndex: 55, placement: [[5, -5], [5, -4]] },
        ],
        handList: [18, 3, 23],
        moves: [
            {
                dominoIndex: 3,
                placement: [[6, -5], [7, -5]],
                pitchLists: [
                    [6, 0, 3],
                    [0, 10, 7, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[5, -6], [4, -5]],
                pitchLists: [
                    [1, 6, 10],
                    [8, 6, 0, 3],
                    [8, 3, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 23,
                placement: [[5, -7], [6, -7]],
                pitchLists: [
                    [2, 1, 6, 10],
                    [4, 1, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 1, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [34, 44, 17],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [4, 6, 10, 1],
                ],
                points: 4,
            },
            {
                dominoIndex: 17,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [1, 7, 10],
                    [7, 4, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [7, 3, 10, 0],
                    [1, 7, 10, 3],
                    [1, 10, 6, 3],
                    [4, 10, 7],
                ],
                points: 15,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 64, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 12, placement: [[2, -1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, 0], [1, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 49, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 27, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [0, 2, 5, 8],
                    [9, 0, 5],
                    [9, 6, 2],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 5, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 25, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 47, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 20, placement: [[-2, 1], [-2, 2]] },
        ],
        handList: [50, 54, 8],
        moves: [
            {
                dominoIndex: 50,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [10, 2, 5],
                    [5, 10, 1],
                    [2, 6, 10],
                    [7, 2, 10],
                ],
                points: 12,
            },
            {
                dominoIndex: 54,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [10, 2, 5, 6],
                    [2, 6, 10, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[4, -3], [3, -3]],
                pitchLists: [
                    [0, 6, 9],
                    [8, 5, 10, 1],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[1, 2], [2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [11, 6, 2],
                    [2, 5, 11],
                    [2, 9, 6, 0],
                    [2, 9, 5],
                    [5, 2, 8],
                ],
                points: 16,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 36, placement: [[2, -3], [2, -4]] },
            { dominoIndex: 5, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 57, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 63, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 60, placement: [[-2, 0], [-2, 1]] },
        ],
        handList: [29, 25, 37],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [11, 7, 2],
                    [2, 8, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-4, 2], [-5, 2]],
                pitchLists: [
                    [10, 3, 6],
                    [11, 7, 2, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [10, 3, 6, 2],
                    [7, 11, 2],
                    [2, 6, 10],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 56, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [34, 41, 9],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [11, 3, 7],
                    [0, 6, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [4, 11, 3, 7],
                    [2, 6, 11, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [0, 9, 6],
                    [0, 4, 7],
                    [0, 9, 4],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 7, placement: [[1, 0], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 66, placement: [[0, 0], [1, -1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 23, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 12, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 63, placement: [[-1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [8, 0, 4],
                    [8, 2, 5, 0],
                    [1, 5, 8],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 17, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 43, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 59, placement: [[-2, 2], [-3, 3]] },
        ],
        handList: [15, 8, 42],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [5, 0, 8],
                ],
                points: 3,
            },
            {
                dominoIndex: 42,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [4, 5, 0, 8],
                    [8, 4, 0],
                    [0, 4, 7, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 15,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [10, 9, 5, 1],
                    [0, 5, 9, 1],
                    [8, 4, 1],
                    [8, 4, 0, 5],
                    [0, 9, 5],
                ],
                points: 18,
            },
        ],
        points: 34,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 9, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[0, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 6, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [6, 10, 3],
                    [11, 6, 3],
                    [3, 6, 11],
                    [8, 2, 11],
                ],
                points: 12,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 15, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 18, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 19, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[-3, 4], [-2, 4]] },
        ],
        handList: [20, 24, 34],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-4, 4], [-3, 3]],
                pitchLists: [
                    [1, 5, 11, 8],
                    [10, 8, 1, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 24,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [2, 10, 5],
                    [5, 8, 11],
                    [5, 10, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 34,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [3, 5, 8, 11],
                    [7, 2, 10, 5],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 34, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [6, 59, 3],
        moves: [
            {
                dominoIndex: 6,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [0, 7, 4],
                    [6, 0, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [7, 10, 2, 4],
                    [6, 0, 3, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[-2, -1], [-2, -2]],
                pitchLists: [
                    [0, 3, 7],
                    [3, 0, 10, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
}
