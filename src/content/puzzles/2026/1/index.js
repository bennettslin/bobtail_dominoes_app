import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 21, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 6, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 24, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 35, placement: [[-2, 2], [-2, 1]] },
        ],
        handList: [28, 8, 5],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [2, 9, 5],
                    [9, 2, 5, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [2, 9, 5, 0],
                    [0, 8, 5],
                    [5, 8, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 5,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [5, 0, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 20, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 17, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 43, placement: [[3, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 61, placement: [[0, 0], [0, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 41, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 62, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 17, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[1, 3], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [1, 4, 9],
                    [8, 5, 11, 1],
                    [6, 7, 10, 2],
                    [10, 1, 4, 6],
                ],
                points: 15,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 45, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 24, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 35, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 55, placement: [[-3, 5], [-2, 4]] },
        ],
        handList: [41, 9, 25],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 4], [0, 4]],
                pitchLists: [
                    [10, 4, 7],
                    [8, 11, 3, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [8, 3, 0],
                    [9, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 25,
                placement: [[1, 4], [1, 3]],
                pitchLists: [
                    [10, 4, 7, 2],
                    [11, 9, 6, 2],
                    [8, 3, 0, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 33, placement: [[-1, 4], [0, 3]] },
            { dominoIndex: 17, placement: [[2, 1], [2, 2]] },
        ],
        handList: [50, 54, 14],
        moves: [
            {
                dominoIndex: 50,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [8, 5, 1],
                    [10, 5, 2],
                    [10, 1, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 54,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [6, 2, 10, 7],
                    [6, 9, 3],
                    [10, 5, 2, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[1, 3], [2, 3]],
                pitchLists: [
                    [9, 6, 1, 4],
                    [5, 10, 1],
                    [10, 1, 7, 4],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 39, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 2, placement: [[3, -1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[2, -2], [2, -1]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[2, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [0, 8, 3],
                    [7, 4, 11, 3],
                    [11, 5, 8],
                ],
                points: 10,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 25, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 19, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 4, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [48, 3, 14],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [9, 2, 5, 1],
                ],
                points: 4,
            },
            {
                dominoIndex: 48,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [0, 8, 5],
                    [9, 1, 5],
                    [9, 8, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [6, 0, 9, 4],
                    [3, 0, 5, 8],
                    [1, 9, 6, 3],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 14, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 52, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 4, placement: [[-3, 0], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 21, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[-1, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [1, 10, 6],
                    [2, 6, 10, 1],
                    [6, 2, 10],
                    [9, 5, 2, 10],
                ],
                points: 14,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 57, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 4, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 60, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 55, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 3, placement: [[4, -4], [3, -4]] },
        ],
        handList: [37, 20, 33],
        moves: [
            {
                dominoIndex: 37,
                placement: [[1, -3], [1, -4]],
                pitchLists: [
                    [10, 3, 7, 11],
                    [6, 3, 11],
                    [10, 6, 3, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [1, 6, 10, 3],
                    [10, 6, 3, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[4, -7], [3, -6]],
                pitchLists: [
                    [3, 6, 1, 10],
                    [6, 10, 3],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 66, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 50, placement: [[1, 0], [2, 0]] },
        ],
        handList: [48, 15, 19],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [5, 8, 11],
                    [8, 2, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [10, 1, 5],
                    [5, 8, 11, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [6, 5, 1, 9],
                    [10, 1, 5],
                    [10, 1, 5, 9],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[-3, 3], [-2, 2]] },
            { dominoIndex: 30, placement: [[0, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-1, 1], [0, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 34, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [1, 11, 4, 7],
                    [10, 1, 4],
                    [10, 3, 7],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 33, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 57, placement: [[0, -3], [1, -3]] },
        ],
        handList: [4, 25, 52],
        moves: [
            {
                dominoIndex: 4,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [0, 4, 9],
                    [4, 0, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 25,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [11, 9, 2, 6],
                    [0, 4, 9, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 52,
                placement: [[4, -2], [4, -3]],
                pitchLists: [
                    [6, 9, 2],
                    [7, 4, 0, 9],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 23, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 41, placement: [[3, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 62, placement: [[0, 0], [0, 1]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 51, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 19, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 52, placement: [[-1, -2], [0, -3]] },
            { dominoIndex: 18, placement: [[3, -5], [2, -4]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [2, 8, 11, 5],
                    [2, 10, 7, 6],
                    [10, 5, 1, 9],
                ],
                points: 12,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 11, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 5, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 61, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 21, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 36, placement: [[0, -2], [-1, -1]] },
        ],
        handList: [7, 4, 34],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [0, 11, 4, 8],
                    [3, 9, 7, 0],
                    [7, 1, 9, 4],
                ],
                points: 12,
            },
            {
                dominoIndex: 4,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [0, 4, 9],
                    [4, 7, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[-2, -2], [-1, -3]],
                pitchLists: [
                    [3, 4, 7, 11],
                    [7, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 14, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [19, 42, 9],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [0, 4, 7],
                    [9, 4, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [9, 1, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-3, 0], [-3, -1]],
                pitchLists: [
                    [4, 9, 1, 5],
                    [8, 4, 1],
                    [9, 0, 4],
                    [8, 0, 4, 7],
                ],
                points: 14,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 65, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 28, placement: [[2, -3], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[1, -1], [2, -1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 27, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 39, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [2, 11, 8],
                    [5, 1, 8],
                    [4, 8, 11],
                ],
                points: 9,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 30, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 14, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
        ],
        handList: [66, 35, 8],
        moves: [
            {
                dominoIndex: 66,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [3, 11, 6, 10],
                    [1, 4, 8, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 35,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [3, 8, 6, 11],
                    [8, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [0, 8, 11, 4],
                    [3, 0, 8],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[1, 3], [0, 3]] },
            { dominoIndex: 33, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 56, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 26, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 57, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 44, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 43, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 8, placement: [[-4, 2], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [9, 1, 4],
                    [10, 4, 1],
                    [8, 9, 1, 5],
                    [4, 0, 9, 5],
                ],
                points: 14,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 27, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 53, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 47, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 55, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 38, placement: [[-2, -1], [-3, -1]] },
            { dominoIndex: 43, placement: [[-4, 0], [-4, 1]] },
        ],
        handList: [63, 24, 28],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-2, -2], [-2, -3]],
                pitchLists: [
                    [11, 8, 3],
                    [8, 11, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-1, -3], [0, -3]],
                pitchLists: [
                    [11, 2, 5],
                    [2, 8, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [5, 2, 8, 10],
                    [9, 2, 6],
                    [11, 2, 5, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 14, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[-2, -2], [-1, -2]] },
        ],
        handList: [55, 7, 44],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [6, 10, 1],
                ],
                points: 3,
            },
            {
                dominoIndex: 7,
                placement: [[-3, -2], [-2, -3]],
                pitchLists: [
                    [0, 4, 7],
                    [7, 4, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 44,
                placement: [[-4, -1], [-4, -2]],
                pitchLists: [
                    [4, 6, 10, 1],
                    [7, 0, 4],
                    [10, 0, 4, 7],
                ],
                points: 11,
            },
        ],
        points: 22,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 13, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 53, placement: [[1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 24, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 37, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [9, 3, 6],
                    [2, 5, 10, 6],
                    [1, 7, 10],
                    [6, 3, 10],
                ],
                points: 13,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 9, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 49, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 39, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [5, 18, 20],
        moves: [
            {
                dominoIndex: 5,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [0, 5, 9],
                    [5, 0, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[2, -3], [1, -3]],
                pitchLists: [
                    [8, 1, 5],
                    [1, 0, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [10, 1, 5, 6],
                    [8, 1, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 26, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 3, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 38, placement: [[0, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [1, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 18, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 14, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 60, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 63, placement: [[2, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [1, 7, 4],
                    [7, 10, 1],
                    [4, 10, 1, 8],
                    [3, 10, 7, 11],
                ],
                points: 14,
            },
        ],
    },
}
