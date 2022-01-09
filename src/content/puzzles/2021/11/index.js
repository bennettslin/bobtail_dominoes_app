import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 4, placement: [[1, -2], [0, -1]] },
        ],
        handList: [59, 20, 32],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [4, 10, 7],
                    [2, 7, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [4, 10, 7, 1],
                    [5, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 32,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [7, 10, 3],
                    [10, 1, 5],
                    [2, 10, 5],
                ],
                points: 9,
            },
        ],
        points: 24,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 15, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 59, placement: [[-3, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 52, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 29, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [6, 10, 3],
                    [10, 6, 2, 7],
                    [10, 3, 7, 11],
                ],
                points: 11,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 1, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 51, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 42, placement: [[3, 0], [4, -1]] },
        ],
        handList: [33, 20, 55],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [11, 5, 8, 3],
                    [0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [1, 10, 4],
                    [10, 0, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[3, 1], [4, 1]],
                pitchLists: [
                    [3, 1, 6, 10],
                    [1, 10, 4, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 1, placement: [[0, -2], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 16, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 7, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 55, placement: [[-1, 0], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [10, 3, 0, 7],
                    [9, 0, 3],
                    [6, 3, 9],
                    [1, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 27, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 62, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 30, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 15, placement: [[-1, -2], [0, -3]] },
            { dominoIndex: 45, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 19, placement: [[0, -4], [1, -4]] },
        ],
        handList: [46, 59, 24],
        moves: [
            {
                dominoIndex: 46,
                placement: [[-1, -4], [0, -5]],
                pitchLists: [
                    [5, 1, 9],
                    [6, 1, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [10, 7, 2],
                    [5, 1, 9, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [11, 5, 2],
                    [10, 7, 2, 5],
                    [5, 2, 11],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [1, 0]] },
        ],
        handList: [37, 29, 18],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [3, 10, 7],
                    [2, 5, 9, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [3, 10, 7, 2],
                    [5, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [1, 8, 4],
                    [8, 5, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 41, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 6, placement: [[-1, -2], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[0, -3], [0, -2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 14, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [5, 10, 2],
                    [8, 5, 1],
                    [8, 1, 4, 9],
                ],
                points: 10,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 22, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 23, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 48, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 5, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 14, placement: [[3, -1], [2, 0]] },
        ],
        handList: [49, 25, 20],
        moves: [
            {
                dominoIndex: 49,
                placement: [[3, -2], [4, -2]],
                pitchLists: [
                    [0, 5, 9],
                    [9, 1, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 25,
                placement: [[5, -2], [5, -3]],
                pitchLists: [
                    [0, 5, 9, 2],
                    [6, 9, 1, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 20,
                placement: [[4, -3], [5, -4]],
                pitchLists: [
                    [10, 1, 5, 8],
                    [10, 6, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 29, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 63, placement: [[-3, 3], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 3], [0, 2]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 25, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 57, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 51, placement: [[4, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [11, 6, 2],
                    [11, 2, 5],
                    [5, 2, 11],
                    [7, 2, 11, 5],
                ],
                points: 13,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 51, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 29, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 34, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 55, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 25, placement: [[-1, 4], [-1, 5]] },
        ],
        handList: [36, 3, 8],
        moves: [
            {
                dominoIndex: 36,
                placement: [[1, 4], [0, 5]],
                pitchLists: [
                    [2, 7, 10, 3],
                    [6, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[3, 2], [2, 2]],
                pitchLists: [
                    [8, 7, 3, 0],
                    [0, 6, 3, 9],
                    [10, 3, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[2, 4], [3, 4]],
                pitchLists: [
                    [3, 0, 8],
                    [10, 3, 6, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 22, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 18, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 30, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [59, 4, 33],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [4, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [7, 11, 8, 3],
                    [10, 7, 2],
                    [4, 0, 8, 7],
                    [10, 8, 5, 2],
                ],
                points: 15,
            },
            {
                dominoIndex: 33,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [6, 3, 0],
                    [3, 8, 11],
                    [6, 10, 7, 2],
                ],
                points: 10,
            },
        ],
        points: 34,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[-1, -1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-1, 1], [-1, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 22, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 3, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [8, 3, 0, 5],
                    [9, 5, 2],
                    [9, 0, 6],
                ],
                points: 10,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 8, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 19, placement: [[1, -3], [1, -2]] },
        ],
        handList: [18, 1, 34],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [1, 8, 11, 5],
                    [5, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 1,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [4, 9, 0],
                    [0, 5, 1, 8],
                    [0, 8, 5, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[-1, -3], [-1, -2]],
                pitchLists: [
                    [3, 7, 0],
                    [7, 4, 9, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 51, placement: [[3, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, 1], [1, 2]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 32, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 20, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 28, placement: [[1, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [2, 6, 10],
                    [3, 10, 6],
                    [1, 6, 9],
                    [7, 1, 10],
                ],
                points: 12,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 18, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 37, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 53, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 33, placement: [[1, 2], [0, 2]] },
        ],
        handList: [60, 38, 7],
        moves: [
            {
                dominoIndex: 60,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [8, 3, 7, 11],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [10, 7, 3],
                    [10, 6, 3, 11],
                    [11, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 7,
                placement: [[4, 1], [3, 2]],
                pitchLists: [
                    [10, 7, 3, 0],
                    [6, 3, 11, 7],
                    [11, 3, 7],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 32, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 14, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 49, placement: [[-1, 0], [0, -1]] },
        ],
        handList: [9, 15, 18],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [1, 9, 0, 5],
                    [8, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [0, 9, 4],
                    [9, 5, 0],
                    [8, 1, 5, 9],
                    [3, 0, 7, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 15,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [9, 5, 0, 1],
                    [5, 0, 9, 4],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 42, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 60, placement: [[1, -2], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, -2], [0, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[3, 0], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 5, 8],
                    [2, 5, 11],
                    [5, 8, 11],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 15, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 8, placement: [[2, 2], [3, 2]] },
            { dominoIndex: 2, placement: [[3, -1], [2, -1]] },
        ],
        handList: [48, 24, 3],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 2], [1, 3]],
                pitchLists: [
                    [5, 0, 8],
                    [1, 9, 5],
                    [5, 0, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 24,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [2, 5, 0, 8],
                    [8, 5, 2],
                    [2, 11, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [3, 0, 8],
                    [8, 5, 2, 0],
                    [1, 9, 5, 0],
                ],
                points: 11,
            },
        ],
        points: 32,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 55, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[2, 0], [1, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 35, placement: [[5, -2], [4, -1]] },
            { dominoIndex: 51, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 14, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 19, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -2], [4, -2]],
                pitchLists: [
                    [8, 11, 3],
                    [8, 4, 0],
                    [8, 1, 5, 9],
                    [11, 4, 8, 1],
                ],
                points: 14,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 60, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 42, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 4, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 59, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 34, placement: [[-3, 0], [-4, 1]] },
        ],
        handList: [28, 55, 15],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-4, 2], [-5, 2]],
                pitchLists: [
                    [4, 7, 10, 2],
                    [0, 3, 7, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 55,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [9, 2, 6],
                    [3, 10, 6],
                    [7, 2, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 15,
                placement: [[-3, 3], [-4, 4]],
                pitchLists: [
                    [10, 1, 4],
                    [3, 10, 6, 1],
                    [7, 2, 10, 5],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 34, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 37, placement: [[5, -2], [4, -1]] },
            { dominoIndex: 8, placement: [[2, 1], [2, 2]] },
        ],
        handList: [25, 54, 30],
        moves: [
            {
                dominoIndex: 30,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [2, 11, 7],
                ],
                points: 3,
            },
            {
                dominoIndex: 25,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [2, 6, 11, 10],
                    [6, 3, 0, 8],
                    [2, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 54,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [9, 6, 0],
                    [2, 10, 6],
                    [11, 3, 6],
                    [2, 6, 10, 9],
                ],
                points: 13,
            },
        ],
        points: 29,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 8, placement: [[-1, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[-2, 2], [-3, 3]] },
        ],
    },
}
