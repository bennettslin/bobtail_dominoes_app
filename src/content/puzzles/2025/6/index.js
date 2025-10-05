import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 45, placement: [[-2, -1], [-3, 0]] },
        ],
        handList: [35, 38, 34],
        moves: [
            {
                dominoIndex: 38,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [11, 3, 8],
                    [3, 0, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [11, 7, 3],
                    [7, 3, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [3, 5, 8, 0],
                    [8, 3, 4, 11],
                    [8, 11, 7, 3],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 19, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[2, -2], [2, -1]] },
        ],
        handList: [14, 15, 66],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [1, 4, 7],
                    [4, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [5, 1, 10, 9],
                    [5, 4, 1, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 66,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [5, 1, 10],
                    [11, 1, 4, 7],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 45, placement: [[3, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 57, placement: [[1, -1], [1, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 51, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 6, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 27, placement: [[0, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [8, 3, 11],
                    [11, 3, 8],
                    [3, 0, 6],
                    [11, 8, 2],
                ],
                points: 12,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 40, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 45, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 7, placement: [[-2, 3], [-2, 2]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
        ],
        handList: [3, 27, 48],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [0, 7, 4, 11],
                    [3, 7, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [8, 5, 0],
                    [3, 0, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 27,
                placement: [[-1, 3], [-2, 4]],
                pitchLists: [
                    [8, 5, 0, 2],
                    [11, 2, 8],
                    [3, 7, 0, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 35, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 4, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 18, placement: [[-3, 3], [-4, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[0, 0], [-1, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 59, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 63, placement: [[-3, 4], [-3, 3]] },
            { dominoIndex: 42, placement: [[-3, 2], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [8, 0, 4],
                    [8, 3, 0],
                    [3, 11, 7, 0],
                    [0, 7, 4],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 24, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 9, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 33, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 1, placement: [[-1, 5], [-2, 5]] },
            { dominoIndex: 37, placement: [[-1, 1], [-1, 0]] },
        ],
        handList: [42, 14, 38],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [4, 3, 8, 0],
                    [11, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [11, 8, 2],
                    [4, 8, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [5, 9, 1],
                    [11, 8, 2, 4],
                    [6, 0, 9, 4],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 60, placement: [[3, -2], [3, -1]] },
        ],
        handList: [24, 34, 4],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 2, 5],
                    [11, 6, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [7, 3, 11],
                    [7, 3, 11],
                    [7, 11, 2, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 4,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [0, 3, 6],
                    [4, 0, 7, 8],
                    [4, 7, 11, 3],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 26, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 35, placement: [[1, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [1, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 46, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 50, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 6, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [6, 9, 2],
                    [10, 5, 2],
                    [5, 9, 0],
                ],
                points: 9,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 47, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 28, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 26, placement: [[-2, 0], [-1, -1]] },
        ],
        handList: [37, 29, 52],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [2, 7, 11, 4],
                ],
                points: 4,
            },
            {
                dominoIndex: 37,
                placement: [[2, -3], [1, -3]],
                pitchLists: [
                    [10, 9, 2, 5],
                ],
                points: 4,
            },
            {
                dominoIndex: 52,
                placement: [[0, -2], [0, -3]],
                pitchLists: [
                    [2, 6, 9],
                    [10, 6, 7, 2],
                    [7, 10, 3],
                    [7, 2, 10],
                ],
                points: 13,
            },
        ],
        points: 23,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 4, placement: [[2, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[0, 1], [1, 1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 50,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [4, 0, 9, 5],
                    [9, 1, 5],
                    [10, 5, 2, 8],
                    [5, 1, 10],
                ],
                points: 14,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 28, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 48, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 56, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 30, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 19, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 49, placement: [[-2, -2], [-3, -1]] },
            { dominoIndex: 29, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [18, 4, 15],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-1, -3], [-1, -2]],
                pitchLists: [
                    [1, 8, 5],
                    [1, 5, 9],
                    [5, 8, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 15,
                placement: [[-3, -2], [-3, -3]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [5, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-4, 0], [-3, 0]],
                pitchLists: [
                    [0, 4, 9],
                    [1, 5, 9, 0],
                    [5, 1, 9, 4],
                    [8, 1, 4],
                ],
                points: 14,
            },
        ],
        points: 32,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 19, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 44, placement: [[-1, -2], [-2, -1]] },
        ],
        handList: [62, 15, 18],
        moves: [
            {
                dominoIndex: 62,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [8, 4, 10, 1],
                ],
                points: 4,
            },
            {
                dominoIndex: 15,
                placement: [[-2, -2], [-2, -3]],
                pitchLists: [
                    [1, 4, 10],
                    [5, 1, 10, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-4, -1], [-3, -2]],
                pitchLists: [
                    [5, 8, 1],
                    [8, 1, 4, 10],
                ],
                points: 7,
            },
        ],
        points: 20,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 4, placement: [[-2, 4], [-2, 5]] },
            { dominoIndex: 55, placement: [[-3, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 58, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 9, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 56, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [0, 6, 9],
                    [3, 0, 7],
                    [3, 6, 11],
                ],
                points: 9,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 43, placement: [[-2, 0], [-3, 0]] },
            { dominoIndex: 6, placement: [[-3, 2], [-3, 1]] },
        ],
        handList: [4, 18, 48],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [4, 0, 9],
                    [4, 9, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [1, 8, 4],
                    [8, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[-2, -3], [-3, -3]],
                pitchLists: [
                    [8, 5, 1],
                    [5, 8, 0, 4],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 20, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 2, placement: [[0, 3], [1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[2, 0], [3, 0]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 50, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 5, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 19, placement: [[2, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [8, 1, 5, 9],
                    [9, 5, 0],
                    [5, 8, 2],
                    [9, 0, 5],
                ],
                points: 13,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 22, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 37, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 34, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 36, placement: [[1, 2], [2, 2]] },
        ],
        handList: [16, 54, 30],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [8, 3, 0, 6],
                    [3, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [3, 9, 1, 6],
                    [10, 5, 1, 9],
                    [1, 3, 6, 9],
                ],
                points: 12,
            },
            {
                dominoIndex: 30,
                placement: [[4, 0], [4, -1]],
                pitchLists: [
                    [2, 6, 9],
                    [6, 10, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 32, placement: [[2, 1], [1, 2]] },
        ],
        handList: [63, 30, 50],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [8, 11, 5],
                    [8, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 30,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [2, 8, 11, 5],
                    [8, 6, 2, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 50,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [2, 5, 10],
                    [2, 8, 5],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 5, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 2, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 19, placement: [[-1, -1], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [3, 6, 10, 0],
                    [9, 1, 5, 6],
                ],
                points: 8,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 25, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 63, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 20, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 3, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [40, 59, 14],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [2, 10, 7],
                    [0, 3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [2, 10, 7, 6],
                ],
                points: 4,
            },
            {
                dominoIndex: 14,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [4, 1, 7],
                    [9, 7, 1, 4],
                    [6, 10, 1],
                    [8, 11, 3, 4],
                    [10, 2, 7, 4],
                ],
                points: 18,
            },
        ],
        points: 31,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 19, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 55, placement: [[-4, 2], [-5, 3]] },
            { dominoIndex: 44, placement: [[-2, 0], [-3, 0]] },
            { dominoIndex: 15, placement: [[-5, 2], [-4, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 42, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 17, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 45, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [1, 10, 7],
                    [4, 7, 1],
                    [7, 10, 3],
                    [5, 8, 1, 10],
                ],
                points: 13,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 16, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 48, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 64, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 45, placement: [[-3, 0], [-2, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [8, 20, 15],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-3, -2], [-3, -1]],
                pitchLists: [
                    [1, 10, 4],
                    [10, 11, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [4, 0, 5, 9],
                    [5, 2, 0, 8],
                    [1, 10, 4, 8],
                ],
                points: 12,
            },
            {
                dominoIndex: 15,
                placement: [[-4, 1], [-5, 1]],
                pitchLists: [
                    [5, 1, 8],
                    [8, 11, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 60, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 28, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 16, placement: [[2, -2], [2, -1]] },
        ],
        handList: [65, 33, 36],
        moves: [
            {
                dominoIndex: 65,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [1, 6, 9],
                    [2, 9, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [3, 1, 6, 9],
                    [6, 1, 9, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 36,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [6, 3, 11],
                    [9, 3, 6],
                    [3, 6, 9],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
}
