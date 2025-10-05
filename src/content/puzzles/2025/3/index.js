import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 46, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 27, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 3, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 47, placement: [[4, -1], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [5, 3, 8, 0],
                    [11, 8, 3],
                    [2, 8, 11],
                    [6, 11, 3],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 61, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 45, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 37, placement: [[-3, 4], [-3, 3]] },
        ],
        handList: [48, 53, 17],
        moves: [
            {
                dominoIndex: 48,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [5, 8, 11, 1],
                    [2, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 53,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [2, 8, 11, 6],
                    [11, 3, 8],
                    [5, 11, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 17,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [5, 11, 8, 1],
                    [11, 3, 8, 7],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 51, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 4, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 48, placement: [[1, 2], [1, 1]] },
        ],
        handList: [19, 18],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 1, 9],
                    [1, 8, 5],
                    [9, 8, 0, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 18,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [5, 11, 8, 1],
                    [8, 1, 5],
                    [4, 1, 9, 8],
                ],
                points: 11,
            },
        ],
        points: 21,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 4, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[-1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[1, -1], [0, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 2, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [5, 10, 2],
                    [11, 8, 5],
                    [8, 5, 0],
                ],
                points: 9,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 21, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 38, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 55, placement: [[-1, 3], [-1, 4]] },
        ],
        handList: [29, 34, 16],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [8, 11, 2],
                    [7, 2, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 16,
                placement: [[4, 0], [3, 1]],
                pitchLists: [
                    [1, 6, 10],
                    [8, 11, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [10, 11, 7, 3],
                    [1, 6, 10, 3],
                    [1, 3, 7, 10],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 17, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 37, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[-1, 1], [0, 1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 45, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 8, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 39, placement: [[-1, 4], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [0, 8, 4, 11],
                    [2, 6, 9, 0],
                    [9, 8, 0, 4],
                ],
                points: 12,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 19, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 55, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 38, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 64, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 3, placement: [[-3, 2], [-4, 3]] },
        ],
        handList: [14, 60, 48],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [5, 2, 9, 1],
                    [10, 4, 1],
                    [0, 5, 9, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[0, 3], [0, 4]],
                pitchLists: [
                    [10, 1, 7],
                    [4, 7, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[1, 3], [2, 2]],
                pitchLists: [
                    [10, 1, 7, 5],
                    [8, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 56, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 49, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 27, placement: [[2, 1], [2, 2]] },
        ],
        handList: [20, 15, 43],
        moves: [
            {
                dominoIndex: 43,
                placement: [[2, 3], [1, 4]],
                pitchLists: [
                    [11, 2, 8, 4],
                ],
                points: 4,
            },
            {
                dominoIndex: 15,
                placement: [[3, 2], [4, 2]],
                pitchLists: [
                    [8, 1, 5],
                    [1, 4, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [5, 6, 1, 10],
                    [10, 8, 1, 5],
                    [5, 9, 2, 10],
                ],
                points: 12,
            },
        ],
        points: 24,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 60, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 56, placement: [[2, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[0, 2], [1, 2]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 36, placement: [[2, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [6, 1, 9],
                    [3, 9, 6],
                ],
                points: 9,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 20, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 54, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 43, placement: [[3, -1], [3, -2]] },
        ],
        handList: [16, 49, 23],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [6, 10, 1],
                    [4, 6, 1, 10],
                    [4, 1, 10, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 49,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [6, 10, 1, 5],
                    [5, 1, 9],
                    [1, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 23,
                placement: [[2, 2], [3, 1]],
                pitchLists: [
                    [10, 5, 2],
                    [1, 6, 9, 2],
                    [5, 1, 9, 4],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 2, placement: [[1, -3], [0, -3]] },
            { dominoIndex: 51, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 57, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 35, placement: [[-1, -1], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 21, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 42, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 8, placement: [[-1, 2], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [7, 0, 4, 8],
                    [1, 4, 11, 8],
                    [4, 8, 11],
                    [11, 4, 8],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 60, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 35, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 6, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 33, placement: [[3, -3], [2, -3]] },
        ],
        handList: [37, 54, 3],
        moves: [
            {
                dominoIndex: 37,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [3, 6, 11],
                    [10, 3, 6, 0],
                    [10, 6, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[1, -4], [2, -5]],
                pitchLists: [
                    [6, 3, 10],
                    [9, 3, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[0, -4], [0, -3]],
                pitchLists: [
                    [0, 6, 3, 10],
                    [0, 3, 8],
                    [9, 6, 3],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 42, placement: [[1, 0], [2, 0]] },
        ],
        handList: [34, 29, 16],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 1, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [7, 2, 10],
                    [7, 3, 0, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [1, 6, 10],
                    [6, 7, 2, 10],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 7, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 45, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 24, placement: [[-1, 3], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [1, 7, 10],
                    [7, 4, 11],
                    [10, 11, 6, 2],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 14, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 33, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 8, placement: [[0, 2], [1, 1]] },
        ],
        handList: [9, 44, 15],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [0, 5, 1, 8],
                    [0, 9, 6],
                    [2, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 44,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [4, 10, 1],
                    [2, 9, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [8, 1, 5],
                    [10, 4, 1],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 37, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 49, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 23, placement: [[-1, -2], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 62, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 32, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 44, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 8, placement: [[-1, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [1, 5, 10],
                    [8, 0, 4, 5],
                    [1, 5, 8],
                    [4, 10, 1, 8],
                ],
                points: 14,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 49, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 3, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 7, placement: [[3, -2], [3, -1]] },
        ],
        handList: [35, 45, 63],
        moves: [
            {
                dominoIndex: 35,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [8, 3, 0],
                    [5, 11, 3, 8],
                    [6, 3, 11, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [0, 8, 4],
                    [7, 3, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [8, 11, 5, 3],
                    [11, 0, 8, 4],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 36, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 8, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[0, 2], [0, 1]] },
        ],
        handList: [48, 38, 59],
        moves: [
            {
                dominoIndex: 38,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [7, 8, 3, 11],
                ],
                points: 4,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [10, 7, 1],
                    [0, 8, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [10, 7, 1, 5],
                    [11, 8, 5],
                    [0, 3, 8],
                ],
                points: 10,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 44, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [1, 0]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 22, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 52, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 45, placement: [[0, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [2, 11, 7],
                    [11, 4, 8, 2],
                    [2, 8, 11],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 7, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 37, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 25, placement: [[3, -1], [3, -2]] },
        ],
        handList: [38, 42, 56],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [3, 7, 1, 10],
                    [3, 11, 7, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[2, -4], [2, -5]],
                pitchLists: [
                    [8, 4, 1],
                    [4, 7, 11],
                    [8, 0, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 56,
                placement: [[3, -6], [2, -6]],
                pitchLists: [
                    [6, 8, 0, 3],
                    [11, 8, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 38, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 35, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 24, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 5, placement: [[2, 1], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 43, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 14, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 60, placement: [[-2, -1], [-2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [11, 5, 8],
                    [5, 4, 9, 0],
                    [8, 0, 4],
                    [8, 4, 1],
                ],
                points: 13,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 16, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 24, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 5, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 29, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 52, placement: [[1, -4], [0, -3]] },
        ],
        handList: [33, 9, 34],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [6, 0, 3],
                    [6, 0, 9, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [9, 0, 6],
                    [6, 3, 0],
                    [6, 0, 3, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [9, 0, 6, 3],
                    [6, 9, 1, 3],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 34, placement: [[2, 1], [1, 2]] },
        ],
        handList: [37, 2, 58],
        moves: [
            {
                dominoIndex: 37,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [6, 0, 3, 10],
                    [3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 2,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [0, 8, 3],
                    [2, 3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [7, 0, 8, 3],
                    [9, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
}
