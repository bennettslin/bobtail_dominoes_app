import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 36, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 25, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[-1, 1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 65, placement: [[0, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [9, 5, 0],
                    [3, 8, 0],
                    [11, 5, 8],
                ],
                points: 9,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 43, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 60, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 5, placement: [[1, -3], [1, -2]] },
        ],
        handList: [9, 55, 3],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [9, 0, 4],
                    [4, 0, 9],
                    [7, 1, 4, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [9, 0, 4, 6],
                    [1, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 11, 6],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 55, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 14, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 9, placement: [[-2, 3], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[0, 0], [0, -1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 63, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 4, placement: [[4, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 18,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [0, 8, 4, 1],
                    [4, 8, 1],
                    [5, 1, 8],
                    [0, 8, 4, 11],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 51, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 34, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 18, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 27, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 15, placement: [[3, -2], [2, -2]] },
        ],
        handList: [38, 48, 66],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [3, 8, 11],
                    [7, 3, 11],
                    [0, 4, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[-1, 4], [-2, 4]],
                pitchLists: [
                    [8, 2, 5],
                    [7, 3, 11, 8],
                    [5, 11, 2, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 66,
                placement: [[-1, 5], [0, 4]],
                pitchLists: [
                    [8, 2, 5, 10],
                    [8, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 10, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 35, placement: [[1, -3], [1, -2]] },
        ],
        handList: [55, 45, 20],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [3, 6, 10],
                    [3, 8, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [8, 4, 11],
                    [11, 3, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [10, 1, 6],
                    [8, 4, 11, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[2, -2], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[2, 0], [1, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 37, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 56, placement: [[0, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [1, 10, 6],
                    [7, 1, 4],
                    [7, 3, 11],
                    [7, 10, 3],
                ],
                points: 12,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 4, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 54, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 30, placement: [[0, -2], [-1, -2]] },
        ],
        handList: [16, 28, 48],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, -1], [-2, -2]],
                pitchLists: [
                    [6, 1, 9],
                    [6, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 28,
                placement: [[-2, -3], [-3, -2]],
                pitchLists: [
                    [2, 6, 1, 9],
                    [9, 6, 11, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 48,
                placement: [[-4, -1], [-3, -1]],
                pitchLists: [
                    [5, 8, 1, 0],
                    [2, 9, 5],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 41, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 7, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 59, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 1], [0, 2]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 64, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 38, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 60, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 54, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 5, placement: [[-1, -2], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-1, -3], [0, -3]],
                pitchLists: [
                    [3, 9, 6],
                    [3, 0, 7],
                    [9, 3, 11, 6],
                    [9, 0, 5],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 17, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 48, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 3, placement: [[-2, -2], [-1, -2]] },
            { dominoIndex: 64, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 56, placement: [[-3, -2], [-3, -1]] },
            { dominoIndex: 59, placement: [[0, 2], [0, 1]] },
        ],
        handList: [14, 38, 15],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [7, 4, 1],
                    [1, 7, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [3, 7, 10],
                    [11, 7, 4, 1],
                    [11, 2, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [1, 3, 7, 10],
                    [5, 11, 2, 7],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 56, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 35, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 4, placement: [[2, 0], [1, 1]] },
        ],
        handList: [59, 51, 27],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [2, 10, 7],
                    [8, 0, 4, 7],
                    [7, 10, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 51,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [5, 11, 3, 8],
                    [5, 2, 10, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 27,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [2, 7, 10, 4],
                    [5, 11, 2],
                    [8, 11, 2],
                ],
                points: 10,
            },
        ],
        points: 30,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 51, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[1, 0], [0, 0]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 47, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [3, 6, 9],
                    [11, 6, 2],
                    [7, 10, 3, 11],
                ],
                points: 10,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 11, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 51, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 65, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 41, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 26, placement: [[-2, -1], [-2, 0]] },
        ],
        handList: [3, 33, 49],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [6, 3, 11, 9],
                    [11, 7, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[-4, 2], [-4, 3]],
                pitchLists: [
                    [0, 7, 4],
                    [6, 0, 3],
                    [11, 7, 3, 0],
                    [2, 11, 7, 3],
                ],
                points: 14,
            },
            {
                dominoIndex: 49,
                placement: [[-3, -1], [-4, 0]],
                pitchLists: [
                    [5, 2, 11],
                    [9, 6, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 29, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 7, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 16, placement: [[1, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 37, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 4, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 24, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 36, placement: [[4, -1], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [3, 0, 5, 8],
                    [3, 6, 0, 10],
                    [6, 0, 9, 3],
                    [6, 9, 2],
                ],
                points: 15,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 8, placement: [[-2, -2], [-3, -1]] },
            { dominoIndex: 30, placement: [[-3, -2], [-3, -3]] },
            { dominoIndex: 31, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 46, placement: [[-3, 0], [-4, 0]] },
            { dominoIndex: 34, placement: [[-2, -4], [-2, -3]] },
        ],
        handList: [60, 55, 38],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-1, -5], [-1, -4]],
                pitchLists: [
                    [7, 11, 3, 6],
                    [7, 3, 11],
                    [11, 7, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 38,
                placement: [[-3, -5], [-2, -5]],
                pitchLists: [
                    [3, 11, 7],
                    [11, 3, 7, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[0, -5], [0, -6]],
                pitchLists: [
                    [3, 11, 7, 6],
                    [6, 11, 7, 2],
                    [10, 7, 3, 11],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 20, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 50, placement: [[-2, 3], [-2, 4]] },
        ],
        handList: [19, 41, 61],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [1, 9, 4],
                    [1, 5, 10],
                    [8, 1, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [7, 4, 1],
                    [4, 9, 1],
                    [7, 4, 1],
                    [7, 1, 5, 10],
                ],
                points: 13,
            },
            {
                dominoIndex: 61,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [8, 1, 9, 4],
                    [9, 5, 1, 10],
                    [7, 4, 1, 9],
                ],
                points: 12,
            },
        ],
        points: 37,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 17, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 0], [0, 1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 17, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [1, 7, 4],
                    [4, 8, 0],
                    [11, 5, 8],
                ],
                points: 9,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 37, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [2, -1]] },
        ],
        handList: [24, 59, 40],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [9, 5, 2],
                    [1, 5, 10],
                    [9, 0, 3, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [10, 2, 7],
                    [9, 5, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[-3, 4], [-3, 5]],
                pitchLists: [
                    [4, 7, 10],
                    [10, 2, 7, 6],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 38, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[0, 1], [0, 2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 57, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 27, placement: [[-1, 0], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [2, 11, 8],
                    [11, 5, 8],
                    [11, 8, 3],
                    [8, 5, 11],
                    [5, 2, 11],
                ],
                points: 15,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 11, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 59, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 45, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 24, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 36, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 9, placement: [[2, 1], [2, 2]] },
        ],
        handList: [4, 41, 49],
        moves: [
            {
                dominoIndex: 4,
                placement: [[4, 0], [3, 1]],
                pitchLists: [
                    [0, 4, 9],
                    [7, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 49,
                placement: [[4, 2], [4, 1]],
                pitchLists: [
                    [0, 9, 5],
                    [7, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[4, -1], [5, -1]],
                pitchLists: [
                    [11, 4, 7],
                    [4, 0, 9, 5],
                    [7, 0, 4, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 18, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[2, 1], [2, 2]] },
        ],
        handList: [3, 8, 36],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [6, 0, 3],
                    [0, 8, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [0, 5, 1, 8],
                    [8, 6, 0, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 36,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [9, 3, 6, 1],
                    [3, 8, 0],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 45, placement: [[1, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[1, 0], [0, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 26, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 18, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 45, placement: [[-3, 3], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [7, 3, 11, 8],
                    [3, 7, 11],
                    [2, 7, 11],
                ],
                points: 10,
            },
        ],
    },
}
