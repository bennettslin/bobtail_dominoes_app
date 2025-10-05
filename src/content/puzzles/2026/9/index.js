import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 42, placement: [[-1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 10, placement: [[-2, 3], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [6, 9, 3],
                    [3, 11, 6],
                    [3, 9, 0],
                ],
                points: 9,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 15, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 62, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 59, placement: [[-3, 4], [-3, 5]] },
        ],
        handList: [37, 41, 27],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [3, 1, 7, 10],
                    [10, 1, 5, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [4, 11, 8],
                    [11, 4, 7, 1],
                    [3, 7, 11, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 27,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [8, 2, 11],
                    [2, 4, 11, 8],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 32, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 42, placement: [[-2, 1], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 0], [-1, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 42, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 59, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 60, placement: [[-2, 1], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [8, 0, 4],
                    [4, 0, 7],
                    [0, 3, 7, 11],
                    [4, 7, 11, 3],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 19, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 38, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 54, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 24, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 3, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 48, placement: [[4, 0], [5, -1]] },
        ],
        handList: [29, 65, 25],
        moves: [
            {
                dominoIndex: 25,
                placement: [[5, 0], [6, -1]],
                pitchLists: [
                    [9, 5, 2],
                    [0, 3, 8, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[6, 1], [6, 0]],
                pitchLists: [
                    [6, 10, 2],
                    [9, 5, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 65,
                placement: [[7, -2], [6, -2]],
                pitchLists: [
                    [9, 6, 2],
                    [11, 6, 10, 2],
                    [11, 8, 5, 2],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 6, placement: [[-4, 2], [-3, 2]] },
        ],
        handList: [36, 56, 24],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [0, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [0, 3, 9, 5],
                ],
                points: 4,
            },
            {
                dominoIndex: 56,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [9, 6, 2],
                    [3, 6, 11],
                    [11, 2, 5],
                ],
                points: 9,
            },
        ],
        points: 22,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 15, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 63, placement: [[1, 0], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 4, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 18, placement: [[4, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[4, -3], [5, -3]],
                pitchLists: [
                    [0, 5, 8],
                    [5, 8, 2],
                    [8, 1, 5],
                ],
                points: 9,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 4, placement: [[-2, -1], [-2, -2]] },
            { dominoIndex: 5, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [34, 9, 42],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, -3], [-1, -2]],
                pitchLists: [
                    [0, 9, 5],
                    [4, 9, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-1, -4], [0, -4]],
                pitchLists: [
                    [4, 0, 9, 5],
                    [8, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[-3, -1], [-3, -2]],
                pitchLists: [
                    [3, 0, 5, 9],
                    [8, 0, 4, 3],
                    [7, 4, 9, 1],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 1, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 35, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, -1], [0, 0]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 51, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 60, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 24, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 42, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [11, 8, 2],
                    [0, 5, 8],
                    [4, 11, 8],
                    [8, 5, 11],
                ],
                points: 12,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 14, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 54, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 3, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 42, placement: [[1, 4], [0, 5]] },
        ],
        handList: [33, 32, 19],
        moves: [
            {
                dominoIndex: 33,
                placement: [[3, 2], [2, 2]],
                pitchLists: [
                    [10, 1, 6, 3],
                    [3, 0, 4, 8],
                    [9, 6, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 32,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [3, 9, 6, 0],
                    [3, 6, 10],
                    [5, 9, 1, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 19,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [9, 1, 5],
                    [1, 3, 6, 10],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 42, placement: [[0, -1], [0, -2]] },
        ],
        handList: [9, 3, 33],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [6, 9, 0],
                    [8, 4, 11, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [0, 3, 9],
                    [3, 6, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [11, 9, 3, 6],
                    [0, 3, 9, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [-1, 2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 18, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 50,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [8, 1, 5],
                    [10, 5, 2, 8],
                    [6, 1, 10],
                ],
                points: 10,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 41, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 59, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 26, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 12, placement: [[3, 1], [2, 2]] },
        ],
        handList: [4, 18, 49],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [0, 4, 7],
                    [0, 7, 4, 10],
                    [4, 11, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 18,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [1, 7, 11, 4],
                    [8, 0, 4, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 49,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [5, 7, 2, 10],
                    [0, 1, 9, 5],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 49, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 59, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 2, placement: [[0, 0], [0, -1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 11, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 49, placement: [[1, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [3, 9, 6],
                    [9, 1, 6],
                    [9, 1, 5],
                    [11, 3, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 66, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 55, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 29, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 16, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 41, placement: [[-2, 1], [-2, 0]] },
        ],
        handList: [24, 59, 26],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [6, 11, 2],
                    [2, 11, 5],
                    [6, 1, 10, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 5], [-3, 4]],
                pitchLists: [
                    [6, 11, 2, 7],
                    [10, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[-3, 3], [-4, 4]],
                pitchLists: [
                    [2, 10, 7],
                    [10, 2, 7],
                    [7, 10, 2, 5],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
        ],
        handList: [60, 6, 43],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [3, 0, 7],
                    [3, 7, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 6,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [3, 6, 0],
                    [0, 3, 7, 11],
                    [0, 6, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 43,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [4, 9, 0, 7],
                    [4, 0, 3, 8],
                    [9, 6, 0],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 63, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 5, placement: [[4, -3], [3, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, -1], [0, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[-2, 1], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [9, 4, 1],
                    [1, 10, 6],
                    [9, 5, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 6, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 37, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 33, placement: [[1, -3], [1, -2]] },
        ],
        handList: [20, 65, 50],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [7, 10, 1],
                    [10, 3, 6, 1],
                    [3, 6, 0, 10],
                    [6, 10, 2],
                ],
                points: 14,
            },
            {
                dominoIndex: 65,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [3, 0, 6, 9],
                    [6, 3, 11],
                    [11, 6, 10, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 50,
                placement: [[5, -3], [4, -2]],
                pitchLists: [
                    [5, 10, 9, 1],
                    [6, 3, 11, 10],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 7, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 42, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 35, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 25, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 1, placement: [[1, 0], [0, 1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 28, placement: [[2, 1], [3, 1]] },
            { dominoIndex: 7, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 37, placement: [[0, 2], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [10, 3, 1, 7],
                    [1, 6, 3, 10],
                    [7, 2, 11, 6],
                ],
                points: 12,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 52, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 33, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 56, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 38, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 24, placement: [[1, 1], [2, 0]] },
        ],
        handList: [55, 29, 47],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [6, 10, 3],
                    [10, 9, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [2, 11, 6],
                    [6, 10, 3, 2],
                    [5, 6, 2, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 47,
                placement: [[1, 4], [1, 3]],
                pitchLists: [
                    [2, 11, 7, 5],
                    [2, 11, 6, 7],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 19, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 60, placement: [[2, 1], [2, 0]] },
        ],
        handList: [31, 26],
        moves: [
            {
                dominoIndex: 31,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [3, 11, 6],
                    [8, 2, 11, 4],
                    [4, 7, 10, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [2, 7, 10],
                    [3, 11, 6, 7],
                ],
                points: 7,
            },
        ],
        points: 18,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 16, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, 0], [0, -1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 8, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 15, placement: [[-2, 1], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 40,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [4, 1, 7],
                    [4, 5, 0, 8],
                    [6, 9, 3],
                    [6, 1, 10],
                ],
                points: 13,
            },
        ],
    },
}
