import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 49, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 25, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 19, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 33, placement: [[0, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [9, 3, 6],
                    [3, 9, 0],
                    [1, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 59, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 43, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 27, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 16, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 34, placement: [[-2, -3], [-1, -3]] },
        ],
        handList: [6, 44, 19],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-1, -4], [0, -5]],
                pitchLists: [
                    [0, 7, 4],
                    [6, 0, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 19,
                placement: [[-2, -5], [-1, -5]],
                pitchLists: [
                    [1, 9, 6],
                    [9, 0, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[1, -5], [1, -6]],
                pitchLists: [
                    [1, 9, 6, 4],
                    [10, 4, 7],
                    [10, 6, 0, 3],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 62, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 16, placement: [[-2, 2], [-2, 3]] },
        ],
        handList: [9, 48, 40],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [0, 9, 3],
                    [9, 1, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [5, 9, 1, 6],
                    [8, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[-4, 2], [-4, 1]],
                pitchLists: [
                    [8, 5, 0, 4],
                    [6, 0, 9, 3],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 15, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 44, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 65, placement: [[-1, -2], [0, -2]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 27, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 43, placement: [[1, 0], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [5, 11, 2, 8],
                    [8, 5, 2],
                    [8, 1, 4, 9],
                ],
                points: 11,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 19, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 14, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 8, placement: [[-3, 4], [-3, 3]] },
            { dominoIndex: 50, placement: [[-3, 1], [-4, 2]] },
        ],
        handList: [44, 18, 3],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [8, 4, 1, 9],
                    [1, 4, 10],
                    [7, 4, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 18,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [4, 8, 1],
                    [8, 7, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [4, 8, 1, 0],
                    [0, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[-3, -2], [-3, -1]] },
            { dominoIndex: 27, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 42, placement: [[-1, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 22, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 4, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 60, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 35, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 51, placement: [[-4, 3], [-4, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [2, 8, 4, 11],
                    [5, 2, 11],
                    [5, 0, 9, 3],
                    [5, 8, 0],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 14, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 17, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 44, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 24, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 51, placement: [[-3, 2], [-2, 2]] },
        ],
        handList: [4, 29, 26],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [10, 7, 2],
                    [10, 1, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [7, 4, 10, 0],
                    [7, 4, 0],
                    [4, 10, 7, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 29,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [10, 7, 4, 0],
                    [10, 4, 1, 7],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 28, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 50, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [52, 59, 44],
        moves: [
            {
                dominoIndex: 52,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [3, 9, 6],
                    [5, 10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [7, 10, 2, 3],
                    [2, 10, 7, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 44,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [4, 10, 2, 7],
                    [10, 6, 2, 9],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [2, 0, 6, 9],
                    [2, 5, 9],
                    [8, 2, 11],
                    [11, 5, 2],
                ],
                points: 13,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 27, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 38, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 59, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 25, placement: [[-2, -3], [-2, -2]] },
        ],
        handList: [56, 54, 41],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [10, 2, 11, 6],
                    [11, 3, 6],
                    [3, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [11, 3, 6],
                    [3, 11, 6, 9],
                    [6, 0, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [4, 6, 0, 9],
                    [3, 8, 11, 4],
                    [11, 3, 6, 7],
                ],
                points: 12,
            },
        ],
        points: 34,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 17, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 44, placement: [[-2, 2], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[0, 2], [-1, 3]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 6, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 9, placement: [[4, -2], [4, -1]] },
            { dominoIndex: 33, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 60, placement: [[2, -2], [3, -3]] },
            { dominoIndex: 59, placement: [[1, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [7, 3, 11, 6],
                    [3, 7, 0],
                    [7, 3, 10],
                    [7, 11, 3, 6],
                ],
                points: 14,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 6, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 4, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 49, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 42, placement: [[0, -3], [0, -2]] },
        ],
        handList: [23, 46, 20],
        moves: [
            {
                dominoIndex: 23,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [2, 7, 4, 10],
                    [2, 11, 8],
                    [4, 7, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 46,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [5, 8, 0, 4],
                    [2, 11, 8, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 20,
                placement: [[-1, -3], [-1, -4]],
                pitchLists: [
                    [1, 4, 11, 7],
                    [10, 1, 5, 6],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 22, placement: [[2, -2], [2, -1]] },
        ],
        handList: [24, 56, 8],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [6, 2, 9],
                    [10, 2, 5],
                    [5, 9, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 56,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [11, 6, 2],
                    [6, 10, 2, 5],
                    [11, 10, 6, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[4, -3], [3, -2]],
                pitchLists: [
                    [0, 8, 3],
                    [11, 6, 2, 8],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 16, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 27, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 21, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 48, placement: [[-2, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [1, 2, 10, 6],
                    [8, 2, 5, 10],
                ],
                points: 8,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 35, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 24, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 54, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 3, placement: [[1, -2], [1, -3]] },
        ],
        handList: [14, 19, 5],
        moves: [
            {
                dominoIndex: 14,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [10, 8, 4, 1],
                    [2, 5, 9, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[4, -3], [5, -3]],
                pitchLists: [
                    [5, 1, 9],
                    [1, 9, 4],
                    [9, 6, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 5,
                placement: [[6, -3], [6, -4]],
                pitchLists: [
                    [5, 1, 9, 0],
                    [5, 9, 6, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 62, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 44, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 59, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [1, 7, 3, 10],
                    [1, 4, 10],
                    [4, 11, 7],
                    [11, 7, 4],
                ],
                points: 13,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 27, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 25, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 44, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 54, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 42, placement: [[-2, 1], [-3, 2]] },
        ],
        handList: [59, 14, 17],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [7, 10, 4],
                    [10, 11, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [1, 7, 10, 4],
                    [4, 2, 11, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 17,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [1, 4, 7],
                    [1, 4, 7],
                    [7, 2, 10],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 18, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [38, 59, 30],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [6, 11, 3],
                    [3, 11, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [7, 11, 4],
                    [10, 7, 3, 1],
                    [10, 3, 6, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 30,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [2, 7, 11, 4],
                    [11, 3, 8],
                    [3, 7, 11],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 56, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 34, placement: [[-2, 2], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[-1, 0], [0, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 6, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 15, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 43, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [6, 4, 0, 9],
                    [3, 9, 0],
                    [8, 1, 5, 9],
                ],
                points: 11,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 56, placement: [[-2, 3], [-2, 2]] },
            { dominoIndex: 29, placement: [[-3, 0], [-2, 0]] },
        ],
        handList: [19, 5, 59],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [3, 7, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 19,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [1, 3, 7, 10],
                    [9, 1, 6],
                    [1, 7, 3, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 5,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [3, 9, 5, 0],
                    [9, 1, 6, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 18, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 14, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[-2, -1], [-2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 6, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 36, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [8, 0, 3],
                    [3, 0, 8],
                    [9, 0, 4],
                    [3, 8, 11],
                ],
                points: 12,
            },
        ],
    },
}
