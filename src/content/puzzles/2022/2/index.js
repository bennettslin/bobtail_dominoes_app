import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 43, placement: [[-1, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, 0], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 17, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 24, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 20, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [9, 1, 6],
                    [6, 10, 2, 5],
                    [1, 7, 10],
                    [10, 1, 5],
                ],
                points: 13,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 65, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 56, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 27, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[-4, 2], [-3, 2]] },
        ],
        handList: [26, 51, 4],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [8, 11, 2],
                    [11, 5, 2],
                    [1, 4, 9, 7],
                    [6, 2, 11, 7],
                ],
                points: 14,
            },
            {
                dominoIndex: 51,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [8, 11, 2, 5],
                    [2, 11, 5],
                    [2, 5, 11],
                    [11, 2, 7],
                ],
                points: 13,
            },
            {
                dominoIndex: 4,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [8, 9, 4, 0],
                    [11, 2, 7, 4],
                ],
                points: 8,
            },
        ],
        points: 37,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 37, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 30, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[1, -1], [0, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 59, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 39, placement: [[2, 0], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [7, 4, 1],
                    [9, 1, 4, 5],
                    [1, 7, 10],
                    [9, 4, 1, 7],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 65, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 6, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 14, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 49, placement: [[4, -5], [3, -5]] },
            { dominoIndex: 2, placement: [[2, -5], [3, -6]] },
            { dominoIndex: 30, placement: [[1, -5], [0, -4]] },
        ],
        handList: [15, 63, 54],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [1, 8, 4, 11],
                    [1, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [11, 8, 2],
                    [1, 5, 8],
                    [1, 8, 5, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [6, 11, 8, 2],
                    [4, 1, 9, 6],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 16, placement: [[-4, 3], [-4, 4]] },
        ],
        handList: [8, 37, 6],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-4, 2], [-4, 1]],
                pitchLists: [
                    [10, 3, 1, 6],
                ],
                points: 4,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [3, 9, 0],
                    [4, 8, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 6,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [3, 8, 6, 0],
                    [3, 9, 0, 6],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 37, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 17, placement: [[-1, 3], [-1, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [10, 7, 4],
                    [1, 10, 4],
                    [2, 7, 10],
                ],
                points: 9,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 14, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 60, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 33, placement: [[-2, -1], [-2, -2]] },
            { dominoIndex: 37, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 4, placement: [[2, -2], [1, -1]] },
        ],
        handList: [47, 9, 26],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [4, 0, 9],
                ],
                points: 3,
            },
            {
                dominoIndex: 26,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [2, 7, 11],
                    [4, 7, 0],
                    [7, 4, 0, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 47,
                placement: [[3, -4], [3, -3]],
                pitchLists: [
                    [5, 2, 7, 11],
                    [7, 0, 4, 8],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[-2, 2], [-2, 1]] },
            { dominoIndex: 65, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 15, placement: [[0, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[-1, 0], [-1, 1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 28, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 7, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [9, 3, 0],
                    [9, 0, 3],
                    [0, 10, 3, 7],
                    [6, 10, 3],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 51, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 26, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 27, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 36, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 55, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 38, placement: [[-3, 3], [-4, 3]] },
        ],
        handList: [7, 48, 13],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [0, 7, 3],
                    [3, 9, 0],
                    [7, 2, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 48,
                placement: [[-4, 2], [-4, 1]],
                pitchLists: [
                    [5, 7, 2, 11],
                    [8, 5, 11],
                    [3, 9, 0, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 13,
                placement: [[-4, 0], [-5, 1]],
                pitchLists: [
                    [1, 8, 5, 11],
                    [3, 8, 0],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 19, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [49, 3, 48],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [1, 9, 6, 5],
                    [0, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [4, 9, 0],
                    [8, 3, 0],
                    [6, 9, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 48,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [4, 9, 0, 5],
                    [5, 0, 8],
                    [0, 3, 8],
                ],
                points: 10,
            },
        ],
        points: 28,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 36, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [1, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 48, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 54, placement: [[-1, 0], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 1,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [0, 9, 3],
                    [5, 8, 0, 1],
                    [1, 9, 4],
                ],
                points: 10,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 50, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 33, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 41, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 1, placement: [[2, 0], [2, 1]] },
        ],
        handList: [59, 21, 54],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [7, 5, 10, 1],
                    [7, 10, 4],
                    [10, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 21,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [5, 10, 1],
                    [11, 10, 7, 3],
                    [2, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [9, 6, 1, 4],
                    [2, 7, 11, 6],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 27, placement: [[-1, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 3], [-1, 4]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 7, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [8, 5, 0],
                    [8, 0, 3, 7],
                    [5, 0, 8, 4],
                    [11, 8, 3],
                ],
                points: 14,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 37, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 43, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 17, placement: [[-2, 3], [-2, 2]] },
        ],
        handList: [14, 60, 18],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [9, 4, 1],
                    [6, 9, 1],
                    [4, 1, 8],
                    [5, 0, 9, 4],
                ],
                points: 13,
            },
            {
                dominoIndex: 18,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [4, 8, 1],
                    [9, 4, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[3, 2], [2, 2]],
                pitchLists: [
                    [3, 10, 11, 7],
                    [4, 8, 1, 11],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 53, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 19, placement: [[2, -1], [3, -1]] },
        ],
        handList: [5, 43, 42],
        moves: [
            {
                dominoIndex: 5,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [9, 5, 0],
                    [1, 8, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 43,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [4, 9, 0],
                    [6, 9, 0, 4],
                    [1, 8, 5, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 42,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [9, 5, 0, 4],
                    [4, 9, 0, 8],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 51, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 15, placement: [[1, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [0, 3, 9],
                    [5, 11, 8, 3],
                    [5, 1, 8, 9],
                ],
                points: 11,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 6, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 19, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 34, placement: [[1, 1], [0, 2]] },
        ],
        handList: [54, 5, 28],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [3, 9, 6],
                    [6, 9, 0],
                    [6, 1, 9],
                    [6, 1, 9],
                ],
                points: 12,
            },
            {
                dominoIndex: 5,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [3, 9, 6, 0],
                    [0, 9, 6],
                    [5, 6, 1, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 28,
                placement: [[4, -3], [5, -3]],
                pitchLists: [
                    [5, 2, 9],
                    [2, 0, 9, 6],
                ],
                points: 7,
            },
        ],
        points: 32,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 38, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 27, placement: [[1, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 2], [0, 3]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 13, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[-1, -1], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [2, 5, 11],
                    [5, 10, 2],
                    [6, 1, 10, 5],
                    [0, 8, 5],
                ],
                points: 13,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 16, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 43, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 6, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 54, placement: [[-2, 3], [-2, 4]] },
        ],
        handList: [55, 9, 12],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [1, 10, 6],
                    [6, 9, 4, 0],
                    [10, 9, 5, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [4, 5, 9, 0],
                    [6, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 12,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [1, 2, 10, 6],
                    [2, 6, 1, 9],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 24, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 29, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [55, 14],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [6, 10, 5, 2],
                    [6, 7, 10, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [7, 10, 1],
                    [4, 1, 8],
                    [4, 10, 1],
                ],
                points: 9,
            },
        ],
        points: 17,
    },
}
