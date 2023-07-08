import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 45, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 34, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 63, placement: [[1, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [7, 0, 3],
                    [0, 4, 8, 11],
                    [3, 11, 7],
                ],
                points: 10,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 13, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 43, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 29, placement: [[2, -1], [1, -1]] },
        ],
        handList: [59, 56, 37],
        moves: [
            {
                dominoIndex: 37,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [7, 10, 2, 3],
                ],
                points: 4,
            },
            {
                dominoIndex: 56,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [1, 3, 6, 10],
                    [11, 6, 2],
                    [6, 10, 4, 1],
                    [11, 3, 7, 10],
                ],
                points: 15,
            },
            {
                dominoIndex: 59,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [7, 3, 10],
                    [10, 7, 1],
                    [10, 11, 6, 2],
                ],
                points: 10,
            },
        ],
        points: 31,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 25, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 14, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 54, placement: [[4, -4], [3, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 25, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 20, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 33, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 50, placement: [[4, -1], [5, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [6, 2, 10, 5],
                    [6, 10, 3],
                    [9, 6, 3],
                    [9, 5, 1, 10],
                    [9, 2, 6],
                ],
                points: 17,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 30, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 56, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 12, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 9, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 48, placement: [[2, 2], [3, 2]] },
        ],
        handList: [33, 8, 34],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [9, 11, 6, 3],
                    [2, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [0, 8, 3],
                    [0, 2, 9, 6],
                    [8, 5, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [3, 8, 5, 11],
                    [7, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 8, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [15, 49, 19],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [5, 3, 0, 9],
                ],
                points: 4,
            },
            {
                dominoIndex: 49,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [5, 8, 1],
                    [0, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 19,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [9, 1, 6, 5],
                    [5, 1, 9, 0],
                    [1, 6, 9],
                ],
                points: 11,
            },
        ],
        points: 23,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 57, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 48, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 0], [0, 1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 19, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 16, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 41, placement: [[-1, -2], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [7, 1, 10],
                    [4, 1, 7],
                    [1, 10, 7],
                ],
                points: 9,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 27, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 31, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 5, placement: [[-2, 3], [-1, 2]] },
        ],
        handList: [45, 48, 20],
        moves: [
            {
                dominoIndex: 45,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [0, 8, 4],
                    [2, 8, 11, 4],
                    [1, 5, 8, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 48,
                placement: [[-2, 6], [-2, 5]],
                pitchLists: [
                    [0, 2, 8, 5],
                    [4, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-3, 6], [-4, 6]],
                pitchLists: [
                    [10, 1, 5],
                    [4, 11, 8, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 60, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 20, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[-1, 1], [0, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 41, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 3, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 5, placement: [[-1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [4, 1, 7],
                    [8, 0, 4],
                    [4, 8, 0, 3],
                ],
                points: 14,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 55, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 20, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 8, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 43, placement: [[1, -2], [1, -1]] },
        ],
        handList: [4, 34, 56],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [9, 4, 0],
                    [6, 9, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[1, 3], [1, 4]],
                pitchLists: [
                    [5, 0, 8, 3],
                    [9, 4, 0, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 56,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [6, 3, 0],
                    [11, 3, 7],
                    [11, 8, 4],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 55, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 26, placement: [[1, 2], [0, 2]] },
        ],
        handList: [3, 35, 14],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, 3], [3, 2]],
                pitchLists: [
                    [6, 3, 0],
                    [7, 2, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[4, 0], [3, 0]],
                pitchLists: [
                    [3, 6, 10],
                    [8, 6, 3, 0],
                    [8, 11, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[5, -1], [4, -1]],
                pitchLists: [
                    [1, 3, 6, 10],
                    [4, 8, 11, 2],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[-4, 2], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 6, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 22, placement: [[0, -3], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 13,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [10, 6, 1],
                    [3, 6, 1, 10],
                    [6, 0, 3],
                ],
                points: 10,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 24, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 3], [2, 2]] },
        ],
        handList: [27, 41, 7],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [11, 7, 4],
                    [4, 11, 8],
                    [2, 7, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 27,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [2, 11, 7, 4],
                    [11, 2, 5],
                    [5, 2, 8],
                    [8, 5, 2, 11],
                ],
                points: 14,
            },
            {
                dominoIndex: 7,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [5, 2, 8, 0],
                    [2, 11, 5, 7],
                ],
                points: 8,
            },
        ],
        points: 33,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 37, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[0, -1], [1, -1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 50, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 40, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 63, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [2, 11, 7, 4],
                    [2, 5, 11],
                    [10, 7, 2],
                    [7, 2, 10, 6],
                    [7, 11, 3],
                ],
                points: 17,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 50, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 55, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 22, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [38, 33, 5],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [3, 6, 10, 2],
                    [8, 11, 5, 3],
                    [7, 10, 3, 11],
                ],
                points: 12,
            },
            {
                dominoIndex: 5,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [0, 5, 8],
                ],
                points: 3,
            },
            {
                dominoIndex: 33,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [0, 5, 8, 3],
                    [3, 2, 10, 6],
                    [6, 3, 11, 9],
                ],
                points: 12,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 15, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 54, placement: [[-2, 1], [-3, 1]] },
        ],
        handList: [25, 13, 28],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-5, 3], [-4, 3]],
                pitchLists: [
                    [2, 9, 5],
                    [6, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 25,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [2, 9, 6, 0],
                    [2, 6, 9],
                    [6, 1, 9],
                    [9, 6, 2],
                ],
                points: 13,
            },
            {
                dominoIndex: 13,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [2, 9, 5, 1],
                    [6, 9, 1],
                    [6, 1, 9, 3],
                ],
                points: 11,
            },
        ],
        points: 32,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 36, placement: [[-1, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[0, 0], [1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 59, placement: [[0, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [1, 7, 4],
                    [4, 10, 7],
                    [7, 4, 10],
                ],
                points: 9,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 1, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 54, placement: [[-1, 3], [-2, 4]] },
        ],
        handList: [29, 48, 43],
        moves: [
            {
                dominoIndex: 29,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [6, 10, 2],
                    [2, 6, 9],
                    [1, 3, 10, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [5, 6, 10, 2],
                    [1, 0, 5, 8],
                    [8, 0, 3, 6],
                ],
                points: 12,
            },
            {
                dominoIndex: 43,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [4, 9, 5, 0],
                    [9, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 7, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 19, placement: [[3, -1], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[2, 0], [1, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 28, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 59, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 4, placement: [[2, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [1, 9, 6],
                    [0, 6, 3],
                    [4, 9, 0],
                    [0, 9, 6],
                ],
                points: 12,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 1, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 40, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 9, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 41, placement: [[1, -4], [0, -4]] },
        ],
        handList: [49, 3, 48],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [9, 5, 0, 1],
                    [5, 9, 4, 0],
                    [0, 9, 4, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 48,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [11, 5, 8],
                    [8, 0, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [0, 3, 4, 8],
                    [3, 11, 5, 8],
                    [6, 0, 9, 3],
                ],
                points: 12,
            },
        ],
        points: 32,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 46, placement: [[-4, 3], [-3, 3]] },
            { dominoIndex: 9, placement: [[-3, 1], [-4, 1]] },
        ],
        handList: [59, 25, 44],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [2, 0, 9, 6],
                    [6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [10, 4, 1],
                    [10, 6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [9, 0, 4, 7],
                    [10, 4, 1, 7],
                    [2, 7, 10, 6],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 4, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 51, placement: [[3, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 61, placement: [[3, 0], [2, 0]] },
        ],
    },
}
