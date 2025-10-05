import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 51, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 26, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 66, placement: [[0, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [7, 11, 2, 5],
                    [7, 2, 11],
                    [11, 3, 7, 10],
                    [10, 2, 7],
                ],
                points: 14,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 46, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 7, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 35, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 42, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 60, placement: [[0, -3], [-1, -2]] },
        ],
        handList: [5, 30, 59],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [4, 8, 5, 0],
                    [11, 3, 7, 0],
                    [3, 8, 0, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 30,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [2, 11, 5, 7],
                    [3, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-4, 2], [-4, 3]],
                pitchLists: [
                    [2, 7, 10],
                    [3, 8, 11, 7],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 13, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 33, placement: [[-2, 1], [-2, 2]] },
        ],
        handList: [9, 29, 17],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [0, 9, 5],
                    [0, 3, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [2, 0, 9, 5],
                    [10, 0, 3, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 17,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [7, 1, 3, 10],
                    [10, 2, 7],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 28, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 44, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[1, 1], [2, 1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 46, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 35, placement: [[0, 1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [5, 6, 10, 2],
                    [11, 6, 2],
                    [10, 6, 3],
                ],
                points: 10,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 14, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 19, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 50, placement: [[-4, 3], [-4, 4]] },
        ],
        handList: [16, 61, 4],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [9, 1, 6],
                    [4, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 61,
                placement: [[-5, 5], [-4, 5]],
                pitchLists: [
                    [4, 1, 10, 8],
                    [1, 5, 10, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 4,
                placement: [[-2, 5], [-3, 5]],
                pitchLists: [
                    [8, 9, 4, 0],
                    [9, 1, 6, 4],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 15, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 19, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 26, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, 0], [0, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 7, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 42, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 18, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 45, placement: [[1, -2], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [9, 4, 0],
                    [0, 4, 7],
                    [1, 7, 4],
                    [8, 4, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 44, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 17, placement: [[-3, 3], [-4, 3]] },
            { dominoIndex: 49, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 54, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 37, placement: [[-4, 2], [-4, 1]] },
        ],
        handList: [15, 25, 28],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-2, 4], [-2, 5]],
                pitchLists: [
                    [4, 1, 9],
                    [9, 10, 1, 5],
                    [5, 1, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 25,
                placement: [[-1, 5], [0, 4]],
                pitchLists: [
                    [10, 5, 2],
                    [1, 5, 9, 2],
                    [4, 1, 9, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 28,
                placement: [[0, 6], [0, 5]],
                pitchLists: [
                    [6, 9, 2],
                    [10, 5, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 15, placement: [[2, 1], [1, 1]] },
        ],
        handList: [55, 29, 25],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [6, 9, 5, 1],
                    [6, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [2, 10, 6],
                    [1, 6, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [9, 10, 6, 2],
                    [10, 6, 1],
                    [2, 6, 10],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 28, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, 0], [1, 0]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 65, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 33, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 56, placement: [[-1, -1], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [3, 0, 7],
                    [9, 6, 0],
                    [11, 6, 3],
                ],
                points: 9,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 61, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 19, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 15, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 37, placement: [[0, 2], [0, 1]] },
        ],
        handList: [20, 30, 59],
        moves: [
            {
                dominoIndex: 30,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [2, 5, 1, 9],
                    [11, 2, 8, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [3, 7, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 20,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [10, 1, 8, 5],
                    [1, 6, 10, 3],
                    [1, 3, 7, 10],
                ],
                points: 12,
            },
        ],
        points: 25,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 34, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 51, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 57, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 19, placement: [[2, -2], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, -1], [-1, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 43, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 3, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 34, placement: [[-3, -1], [-3, 0]] },
            { dominoIndex: 5, placement: [[1, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, -2], [-1, -3]],
                pitchLists: [
                    [6, 4, 9, 0],
                    [6, 9, 3],
                    [9, 6, 3],
                    [9, 0, 5],
                    [9, 4, 0],
                ],
                points: 16,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 41, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 59, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 42, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 36, placement: [[-2, 3], [-1, 2]] },
        ],
        handList: [9, 16, 24],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [0, 9, 3],
                    [9, 0, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 16,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [9, 6, 1],
                    [6, 0, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [5, 2, 8],
                    [2, 9, 6, 1],
                    [5, 9, 0, 3],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 55, placement: [[1, -2], [1, -1]] },
        ],
        handList: [3, 26, 49],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [6, 10, 3, 0],
                    [8, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [10, 2, 7],
                    [7, 8, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [0, 5, 9],
                    [2, 8, 5],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 19, placement: [[1, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[-1, 1], [0, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 6, placement: [[1, 3], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [0, 9, 4, 8],
                    [8, 3, 6, 0],
                ],
                points: 8,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 7, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 36, placement: [[-3, 2], [-4, 3]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [11, 52, 38],
        moves: [
            {
                dominoIndex: 11,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [11, 0, 4, 8],
                    [0, 8, 3],
                    [0, 3, 9],
                    [11, 3, 0, 7],
                ],
                points: 14,
            },
            {
                dominoIndex: 52,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [0, 8, 3, 6],
                    [9, 0, 3, 7],
                    [4, 0, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 38,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [7, 6, 11, 3],
                    [4, 0, 7, 11],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 26, placement: [[1, 3], [2, 2]] },
            { dominoIndex: 27, placement: [[-1, 5], [-1, 4]] },
            { dominoIndex: 61, placement: [[3, 2], [2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 2], [-1, 3]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 56, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 50, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 42, placement: [[1, 0], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [10, 1, 6],
                    [5, 1, 9],
                    [4, 8, 1],
                    [0, 6, 9],
                ],
                points: 12,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 40, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 43, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 5, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 41, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 4, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 34, placement: [[-2, -1], [-2, 0]] },
        ],
        handList: [60, 56, 25],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-4, 1], [-3, 0]],
                pitchLists: [
                    [3, 11, 6],
                    [11, 7, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-1, -2], [-2, -2]],
                pitchLists: [
                    [11, 7, 4],
                    [7, 3, 11, 6],
                    [11, 3, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 25,
                placement: [[-3, -2], [-3, -1]],
                pitchLists: [
                    [2, 11, 7, 4],
                    [2, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 18, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 42, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [36, 24, 8],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [8, 4, 11, 3],
                    [0, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [0, 5, 9],
                    [8, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [2, 5, 11, 9],
                    [8, 0, 4, 5],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 32, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 51, placement: [[0, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 62, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 34, placement: [[-1, 0], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [4, 1, 10],
                    [0, 9, 5, 1],
                    [7, 11, 4],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 55, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 36, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 54, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [9, 38, 19],
        moves: [
            {
                dominoIndex: 9,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [9, 3, 0],
                    [0, 9, 6],
                    [6, 2, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 38,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [6, 9, 3, 11],
                    [0, 9, 6, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [2, 9, 6, 1],
                    [9, 6, 3],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 31, placement: [[2, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 44, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 14, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 15, placement: [[2, 0], [3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [6, 1, 10, 4],
                    [6, 9, 1],
                    [2, 9, 1, 5],
                    [9, 4, 1],
                ],
                points: 14,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 29, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 3, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 9, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 47, placement: [[3, 3], [4, 2]] },
            { dominoIndex: 14, placement: [[2, 3], [1, 4]] },
        ],
        handList: [63, 48, 17],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [11, 8, 1, 5],
                    [0, 8, 4],
                    [0, 3, 8],
                    [3, 7, 0, 11],
                ],
                points: 14,
            },
            {
                dominoIndex: 48,
                placement: [[0, 4], [0, 5]],
                pitchLists: [
                    [11, 5, 8],
                    [0, 3, 8, 5],
                    [9, 1, 4, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 17,
                placement: [[0, 6], [1, 5]],
                pitchLists: [
                    [11, 5, 8, 1],
                    [0, 8, 4, 7],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 43, placement: [[1, -4], [1, -3]] },
        ],
        handList: [38, 8, 39],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -2], [0, -3]],
                pitchLists: [
                    [11, 3, 6, 7],
                    [11, 9, 3, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[2, -4], [2, -5]],
                pitchLists: [
                    [8, 0, 3],
                    [0, 9, 3],
                    [8, 4, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 39,
                placement: [[2, -6], [1, -5]],
                pitchLists: [
                    [4, 8, 0, 3],
                    [5, 4, 9, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
}
