import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 3, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 29, placement: [[2, -1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[1, 0], [0, 1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 3, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 6, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 58, placement: [[3, -3], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [3, 10, 7],
                    [3, 0, 9],
                    [10, 3, 6, 0],
                    [10, 0, 3, 7],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 6, placement: [[2, 2], [3, 2]] },
            { dominoIndex: 42, placement: [[1, 3], [0, 4]] },
            { dominoIndex: 28, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 30, placement: [[-1, 4], [-2, 4]] },
            { dominoIndex: 15, placement: [[-1, 5], [-1, 6]] },
        ],
        handList: [20, 59, 33],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [1, 10, 5],
                    [5, 10, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [7, 1, 10, 5],
                    [5, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [6, 3, 9],
                    [7, 10, 3, 11],
                    [5, 1, 10, 6],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 47, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [30, 32, 53],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [4, 10, 7, 2],
                    [5, 7, 11, 2],
                    [8, 3, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 32,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [7, 11, 3],
                    [0, 7, 3],
                    [8, 3, 11, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 53,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [7, 11, 3, 6],
                    [2, 5, 8],
                    [0, 7, 3, 8],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 18, placement: [[-3, 3], [-4, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 12, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [10, 6, 3, 2],
                    [6, 7, 2, 11],
                ],
                points: 8,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 28, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 26, placement: [[-1, 3], [-1, 2]] },
        ],
        handList: [16, 59, 37],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [1, 8, 5, 11],
                    [6, 0, 9, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 59,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [7, 10, 3],
                    [10, 1, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [3, 10, 1, 6],
                    [10, 3, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 6, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 9, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 48, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, -1], [-1, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 15, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 44, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 58, placement: [[-1, -2], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [9, 5, 1],
                    [4, 5, 9, 1],
                    [5, 9, 1],
                    [7, 1, 9, 4],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 25, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 48, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 37, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 30, placement: [[3, 2], [2, 3]] },
            { dominoIndex: 49, placement: [[4, 1], [4, 2]] },
        ],
        handList: [8, 24, 4],
        moves: [
            {
                dominoIndex: 8,
                placement: [[4, 0], [5, 0]],
                pitchLists: [
                    [0, 5, 9],
                    [8, 5, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[5, 1], [6, 0]],
                pitchLists: [
                    [4, 0, 9],
                    [0, 8, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[4, 3], [3, 3]],
                pitchLists: [
                    [11, 5, 2],
                    [0, 5, 9, 2],
                    [4, 0, 9, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 6, placement: [[-3, 0], [-4, 1]] },
        ],
        handList: [19, 49, 4],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [1, 9, 4],
                    [9, 0, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [4, 0, 8],
                    [4, 9, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [9, 0, 5],
                    [9, 5, 1, 2],
                    [1, 4, 9],
                    [9, 0, 4],
                ],
                points: 13,
            },
        ],
        points: 28,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 56, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, -1], [0, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 58, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [10, 1, 4],
                    [5, 1, 10, 9],
                    [2, 10, 5],
                ],
                points: 10,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 20, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 58, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 45, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 4, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 18, placement: [[-3, 5], [-2, 4]] },
        ],
        handList: [41, 5, 29],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 5], [-2, 5]],
                pitchLists: [
                    [1, 7, 4],
                    [0, 4, 8, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[-1, 4], [0, 4]],
                pitchLists: [
                    [8, 0, 5],
                    [7, 9, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[1, 4], [0, 5]],
                pitchLists: [
                    [8, 0, 5, 2],
                    [1, 7, 4, 10],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 36, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 14, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 41, placement: [[-1, -3], [0, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 38, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 8, placement: [[-2, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [6, 3, 9],
                    [11, 3, 8],
                    [7, 3, 0],
                    [3, 6, 0],
                ],
                points: 12,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 25, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 18, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 60, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 37, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 49, placement: [[4, -3], [3, -2]] },
        ],
        handList: [3, 6, 29],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [8, 1, 4, 0],
                    [6, 3, 0],
                    [10, 6, 2, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 6,
                placement: [[3, 0], [4, 0]],
                pitchLists: [
                    [3, 0, 6],
                    [9, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [9, 6, 0, 2],
                    [6, 2, 10],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 15, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 22, placement: [[3, -1], [2, -1]] },
        ],
        handList: [59, 40, 9],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 10, 3, 2],
                    [7, 2, 11, 5],
                    [10, 6, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 40,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [4, 10, 6, 1],
                    [6, 3, 9],
                    [6, 10, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 9,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [0, 6, 3, 9],
                    [0, 4, 7],
                    [9, 6, 10, 2],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[-4, 1], [-5, 2]] },
            { dominoIndex: 59, placement: [[-3, 0], [-3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[-3, 1], [-2, 1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 18, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 4, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [0, 4, 9],
                    [1, 4, 8, 0],
                    [0, 8, 4],
                ],
                points: 10,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 64, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 16, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 25, placement: [[1, 3], [2, 2]] },
            { dominoIndex: 39, placement: [[3, 2], [2, 3]] },
        ],
        handList: [20, 43, 8],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [1, 10, 6, 5],
                    [10, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[3, 0], [4, 0]],
                pitchLists: [
                    [1, 4, 9],
                    [4, 10, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[4, 1], [5, 0]],
                pitchLists: [
                    [8, 0, 4, 5],
                    [1, 4, 9, 8],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 30, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 9, placement: [[3, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 59, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 48, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [10, 1, 7],
                    [1, 11, 5, 8],
                    [4, 1, 7],
                    [4, 7, 2, 11],
                ],
                points: 14,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 16, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 50, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 28, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -3], [2, -4]] },
        ],
        handList: [3, 18, 39],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [9, 5, 0],
                    [9, 0, 3],
                    [0, 6, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 18,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [9, 5, 0, 1],
                    [0, 6, 3, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 39,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [1, 8, 4],
                    [9, 0, 3, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 50, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 16, placement: [[3, 0], [4, -1]] },
        ],
        handList: [15, 58, 28],
        moves: [
            {
                dominoIndex: 58,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [5, 10, 1, 7],
                    [6, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[5, -2], [4, -2]],
                pitchLists: [
                    [5, 9, 2],
                    [2, 6, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [1, 5, 9, 2],
                    [1, 5, 9],
                    [5, 2, 10, 6],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 35, placement: [[0, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[2, -2], [1, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[0, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [7, 2, 10],
                    [5, 11, 2],
                    [4, 11, 7],
                ],
                points: 9,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 43, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 59, placement: [[1, 1], [0, 1]] },
        ],
        handList: [20, 34, 25],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [1, 6, 10],
                    [6, 4, 1, 10],
                    [10, 6, 0, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [7, 3, 4, 11],
                    [3, 1, 6, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 25,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [6, 2, 1, 9],
                    [7, 2, 10, 3],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 19, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 34, placement: [[3, -1], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[2, -1], [3, -2]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 18, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 36, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 4, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 60, placement: [[-1, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [11, 4, 8],
                    [3, 8, 4, 0],
                    [1, 4, 7],
                    [5, 8, 11],
                ],
                points: 13,
            },
        ],
    },
}
