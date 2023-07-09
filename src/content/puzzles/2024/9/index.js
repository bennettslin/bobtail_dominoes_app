import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 28, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 46, placement: [[4, -3], [3, -2]] },
            { dominoIndex: 4, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 14, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 36, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [15, 8, 42],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-3, -1], [-2, -2]],
                pitchLists: [
                    [0, 3, 9, 6],
                    [8, 4, 1, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 15,
                placement: [[-1, -3], [0, -4]],
                pitchLists: [
                    [1, 4, 9],
                    [5, 1, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[2, -5], [2, -4]],
                pitchLists: [
                    [4, 8, 0],
                    [5, 0, 8, 2],
                    [8, 4, 1, 9],
                ],
                points: 11,
            },
        ],
        points: 28,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 39, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 14, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [59, 18, 26],
        moves: [
            {
                dominoIndex: 18,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [1, 8, 4],
                    [1, 4, 10, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [7, 10, 2, 5],
                    [10, 7, 4],
                    [10, 1, 8, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [2, 10, 7, 4],
                    [7, 1, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 36, placement: [[-2, -2], [-3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 54, placement: [[4, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [11, 8, 2],
                    [2, 8, 5],
                    [11, 2, 9, 6],
                ],
                points: 10,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 28, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [20, 14, 35],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [6, 9, 2, 1],
                    [10, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [1, 10, 2, 6],
                    [9, 4, 1],
                    [4, 10, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [0, 6, 3, 8],
                    [4, 10, 1, 8],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 55, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 36, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 3, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 59, placement: [[-1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[1, 0], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 37, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 41, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 66, placement: [[-1, -2], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [11, 4, 7, 1],
                    [1, 10, 7],
                    [7, 1, 10],
                    [2, 7, 10],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 58, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 37, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 20, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 16, placement: [[3, 0], [3, -1]] },
        ],
        handList: [4, 42, 61],
        moves: [
            {
                dominoIndex: 4,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [4, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[6, -2], [5, -2]],
                pitchLists: [
                    [0, 8, 4],
                    [8, 4, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 61,
                placement: [[4, -3], [3, -2]],
                pitchLists: [
                    [8, 0, 4],
                    [9, 0, 8, 4],
                    [9, 6, 1],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 4, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [55, 23, 48],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [8, 11, 2, 6],
                    [7, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 23,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [6, 10, 2],
                    [7, 2, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [0, 8, 5],
                    [5, 6, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 9, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 54, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [2, 9, 5],
                    [11, 6, 2],
                    [6, 9, 0],
                ],
                points: 9,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 37, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 56, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 38, placement: [[-2, 0], [-3, 0]] },
            { dominoIndex: 45, placement: [[0, 3], [-1, 3]] },
        ],
        handList: [26, 44, 15],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [7, 2, 4, 10],
                    [6, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-4, 4], [-4, 3]],
                pitchLists: [
                    [7, 10, 4],
                    [6, 11, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[-4, 5], [-3, 4]],
                pitchLists: [
                    [7, 10, 4, 1],
                    [10, 8, 5, 1],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 18, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 50, placement: [[-2, -1], [-3, 0]] },
            { dominoIndex: 29, placement: [[-2, -3], [-2, -2]] },
            { dominoIndex: 63, placement: [[-2, 0], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[-1, -2], [0, -2]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 48, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 5, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 3, placement: [[2, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [0, 8, 3],
                    [5, 8, 11, 3],
                    [0, 3, 8],
                    [11, 8, 5],
                ],
                points: 13,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 28, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 37, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 56, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 38, placement: [[3, -3], [3, -4]] },
        ],
        handList: [54, 29, 52],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [11, 3, 6],
                    [9, 6, 3],
                    [11, 6, 3, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[4, -5], [3, -5]],
                pitchLists: [
                    [2, 11, 6],
                    [10, 11, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 52,
                placement: [[5, -5], [5, -6]],
                pitchLists: [
                    [10, 2, 6],
                    [7, 2, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 9, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 43, placement: [[-1, 4], [-2, 5]] },
        ],
        handList: [16, 44, 18],
        moves: [
            {
                dominoIndex: 16,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [9, 6, 1],
                    [6, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [1, 4, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [5, 8, 1],
                    [8, 1, 4, 10],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 25, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 63, placement: [[2, -4], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[1, -1], [2, -2]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 14, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 6, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 55, placement: [[1, -3], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [0, 10, 3, 6],
                    [6, 3, 9],
                    [6, 9, 1],
                ],
                points: 10,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 28, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 60, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 44, placement: [[-1, -3], [0, -3]] },
        ],
        handList: [41, 6, 13],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 7, 10],
                    [4, 10, 7],
                    [4, 10, 7],
                    [7, 2, 11],
                ],
                points: 12,
            },
            {
                dominoIndex: 6,
                placement: [[2, -5], [2, -4]],
                pitchLists: [
                    [0, 4, 10, 7],
                    [6, 7, 2, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 13,
                placement: [[1, -5], [2, -6]],
                pitchLists: [
                    [1, 4, 7, 10],
                    [3, 0, 6],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 17, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 50, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 48, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 63, placement: [[2, 0], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[1, 0], [0, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 31, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 4, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 62, placement: [[-2, 2], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [1, 4, 7],
                    [5, 1, 8, 10],
                    [9, 4, 0],
                    [3, 0, 4, 8],
                ],
                points: 14,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 34, placement: [[-2, 4], [-1, 4]] },
            { dominoIndex: 55, placement: [[-3, 5], [-3, 4]] },
            { dominoIndex: 13, placement: [[-4, 4], [-3, 3]] },
            { dominoIndex: 27, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 7, placement: [[-5, 3], [-4, 3]] },
        ],
        handList: [59, 35, 4],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-5, 2], [-4, 2]],
                pitchLists: [
                    [7, 10, 2],
                    [10, 7, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 0], [-4, 1]],
                pitchLists: [
                    [0, 4, 7],
                    [4, 10, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[-6, 2], [-6, 3]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [8, 0, 7, 3],
                    [0, 4, 7, 8],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [2, -1]] },
        ],
        handList: [14, 42, 7],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [1, 4, 9],
                    [9, 0, 6, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 0, 4, 8],
                    [1, 4, 9, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [4, 0, 7],
                    [4, 9, 0],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 30, placement: [[-2, 3], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 25, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 38, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 66, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [6, 2, 11],
                    [6, 3, 10],
                    [9, 6, 0],
                    [9, 2, 6, 11],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 62, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 13, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 30, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 54, placement: [[-1, -1], [0, -2]] },
        ],
        handList: [48, 60, 42],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [1, 8, 5],
                    [8, 3, 11, 5],
                    [3, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 60,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [3, 8, 11, 7],
                    [3, 7, 11],
                    [10, 7, 2],
                    [5, 2, 11],
                ],
                points: 13,
            },
            {
                dominoIndex: 42,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [3, 7, 11, 4],
                    [5, 2, 11, 8],
                ],
                points: 8,
            },
        ],
        points: 33,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 38, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 14, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 33, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 62, placement: [[-1, -1], [-2, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 60, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 56, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 34, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 20, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 22, placement: [[2, 3], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [10, 4, 7],
                    [4, 11, 7, 3],
                    [4, 7, 10, 1],
                    [7, 6, 11, 2],
                    [7, 11, 3],
                ],
                points: 18,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 33, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 17, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 19, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 26, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 43, placement: [[-3, 2], [-2, 1]] },
        ],
        handList: [54, 63, 29],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [8, 9, 4, 1],
                    [11, 8, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [2, 10, 7],
                    [2, 11, 8, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [2, 10, 7, 6],
                    [9, 6, 3, 1],
                    [6, 1, 9, 4],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 63, placement: [[-4, 1], [-3, 1]] },
        ],
        handList: [15, 14, 9],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [8, 11, 4, 1],
                    [9, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 3], [-3, 3]],
                pitchLists: [
                    [11, 4, 7, 1],
                    [11, 7, 4],
                    [9, 1, 5, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [4, 5, 9, 0],
                    [1, 4, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
}
