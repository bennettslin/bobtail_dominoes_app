import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 31, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [5, 1, 10],
                    [4, 7, 1],
                    [3, 7, 10],
                ],
                points: 9,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 26, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 5, placement: [[4, -2], [4, -1]] },
            { dominoIndex: 48, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 2, placement: [[5, -4], [4, -4]] },
        ],
        handList: [43, 13, 44],
        moves: [
            {
                dominoIndex: 43,
                placement: [[5, -3], [5, -2]],
                pitchLists: [
                    [0, 4, 9],
                    [4, 0, 7],
                    [5, 0, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 13,
                placement: [[6, -3], [6, -2]],
                pitchLists: [
                    [8, 4, 1],
                    [1, 9, 5],
                    [5, 0, 9, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 44,
                placement: [[7, -4], [7, -3]],
                pitchLists: [
                    [4, 1, 9, 5],
                    [8, 4, 1, 10],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 36, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 42, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 31, placement: [[-2, 3], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[-1, 2], [0, 1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 54, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 28, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 25, placement: [[3, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [1, 6, 9, 2],
                    [6, 1, 10, 5],
                    [9, 1, 5],
                    [5, 10, 2, 6],
                ],
                points: 15,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 60, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 15, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 27, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 59, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 17, placement: [[3, -5], [3, -4]] },
        ],
        handList: [30, 42, 51],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, -4], [2, -4]],
                pitchLists: [
                    [2, 11, 7],
                    [2, 7, 11],
                    [11, 2, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 42,
                placement: [[2, -5], [1, -5]],
                pitchLists: [
                    [8, 4, 1],
                    [4, 11, 2, 8],
                    [4, 2, 7, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[1, -6], [0, -5]],
                pitchLists: [
                    [5, 8, 2],
                    [11, 8, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 64, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 55, placement: [[-2, 1], [-3, 2]] },
        ],
        handList: [18, 6, 19],
        moves: [
            {
                dominoIndex: 18,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [8, 1, 5],
                    [1, 2, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [8, 1, 5, 0],
                    [9, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [10, 1, 6],
                    [5, 9, 1],
                    [6, 9, 0],
                    [2, 9, 6],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 56, placement: [[1, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 7, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 4, placement: [[4, -3], [3, -3]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 8, 0, 11],
                    [8, 7, 4, 0],
                ],
                points: 8,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 21, placement: [[0, 2], [1, 2]] },
        ],
        handList: [18, 9, 45],
        moves: [
            {
                dominoIndex: 18,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [5, 8, 1],
                    [11, 6, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [0, 9, 6],
                    [2, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 45,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [4, 11, 8],
                    [2, 9, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 4, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 19, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 25, placement: [[0, -4], [0, -3]] },
            { dominoIndex: 6, placement: [[2, -4], [3, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[1, -3], [2, -3]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 13, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 7, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [7, 3, 0],
                    [11, 4, 7, 0],
                    [5, 8, 11, 3],
                    [0, 7, 3, 10],
                ],
                points: 15,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 18, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 26, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 43, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 41, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 44, placement: [[-1, -2], [-2, -2]] },
        ],
        handList: [8, 21, 24],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [3, 8, 0],
                    [1, 8, 4, 0],
                    [7, 4, 0, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 24,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [9, 5, 2],
                    [3, 8, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 21,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [11, 4, 8, 1],
                    [1, 9, 5, 2],
                    [11, 1, 4, 8],
                ],
                points: 12,
            },
        ],
        points: 32,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 58, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 0]] },
        ],
        handList: [63, 41, 2],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [8, 11, 3, 7],
                    [8, 4, 10, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [4, 1, 8],
                    [4, 7, 10],
                    [7, 4, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 2,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [7, 4, 11, 0],
                    [0, 3, 9],
                    [10, 7, 3, 2],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 57, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 10, placement: [[-1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[0, 1], [1, 1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [8, 4, 1],
                    [5, 10, 1],
                    [5, 9, 0, 4],
                ],
                points: 10,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 15, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 18, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 43, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 4, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [14, 59, 24],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [9, 5, 2],
                    [9, 1, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 4], [-2, 4]],
                pitchLists: [
                    [2, 10, 7],
                    [9, 1, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 5], [-4, 4]],
                pitchLists: [
                    [9, 5, 2, 1],
                    [4, 2, 10, 7],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 25, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 53, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 4, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 39, placement: [[4, -3], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [4, 0, 9, 5],
                    [4, 9, 1],
                    [9, 4, 0],
                    [0, 9, 6],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 51, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 18, placement: [[-1, 4], [-2, 5]] },
            { dominoIndex: 13, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 5, placement: [[2, -2], [1, -1]] },
        ],
        handList: [63, 15, 37],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 7, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [1, 5, 8],
                    [1, 0, 5, 8],
                    [5, 11, 7, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 37,
                placement: [[4, -1], [3, 0]],
                pitchLists: [
                    [5, 11, 8, 3],
                    [1, 5, 8, 10],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 60, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 15, placement: [[-3, 2], [-2, 2]] },
        ],
        handList: [42, 59, 44],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [4, 7, 11],
                    [10, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-4, 3], [-4, 2]],
                pitchLists: [
                    [10, 4, 1, 7],
                    [10, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-4, 1], [-5, 2]],
                pitchLists: [
                    [4, 10, 7],
                    [8, 10, 1, 5],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 44, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 8, placement: [[-3, 0], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 43, placement: [[-4, 1], [-4, 2]] },
            { dominoIndex: 15, placement: [[-3, 2], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [8, 1, 9, 5],
                    [11, 2, 5, 9],
                ],
                points: 8,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 62, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 56, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 30, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 34, placement: [[-2, 4], [-2, 3]] },
        ],
        handList: [41, 6, 48],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 4], [-2, 5]],
                pitchLists: [
                    [8, 2, 11, 5],
                    [11, 7, 3, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 6,
                placement: [[-3, 6], [-3, 5]],
                pitchLists: [
                    [5, 8, 0],
                    [11, 3, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [7, 11, 4],
                    [0, 10, 7, 4],
                    [4, 5, 8, 0],
                    [6, 11, 2, 7],
                    [7, 11, 3, 6],
                ],
                points: 19,
            },
        ],
        points: 35,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 34, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 4, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 33, placement: [[-2, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[0, 0], [1, -1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 40, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 34, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 27, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [11, 8, 4],
                    [4, 11, 7, 3],
                    [6, 2, 11],
                    [11, 8, 2],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 32, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 42, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 8, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 3, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 41, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 7, placement: [[2, -5], [2, -4]] },
        ],
        handList: [5, 14, 62],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [8, 1, 0, 5],
                    [3, 8, 0],
                    [0, 8, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[0, -4], [1, -4]],
                pitchLists: [
                    [1, 4, 7],
                    [4, 3, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 62,
                placement: [[3, -6], [2, -6]],
                pitchLists: [
                    [8, 0, 4],
                    [10, 0, 7, 4],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 47, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 18, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 64, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [41, 66, 51],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [1, 4, 7],
                    [10, 2, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 66,
                placement: [[-4, 1], [-3, 0]],
                pitchLists: [
                    [10, 1, 7],
                    [11, 5, 2, 8],
                    [11, 1, 4, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [10, 1, 7, 5],
                    [9, 2, 5, 11],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 51, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 27, placement: [[-1, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [-1, 2]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 59, placement: [[1, 0], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [1, 7, 10],
                    [1, 10, 4],
                    [10, 1, 7],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 34, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 65, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 49, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 1, placement: [[-2, 1], [-2, 2]] },
        ],
        handList: [42, 59, 5],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [0, 8, 4],
                    [8, 1, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [7, 10, 4],
                    [10, 8, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[-4, 4], [-5, 4]],
                pitchLists: [
                    [7, 10, 4, 0],
                    [0, 8, 4, 5],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 55, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 15, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 27, placement: [[2, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, -2], [0, -1]] },
        ],
    },
}
