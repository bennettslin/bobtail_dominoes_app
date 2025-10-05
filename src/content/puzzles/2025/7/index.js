import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 2], [0, 1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 6, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 17, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [0, 3, 7],
                    [6, 3, 10],
                    [10, 7, 1],
                ],
                points: 9,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 30, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 5, placement: [[-2, 1], [-1, 0]] },
        ],
        handList: [29, 24, 63],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [5, 2, 9, 11],
                    [2, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [2, 5, 10, 8],
                    [4, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [5, 6, 2, 10],
                    [11, 2, 7],
                    [2, 4, 8, 11],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 30, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 50, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 12, placement: [[0, 1], [0, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 35, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 51, placement: [[0, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [3, 9, 0],
                    [11, 8, 4, 0],
                    [6, 9, 0],
                    [0, 4, 9],
                    [5, 0, 9],
                ],
                points: 16,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 12, placement: [[-3, 4], [-2, 4]] },
            { dominoIndex: 51, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 20, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 30, placement: [[1, 2], [1, 3]] },
        ],
        handList: [5, 48, 16],
        moves: [
            {
                dominoIndex: 16,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 8, 4, 11],
                    [6, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [1, 5, 8],
                    [5, 8, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 5,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [5, 0, 8],
                    [0, 5, 8, 1],
                    [5, 6, 1, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[1, 0], [2, 0]] },
        ],
        handList: [42, 9, 59],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [4, 7, 2, 10],
                    [11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [3, 0, 9],
                    [0, 11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [7, 3, 0, 9],
                    [7, 10, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, -1], [1, -1]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[-1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [6, 0, 9],
                    [3, 0, 6],
                    [6, 0, 3],
                    [1, 9, 6],
                ],
                points: 12,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 41, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 54, placement: [[0, -2], [1, -3]] },
        ],
        handList: [35, 45, 7],
        moves: [
            {
                dominoIndex: 35,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [3, 8, 0],
                    [3, 9, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 45,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [4, 3, 8, 0],
                    [11, 3, 9, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[3, -4], [4, -5]],
                pitchLists: [
                    [7, 0, 8, 4],
                    [4, 11, 7],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 42, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 3, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 65, placement: [[0, 3], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 1], [0, 2]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 6, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 36, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 61, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 9, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [9, 2, 6],
                    [2, 0, 9, 6],
                    [9, 3, 0, 6],
                    [6, 3, 0],
                ],
                points: 14,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 17, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[-3, -1], [-2, -1]] },
            { dominoIndex: 38, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 8, placement: [[-3, 1], [-3, 0]] },
        ],
        handList: [43, 58, 56],
        moves: [
            {
                dominoIndex: 43,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [3, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [3, 9, 0, 7],
                    [11, 6, 3, 9],
                    [4, 0, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 56,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [4, 0, 9, 6],
                    [7, 2, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[1, 2], [0, 2]] },
        ],
        handList: [11, 29, 44],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [2, 7, 11, 4],
                    [4, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [4, 10, 7],
                    [7, 10, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 11,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 7, 0, 11],
                    [0, 4, 7, 10],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 27, placement: [[-2, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 29, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 24, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 7, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [2, 5, 8],
                    [2, 8, 11],
                    [11, 4, 7, 0],
                ],
                points: 10,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 45, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 17, placement: [[3, 0], [4, -1]] },
            { dominoIndex: 44, placement: [[0, 2], [1, 2]] },
        ],
        handList: [3, 16, 49],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, 2], [2, 3]],
                pitchLists: [
                    [4, 10, 7, 0],
                    [11, 4, 7, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 16,
                placement: [[1, 3], [1, 4]],
                pitchLists: [
                    [10, 1, 6],
                    [0, 3, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 49,
                placement: [[1, 5], [0, 5]],
                pitchLists: [
                    [10, 1, 6, 5],
                    [0, 3, 6, 9],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 60, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 27, placement: [[1, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 41, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 37, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 34, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [5, 2, 10],
                    [2, 7, 11],
                    [2, 7, 10],
                    [11, 7, 3, 0],
                ],
                points: 13,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 12, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 54, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 53, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 3, placement: [[-1, 4], [-2, 5]] },
            { dominoIndex: 30, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 51, placement: [[2, 3], [2, 4]] },
        ],
        handList: [29, 26, 33],
        moves: [
            {
                dominoIndex: 26,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [10, 2, 7],
                    [2, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 10, 2],
                    [1, 10, 7],
                    [10, 2, 5, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 33,
                placement: [[3, 0], [4, -1]],
                pitchLists: [
                    [10, 2, 7, 3],
                    [5, 10, 2, 6],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 58, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 30, placement: [[0, 3], [1, 3]] },
        ],
        handList: [55, 14, 50],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [10, 6, 2, 11],
                    [1, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-2, 4], [-3, 4]],
                pitchLists: [
                    [9, 6, 1],
                    [1, 7, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [1, 5, 10],
                    [5, 9, 6, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 51, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 27, placement: [[0, 1], [0, 2]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 23, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 43, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 16, placement: [[2, -3], [3, -3]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [6, 1, 9, 4],
                    [1, 2, 6, 10],
                ],
                points: 8,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 33, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 14, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
        ],
        handList: [15, 7, 42],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [1, 5, 10],
                    [10, 1, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-3, 5], [-3, 4]],
                pitchLists: [
                    [1, 8, 4],
                    [10, 1, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [0, 1, 8, 4],
                    [3, 0, 7],
                    [7, 1, 5, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 5, placement: [[2, 2], [2, 1]] },
            { dominoIndex: 40, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 24, placement: [[4, -2], [4, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[3, 0], [4, -1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 51, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 6, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 19, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [2, 3, 10, 6],
                    [6, 1, 9],
                    [6, 10, 1],
                    [10, 0, 6, 3],
                ],
                points: 14,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 36, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 29, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 37, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 38, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 25, placement: [[2, -2], [3, -2]] },
        ],
        handList: [9, 44, 19],
        moves: [
            {
                dominoIndex: 9,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [6, 0, 9],
                    [0, 6, 10, 3],
                    [0, 3, 6, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 44,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [4, 6, 0, 9],
                    [10, 2, 11, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [1, 10, 4],
                    [9, 2, 6],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 59, placement: [[3, 0], [2, 0]] },
        ],
        handList: [45, 3, 35],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [7, 11, 4],
                    [2, 6, 10, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [6, 0, 3],
                    [3, 7, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[3, 1], [4, 1]],
                pitchLists: [
                    [11, 3, 8],
                    [0, 7, 3],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 17, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 4, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 9, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [5, 0, 4, 8],
                    [4, 9, 1],
                    [8, 0, 4, 9],
                ],
                points: 11,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 37, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 3, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 54, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 48, placement: [[-2, 3], [-2, 2]] },
        ],
        handList: [24, 19, 64],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [11, 2, 6],
                    [5, 2, 9],
                    [5, 11, 3, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 19,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 9, 1],
                    [1, 6, 9, 3],
                    [9, 2, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 64,
                placement: [[3, 0], [4, -1]],
                pitchLists: [
                    [11, 2, 6, 9],
                    [5, 9, 1, 10],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
}
