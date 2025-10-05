import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 40, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 37, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 8, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 3, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 60, placement: [[0, 1], [1, 1]] },
        ],
        handList: [57, 38, 56],
        moves: [
            {
                dominoIndex: 57,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [7, 8, 0, 3],
                    [8, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[4, -4], [3, -4]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 8, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[5, -4], [4, -3]],
                pitchLists: [
                    [7, 11, 3, 6],
                    [6, 11, 8, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 33, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 45, placement: [[1, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 11, placement: [[0, 0], [1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 16, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 10, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 33, placement: [[3, -3], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [2, 8, 5],
                    [6, 10, 1, 5],
                    [6, 1, 9],
                    [3, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 45, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 30, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 26, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 7, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 62, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 60, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [53, 3, 42],
        moves: [
            {
                dominoIndex: 53,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [6, 2, 7, 11],
                    [8, 2, 11, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [4, 0, 7],
                    [8, 4, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [0, 8, 4, 11],
                    [0, 3, 8, 6],
                    [3, 8, 0],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 3, placement: [[4, -1], [4, 0]] },
        ],
        handList: [25, 63, 29],
        moves: [
            {
                dominoIndex: 25,
                placement: [[5, -3], [4, -2]],
                pitchLists: [
                    [2, 6, 9],
                    [6, 0, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [10, 2, 5],
                    [10, 6, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [3, 8, 11],
                    [10, 2, 5, 8],
                    [2, 6, 9, 11],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-1, 0], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [11, 3, 6],
                    [3, 8, 0],
                    [6, 9, 3],
                ],
                points: 9,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 36, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 59, placement: [[2, 1], [1, 2]] },
        ],
        handList: [38, 33, 30],
        moves: [
            {
                dominoIndex: 38,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [7, 6, 11, 3],
                    [3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [3, 11, 7],
                    [3, 6, 9],
                    [6, 11, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 30,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [2, 3, 11, 7],
                    [11, 6, 3],
                    [11, 3, 6, 9],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 61, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 36, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 63, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 16, placement: [[-4, 2], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 6, placement: [[-1, 1], [-1, 2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 4, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 3, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 63, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 59, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [7, 2, 10],
                    [10, 7, 3, 2],
                    [7, 2, 11],
                    [3, 0, 7, 10],
                ],
                points: 14,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 9, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 25, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 15, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 44, placement: [[-3, 0], [-2, -1]] },
        ],
        handList: [48, 30, 36],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [0, 9, 5, 1],
                    [2, 5, 8],
                    [5, 1, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [5, 2, 11],
                    [11, 2, 5],
                    [2, 10, 5],
                    [11, 5, 1, 8],
                ],
                points: 13,
            },
            {
                dominoIndex: 36,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [3, 9, 6],
                    [9, 11, 2, 5],
                ],
                points: 7,
            },
        ],
        points: 32,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 61, placement: [[0, 3], [-1, 4]] },
        ],
        handList: [48, 24, 30],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [5, 8, 1],
                    [11, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [2, 5, 10],
                    [11, 5, 8, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [11, 2, 5],
                    [2, 8, 5],
                    [11, 5, 2],
                ],
                points: 9,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[2, 0], [1, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 5, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 28, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 54, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [8, 3, 0],
                    [0, 9, 5],
                    [3, 9, 6],
                ],
                points: 9,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 34, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 12, placement: [[-2, 3], [-2, 2]] },
            { dominoIndex: 45, placement: [[1, 0], [1, 1]] },
        ],
        handList: [26, 10, 41],
        moves: [
            {
                dominoIndex: 26,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [6, 11, 2],
                    [1, 4, 7],
                    [7, 11, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 10,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [0, 7, 11, 3],
                    [1, 4, 7, 10],
                    [10, 2, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 41,
                placement: [[3, 2], [3, 1]],
                pitchLists: [
                    [0, 10, 7, 4],
                    [6, 11, 2, 7],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 7, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 41, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 17, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 55, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 16, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [6, 10, 1],
                    [1, 4, 7],
                    [1, 6, 10, 2],
                    [9, 1, 6, 4],
                ],
                points: 14,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 44, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 45, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 60, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 47, placement: [[-3, 0], [-2, -1]] },
            { dominoIndex: 29, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 24, placement: [[-3, 1], [-4, 2]] },
        ],
        handList: [9, 15, 57],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [10, 5, 1],
                    [7, 11, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [5, 2, 0, 9],
                    [10, 7, 4, 0],
                    [9, 10, 5, 1],
                ],
                points: 12,
            },
            {
                dominoIndex: 57,
                placement: [[-5, 3], [-5, 2]],
                pitchLists: [
                    [11, 2, 5, 7],
                    [8, 5, 0],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 2, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[1, 2], [2, 2]] },
        ],
        handList: [54, 28, 38],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [6, 2, 5, 10],
                    [0, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [2, 9, 5],
                    [2, 0, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [3, 0, 9],
                    [11, 3, 6],
                    [11, 8, 2],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 19, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[0, 2], [0, 3]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 15, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 41, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [7, 10, 2],
                    [5, 2, 10],
                    [10, 2, 7],
                    [1, 5, 10],
                ],
                points: 12,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 2, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 51, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 49, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 20, placement: [[-3, 4], [-2, 4]] },
        ],
        handList: [9, 5, 42],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [9, 0, 2, 6],
                    [3, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[-4, 3], [-3, 3]],
                pitchLists: [
                    [5, 9, 0],
                    [9, 5, 1],
                    [3, 9, 0, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 42,
                placement: [[-5, 4], [-5, 3]],
                pitchLists: [
                    [5, 9, 0, 4],
                    [8, 0, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 37, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 14, placement: [[3, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [1, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 28, placement: [[1, 3], [1, 4]] },
            { dominoIndex: 56, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 3, placement: [[3, 0], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [7, 10, 2],
                    [6, 11, 2, 7],
                    [9, 6, 2, 10],
                    [0, 3, 6, 10],
                ],
                points: 15,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 49, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 45, placement: [[2, -1], [1, -1]] },
        ],
        handList: [19, 53, 32],
        moves: [
            {
                dominoIndex: 19,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [1, 9, 4],
                    [1, 4, 8, 11],
                    [9, 11, 2, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 53,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [6, 1, 9, 4],
                    [8, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 32,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [3, 8, 4, 11],
                    [5, 8, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 9, placement: [[-2, 2], [-2, 3]] },
        ],
        handList: [33, 6, 36],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [6, 3, 0, 10],
                    [3, 6, 0, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 6,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [6, 0, 9],
                    [3, 0, 6],
                    [6, 9, 0],
                ],
                points: 9,
            },
            {
                dominoIndex: 36,
                placement: [[-5, 2], [-4, 1]],
                pitchLists: [
                    [3, 6, 9, 0],
                    [6, 9, 3],
                    [9, 0, 6],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 4, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 13, placement: [[2, -1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[1, 0], [0, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 44, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 4, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [4, 8, 0, 3],
                    [0, 7, 3],
                    [10, 4, 7],
                ],
                points: 10,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 18, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 41, placement: [[3, -2], [3, -3]] },
        ],
        handList: [19, 11, 42],
        moves: [
            {
                dominoIndex: 19,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 4, 9, 1],
                    [7, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [1, 9, 4],
                    [1, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 11,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [0, 4, 9],
                    [8, 1, 4, 11],
                    [11, 1, 4, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 9, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 7, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 34, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 17, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 44, placement: [[3, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [1, 7, 4],
                    [4, 10, 7, 1],
                    [3, 10, 7],
                    [7, 4, 10],
                ],
                points: 13,
            },
        ],
    },
}
