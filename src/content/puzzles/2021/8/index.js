import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 46, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 15, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 43, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 25, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 63, placement: [[1, -2], [2, -3]] },
        ],
        handList: [14, 41, 17],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [7, 4, 11],
                    [4, 8, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [7, 4, 11, 1],
                    [1, 4, 5, 9],
                    [11, 4, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 17,
                placement: [[2, -4], [3, -5]],
                pitchLists: [
                    [1, 11, 4, 8],
                    [7, 1, 4],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 48, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 1, placement: [[3, -4], [3, -3]] },
        ],
        handList: [59, 34, 6],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [10, 7, 2],
                    [0, 8, 3, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [10, 7, 2, 3],
                    [0, 3, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [0, 6, 3],
                    [9, 2, 6],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 27, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 10, placement: [[0, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 57, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [11, 4, 2, 8],
                    [4, 5, 0, 8],
                ],
                points: 8,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 33, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 7, placement: [[-1, 2], [-1, 3]] },
        ],
        handList: [56, 9, 38],
        moves: [
            {
                dominoIndex: 56,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [11, 6, 2],
                    [10, 6, 3],
                    [11, 3, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 9,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [0, 9, 5],
                    [11, 6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[3, 1], [4, 1]],
                pitchLists: [
                    [6, 3, 11],
                    [9, 0, 3],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 19, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 37, placement: [[2, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[3, -3], [4, -3]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 57, placement: [[3, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[3, -1], [2, 0]],
                pitchLists: [
                    [11, 5, 8, 2],
                    [2, 5, 8],
                    [8, 0, 5],
                    [1, 8, 5],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 34, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 60, placement: [[1, -3], [1, -4]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 61, placement: [[0, -3], [0, -4]] },
            { dominoIndex: 9, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [63, 49, 33],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [8, 11, 5],
                    [2, 8, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[-3, 0], [-3, -1]],
                pitchLists: [
                    [3, 8, 11, 5],
                    [6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [5, 9, 0],
                    [2, 8, 11, 5],
                    [6, 3, 11, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 17, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
        ],
        handList: [6, 35, 44],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [0, 6, 9],
                    [6, 4, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [0, 8, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [1, 4, 10],
                    [0, 8, 3, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [0, -1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 30, placement: [[-1, -2], [-2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [7, 1, 10],
                    [4, 1, 7],
                    [11, 2, 7, 4],
                ],
                points: 10,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 51, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 56, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 42, placement: [[3, -2], [2, -2]] },
        ],
        handList: [20, 14, 58],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [1, 11, 8, 4],
                    [10, 11, 6, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [4, 1, 8],
                    [4, 10, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 58,
                placement: [[3, -5], [2, -5]],
                pitchLists: [
                    [7, 4, 10, 1],
                    [9, 4, 1, 8],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 16, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 37, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 23, placement: [[0, 3], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-1, 1], [0, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 25, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 30, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 55, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 20, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 45, placement: [[1, 4], [2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 50,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [9, 5, 1, 10],
                    [7, 5, 10, 2],
                    [2, 10, 6],
                    [1, 10, 6],
                ],
                points: 14,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 46, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 45, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 38, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 20, placement: [[-1, 3], [-2, 3]] },
        ],
        handList: [8, 43, 58],
        moves: [
            {
                dominoIndex: 8,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [0, 8, 4, 11],
                    [0, 3, 7],
                    [8, 11, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 43,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [4, 8, 11, 2],
                    [9, 0, 3, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 58,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [9, 7, 0, 4],
                    [7, 3, 11, 8],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 47, placement: [[0, -3], [-1, -2]] },
        ],
        handList: [54, 3, 20],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [7, 8, 3, 0],
                ],
                points: 4,
            },
            {
                dominoIndex: 54,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [9, 6, 2, 0],
                    [3, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [5, 1, 10],
                    [10, 3, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 20,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 20, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 33, placement: [[2, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 0], [0, 1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 28, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 51, placement: [[-1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [2, 5, 11],
                    [9, 6, 2],
                    [6, 2, 9],
                ],
                points: 9,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 45, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 7, placement: [[3, 2], [3, 1]] },
            { dominoIndex: 18, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [14, 27, 54],
        moves: [
            {
                dominoIndex: 14,
                placement: [[4, 0], [3, 0]],
                pitchLists: [
                    [1, 7, 4, 11],
                    [4, 7, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[4, 1], [5, 0]],
                pitchLists: [
                    [9, 6, 0],
                    [4, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 27,
                placement: [[2, 3], [3, 3]],
                pitchLists: [
                    [11, 2, 8],
                    [9, 6, 0, 2],
                    [4, 7, 0, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 14, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 7, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 37, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 25, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [4, 10, 7],
                    [3, 7, 11],
                    [7, 2, 10],
                    [7, 2, 11],
                ],
                points: 12,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 36, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 6, placement: [[3, -4], [2, -4]] },
            { dominoIndex: 55, placement: [[3, -3], [4, -4]] },
            { dominoIndex: 5, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 14, placement: [[4, -3], [4, -2]] },
            { dominoIndex: 17, placement: [[3, -1], [2, 0]] },
        ],
        handList: [3, 63, 34],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [0, 6, 3],
                    [3, 0, 6],
                    [3, 6, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 63,
                placement: [[3, -6], [4, -6]],
                pitchLists: [
                    [8, 3, 0, 6],
                    [8, 0, 3],
                    [11, 3, 6, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[4, -8], [4, -7]],
                pitchLists: [
                    [3, 7, 11],
                    [7, 8, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
        ],
        handList: [3, 36, 30],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [11, 6, 2],
                    [7, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 11, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 36,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [3, 7, 11, 2],
                    [9, 7, 3, 0],
                    [9, 2, 6, 10],
                ],
                points: 12,
            },
        ],
        points: 26,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 14, placement: [[-1, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 19, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [6, 1, 9],
                    [6, 9, 3],
                    [9, 0, 4],
                ],
                points: 9,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 23, placement: [[-3, 0], [-2, -1]] },
            { dominoIndex: 27, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [50, 13, 41],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [0, 5, 8],
                    [4, 0, 8, 5],
                    [9, 2, 5, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 13,
                placement: [[-4, 2], [-4, 3]],
                pitchLists: [
                    [1, 0, 5, 8],
                    [5, 8, 0, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[-6, 4], [-5, 3]],
                pitchLists: [
                    [1, 7, 4],
                    [7, 3, 10],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 19, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 24, placement: [[-4, 3], [-3, 2]] },
            { dominoIndex: 51, placement: [[-4, 1], [-4, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 26, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 16, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 40, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 19, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [6, 10, 4, 1],
                    [1, 2, 6, 10],
                    [10, 2, 6, 9],
                ],
                points: 12,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 15, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 49, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 12, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 63, placement: [[1, 2], [2, 1]] },
        ],
        handList: [41, 38, 7],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, 0], [3, 1]],
                pitchLists: [
                    [1, 10, 6, 4],
                    [1, 4, 7],
                    [4, 11, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 38,
                placement: [[4, 1], [3, 2]],
                pitchLists: [
                    [11, 7, 3],
                    [1, 4, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[5, 1], [5, 0]],
                pitchLists: [
                    [11, 7, 3, 0],
                    [7, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 40, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 9, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [14, 15, 20],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [10, 1, 4],
                    [9, 6, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [4, 6, 10, 1],
                    [10, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [0, 9, 1, 5],
                    [1, 10, 4],
                    [1, 6, 10, 3],
                    [5, 10, 1, 7],
                ],
                points: 15,
            },
        ],
        points: 30,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 20, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 0]] },
        ],
    },
}
