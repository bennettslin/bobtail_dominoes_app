import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 50, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 24, placement: [[3, -4], [2, -4]] },
            { dominoIndex: 6, placement: [[-2, -2], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[-1, -2], [0, -2]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 56, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 50, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 29, placement: [[3, -1], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [9, 6, 2],
                    [2, 6, 9],
                    [10, 2, 5, 6],
                    [5, 10, 2, 9],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 5, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 18, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 30, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 39, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 59, placement: [[5, -3], [4, -3]] },
        ],
        handList: [15, 29, 40],
        moves: [
            {
                dominoIndex: 15,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [10, 1, 5],
                    [5, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[6, -3], [6, -4]],
                pitchLists: [
                    [4, 10, 7, 2],
                    [10, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[7, -5], [6, -5]],
                pitchLists: [
                    [4, 10, 7, 1],
                    [6, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -1]] },
        ],
        handList: [16, 48, 7],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [10, 6, 1],
                    [6, 7, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [5, 8, 2],
                    [5, 10, 6, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[1, -4], [2, -5]],
                pitchLists: [
                    [0, 5, 8, 2],
                    [7, 0, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 30, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[1, 0], [1, 1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 62, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 40, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[0, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [5, 2, 11],
                    [2, 3, 10, 6],
                    [8, 3, 11],
                ],
                points: 10,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 45, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 34, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 60, placement: [[1, 1], [2, 1]] },
        ],
        handList: [4, 42, 38],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [4, 0, 8, 7],
                    [7, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [0, 3, 4, 8],
                    [4, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [3, 11, 8],
                    [11, 4, 0, 7],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 53, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 8, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 21, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 9, placement: [[1, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 54, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 9, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 31, placement: [[-4, 1], [-4, 2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [5, 2, 8],
                    [5, 9, 1],
                    [5, 0, 9, 4],
                    [0, 9, 4],
                    [2, 9, 6],
                ],
                points: 16,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 16, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 29, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 46, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 42, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 19, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [5, 23, 54],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [0, 5, 9],
                    [1, 4, 8, 0],
                    [6, 10, 1, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 23,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [2, 0, 5, 9],
                    [4, 8, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-4, 0], [-4, 1]],
                pitchLists: [
                    [6, 9, 2],
                    [9, 4, 8, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 17, placement: [[-2, 3], [-1, 3]] },
        ],
        handList: [59, 33, 38],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [10, 4, 1, 7],
                    [10, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 5], [-2, 4]],
                pitchLists: [
                    [10, 7, 3],
                    [7, 11, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [10, 1, 7, 3],
                    [11, 10, 6, 3],
                    [6, 7, 11, 3],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 60, placement: [[1, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 3], [0, 2]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 28, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[2, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 11, 4],
                    [7, 3, 0, 9],
                    [11, 8, 2],
                ],
                points: 10,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 5, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 4, placement: [[1, 0], [2, -1]] },
        ],
        handList: [54, 38],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [3, 0, 9],
                    [11, 3, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [6, 3, 9, 0],
                    [6, 9, 3],
                    [11, 3, 8, 6],
                    [0, 3, 9],
                ],
                points: 14,
            },
        ],
        points: 20,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 23, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 65, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 4, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 34, placement: [[2, 2], [2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 47, placement: [[0, 1], [-1, 2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 43, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 13, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 18, placement: [[-2, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [1, 8, 4, 0],
                    [6, 9, 0],
                    [4, 9, 1],
                    [4, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 25, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 44, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 51, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 17, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 29, placement: [[2, -2], [3, -3]] },
        ],
        handList: [33, 26, 63],
        moves: [
            {
                dominoIndex: 26,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [10, 7, 2],
                    [7, 1, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[3, -4], [2, -3]],
                pitchLists: [
                    [3, 10, 1, 7],
                    [6, 10, 7, 2],
                    [6, 2, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 63,
                placement: [[1, -4], [2, -4]],
                pitchLists: [
                    [8, 11, 3],
                    [11, 6, 2, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 27, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 51, placement: [[-2, 0], [-2, 1]] },
        ],
        handList: [41, 63, 9],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [2, 8, 11, 4],
                    [0, 7, 4],
                    [5, 2, 11, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [11, 8, 4],
                    [2, 8, 11],
                    [3, 11, 8],
                    [0, 7, 4, 11],
                ],
                points: 13,
            },
            {
                dominoIndex: 9,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 8, 4, 0],
                    [3, 7, 0, 9],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 43, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 22, placement: [[2, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[1, -1], [1, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 8, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 50, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [11, 5, 2],
                    [5, 10, 2],
                    [0, 8, 5],
                ],
                points: 9,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 23, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 14, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 9, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 59, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 43, placement: [[2, -4], [3, -4]] },
        ],
        handList: [4, 54, 8],
        moves: [
            {
                dominoIndex: 4,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [4, 9, 0],
                    [0, 4, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[5, -4], [5, -5]],
                pitchLists: [
                    [4, 9, 0, 6],
                    [9, 0, 4, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [1, 4, 8, 0],
                    [9, 6, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 66, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 42, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 25, placement: [[-3, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 1], [0, 2]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 29, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 30, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 17, placement: [[-2, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [5, 2, 10],
                    [6, 2, 7, 11],
                    [7, 2, 11],
                    [6, 5, 2, 10],
                ],
                points: 14,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 53, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 27, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 3, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 60, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 43, placement: [[3, -2], [2, -1]] },
        ],
        handList: [24, 16, 37],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [2, 11, 7],
                    [2, 8, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [7, 3, 10],
                    [2, 5, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 16,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [9, 2, 1, 6],
                    [1, 7, 3, 10],
                    [2, 11, 7, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 54, placement: [[1, -1], [2, -1]] },
        ],
        handList: [19, 4, 60],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [1, 6, 9],
                    [9, 1, 4, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [9, 4, 0],
                    [4, 1, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [7, 11, 6, 2],
                    [7, 9, 4, 0],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 16, placement: [[0, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[1, 0], [1, 1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 8, placement: [[1, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [1, 8, 4],
                    [4, 7, 10],
                    [4, 0, 7],
                    [4, 0, 7],
                ],
                points: 12,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 36, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[1, 2], [1, 1]] },
        ],
        handList: [63, 30, 19],
        moves: [
            {
                dominoIndex: 63,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [2, 4, 11, 8],
                    [7, 11, 4],
                    [5, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [7, 11, 4, 2],
                    [5, 11, 2],
                    [0, 4, 8, 11],
                    [11, 4, 8],
                ],
                points: 14,
            },
            {
                dominoIndex: 19,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [9, 5, 11, 2],
                    [9, 1, 4, 7],
                ],
                points: 12,
            },
        ],
        points: 38,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 58, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 46, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 43, placement: [[2, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[1, -1], [1, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 11, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 3, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 42, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 6, placement: [[2, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [3, 0, 6],
                    [9, 6, 0],
                    [6, 3, 9, 0],
                    [9, 0, 6, 3],
                ],
                points: 14,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 42, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 7, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 55, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 16, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 23, placement: [[2, -3], [1, -3]] },
        ],
        handList: [15, 28, 60],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [5, 1, 10, 8],
                    [4, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [5, 9, 2],
                    [1, 10, 6, 2],
                    [4, 7, 1, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[-2, -1], [-3, 0]],
                pitchLists: [
                    [7, 0, 4],
                    [3, 7, 11],
                    [11, 5, 9, 2],
                ],
                points: 10,
            },
        ],
        points: 30,
    },
}
