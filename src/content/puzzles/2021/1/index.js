import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

// NOTE: These puzzles had maximum rank range.
export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 26, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 30, placement: [[-3, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [6, 3, 0],
                    [10, 3, 7],
                    [1, 7, 3, 10],
                    [2, 11, 6, 10],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 29, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 41, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 46, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 3, placement: [[0, -1], [-1, -1]] },
        ],
        handList: [8, 9, 30],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [0, 8, 4],
                    [8, 1, 4, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [4, 0, 7],
                    [5, 4, 0, 9],
                    [0, 8, 4, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 30,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [8, 11, 2],
                    [11, 4, 0, 7],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    4: {
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
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 49, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[1, 0], [0, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 2, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 48, placement: [[-1, 3], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [10, 4, 1],
                    [1, 9, 2, 5],
                    [4, 7, 0],
                ],
                points: 10,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 8, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 12, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 44, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 2, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 50, placement: [[2, -1], [3, -1]] },
        ],
        handList: [63, 41, 3],
        moves: [
            {
                dominoIndex: 63,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [5, 0, 8],
                    [5, 8, 11],
                    [11, 8, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 41,
                placement: [[3, 0], [3, 1]],
                pitchLists: [
                    [5, 0, 8, 4],
                    [10, 4, 7],
                    [4, 11, 8, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[3, 2], [4, 1]],
                pitchLists: [
                    [10, 4, 7, 0],
                    [11, 7, 3],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 16, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 44, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 27, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, 1], [0, 2]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 16, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 20, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 43, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 42, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 49, placement: [[-2, 3], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [3, 0, 6, 8],
                    [0, 1, 9, 5],
                    [3, 7, 10, 1],
                ],
                points: 12,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 43, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 18, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 7, placement: [[3, -3], [3, -4]] },
            { dominoIndex: 4, placement: [[-1, -1], [0, -2]] },
        ],
        handList: [48, 37, 63],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [5, 0, 9, 4],
                    [1, 8, 5],
                    [8, 4, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 63,
                placement: [[-2, -3], [-2, -2]],
                pitchLists: [
                    [8, 11, 5],
                    [11, 8, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [8, 11, 5, 3],
                    [8, 4, 0, 3],
                    [1, 8, 5, 10],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 35, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 4, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 60, placement: [[2, 0], [2, 1]] },
        ],
        handList: [45, 59, 33],
        moves: [
            {
                dominoIndex: 45,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [4, 3, 8, 11],
                    [8, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [11, 7, 4],
                    [4, 7, 0],
                    [3, 7, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 33,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [6, 3, 10, 0],
                    [8, 4, 11, 3],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 60, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 62, placement: [[-3, 4], [-2, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 5, placement: [[-1, 0], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [7, 3, 11],
                    [6, 0, 3],
                    [7, 0, 4],
                ],
                points: 9,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 36, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 33, placement: [[-4, 2], [-3, 2]] },
        ],
        handList: [12, 20, 42],
        moves: [
            {
                dominoIndex: 12,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [1, 9, 2, 6],
                    [1, 3, 9, 6],
                    [2, 9, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[-4, 5], [-3, 4]],
                pitchLists: [
                    [6, 10, 1],
                    [6, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-3, 5], [-2, 5]],
                pitchLists: [
                    [1, 4, 8],
                    [6, 1, 10, 4],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 60, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 29, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 33, placement: [[1, 3], [1, 2]] },
            { dominoIndex: 39, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 2], [0, 3]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 36, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 8, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 17, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 49, placement: [[-1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [5, 9, 0],
                    [3, 0, 9, 5],
                    [0, 3, 8],
                    [3, 9, 0],
                ],
                points: 13,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 49, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 60, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 32, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 42, placement: [[0, 2], [1, 1]] },
        ],
        handList: [51, 18, 1],
        moves: [
            {
                dominoIndex: 51,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [0, 8, 5],
                    [5, 2, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [4, 11, 8],
                    [11, 5, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 1,
                placement: [[3, 2], [2, 3]],
                pitchLists: [
                    [4, 11, 8, 0],
                    [11, 5, 8, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 6, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 40, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [2, -3]] },
        ],
        handList: [26, 42, 3],
        moves: [
            {
                dominoIndex: 26,
                placement: [[4, -3], [3, -3]],
                pitchLists: [
                    [11, 7, 2],
                    [7, 3, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [4, 11, 7, 2],
                    [8, 11, 3, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [0, 3, 7],
                    [0, 8, 4],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 7, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 0], [1, -1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 17, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 23,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [6, 10, 2],
                    [2, 7, 3, 11],
                    [11, 7, 4],
                    [4, 1, 7],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 8, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 3, placement: [[1, 2], [0, 2]] },
        ],
        handList: [35, 14, 6],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [1, 9, 5, 2],
                ],
                points: 4,
            },
            {
                dominoIndex: 6,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [6, 0, 3],
                    [4, 9, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [3, 6, 9],
                    [8, 1, 4],
                    [8, 6, 0, 3],
                ],
                points: 10,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 24, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 55, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[0, 1], [0, 2]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 60, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 29, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 5, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 14, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [11, 3, 8, 5],
                    [10, 2, 7, 3],
                    [4, 0, 7, 8],
                ],
                points: 12,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 29, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 31, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 60, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 26, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 5, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 48, placement: [[4, -1], [5, -2]] },
            { dominoIndex: 38, placement: [[6, -2], [6, -3]] },
        ],
        handList: [18, 40, 20],
        moves: [
            {
                dominoIndex: 18,
                placement: [[5, -1], [6, -1]],
                pitchLists: [
                    [11, 5, 1, 8],
                    [11, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[5, 0], [6, 0]],
                pitchLists: [
                    [8, 1, 4],
                    [11, 3, 8, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[4, 1], [5, 1]],
                pitchLists: [
                    [7, 1, 10],
                    [8, 4, 1],
                    [8, 1, 4, 10],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 53, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 25, placement: [[2, 0], [1, 1]] },
        ],
        handList: [65, 29, 63],
        moves: [
            {
                dominoIndex: 65,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [0, 6, 9],
                    [2, 6, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [6, 10, 2],
                    [2, 0, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [8, 11, 2],
                    [8, 2, 5],
                    [6, 10, 2, 11],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [5, 11, 2],
                    [10, 5, 2],
                    [8, 11, 5],
                    [11, 2, 5],
                ],
                points: 12,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 51, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 19, placement: [[3, 1], [3, 0]] },
        ],
        handList: [14, 57, 37],
        moves: [
            {
                dominoIndex: 14,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [1, 9, 4],
                    [4, 9, 1],
                    [4, 11, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 57,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [11, 4, 7],
                    [4, 9, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[2, 3], [1, 3]],
                pitchLists: [
                    [6, 10, 3],
                    [11, 4, 7, 3],
                    [1, 7, 10],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 42, placement: [[0, 3], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 36, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 61, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 6, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 18, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [6, 3, 9],
                    [9, 6, 1],
                    [8, 3, 0, 6],
                    [9, 0, 6],
                ],
                points: 13,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 14, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 48, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 54, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 36, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 30, placement: [[2, -3], [3, -4]] },
            { dominoIndex: 16, placement: [[4, -4], [4, -5]] },
        ],
        handList: [6, 28, 5],
        moves: [
            {
                dominoIndex: 6,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [9, 6, 0],
                    [3, 0, 6],
                    [0, 9, 4],
                    [4, 1, 9, 6],
                ],
                points: 13,
            },
            {
                dominoIndex: 28,
                placement: [[4, -1], [5, -2]],
                pitchLists: [
                    [9, 6, 0, 2],
                    [9, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[6, -3], [5, -3]],
                pitchLists: [
                    [9, 5, 0],
                    [0, 9, 2, 6],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
}
