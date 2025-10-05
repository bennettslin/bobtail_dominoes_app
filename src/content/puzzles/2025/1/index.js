import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 54, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 5, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [6, 9, 0, 4],
                    [11, 0, 8, 4],
                    [2, 5, 8],
                ],
                points: 11,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 49, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 16, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 55, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 37, placement: [[1, -3], [2, -3]] },
        ],
        handList: [19, 22, 15],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [6, 10, 1],
                    [5, 4, 1, 9],
                    [1, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [1, 5, 9],
                    [1, 10, 6, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [1, 5, 9, 2],
                    [6, 10, 1, 2],
                    [1, 6, 9, 3],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 14, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 8, placement: [[2, 1], [3, 1]] },
            { dominoIndex: 25, placement: [[3, 2], [4, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, 1], [1, 2]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 29, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 19, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 26, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [6, 10, 2, 7],
                    [9, 6, 1],
                    [2, 6, 9],
                    [9, 2, 6, 10],
                ],
                points: 14,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 57, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 63, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 15, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 31, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 8, placement: [[-2, 3], [-3, 3]] },
        ],
        handList: [48, 35, 1],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [2, 5, 8],
                    [5, 8, 3, 0],
                    [8, 1, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [3, 11, 2, 7],
                    [8, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 1,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [0, 8, 3],
                    [1, 8, 11, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
        ],
        handList: [31, 54, 40],
        moves: [
            {
                dominoIndex: 31,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [3, 7, 0],
                    [4, 10, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [3, 9, 6],
                    [4, 10, 1, 6],
                    [3, 7, 0, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 40,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [7, 10, 4],
                    [6, 4, 1, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 6, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 4, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 54, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [3, 0, 9, 6],
                    [0, 9, 3],
                    [9, 0, 6],
                ],
                points: 10,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 1, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 42, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 16, placement: [[3, -3], [2, -2]] },
        ],
        handList: [37, 34, 51],
        moves: [
            {
                dominoIndex: 37,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [3, 6, 0],
                    [10, 3, 7],
                    [10, 6, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 34,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [7, 10, 1],
                    [7, 3, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 51,
                placement: [[0, -3], [1, -4]],
                pitchLists: [
                    [5, 7, 10, 1],
                    [11, 7, 3, 10],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 25, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 20, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 48, placement: [[2, 2], [3, 1]] },
            { dominoIndex: 54, placement: [[3, -1], [4, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 2], [0, 1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 38, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 45, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 4], [-2, 4]],
                pitchLists: [
                    [7, 11, 4],
                    [11, 3, 7, 4],
                    [10, 4, 7],
                    [2, 11, 7],
                ],
                points: 13,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 35, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 3, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 65, placement: [[3, -4], [2, -4]] },
            { dominoIndex: 47, placement: [[2, -5], [3, -5]] },
            { dominoIndex: 56, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 63, placement: [[4, -3], [5, -4]] },
        ],
        handList: [20, 33, 44],
        moves: [
            {
                dominoIndex: 33,
                placement: [[5, -2], [5, -3]],
                pitchLists: [
                    [11, 6, 3],
                    [3, 0, 8, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[4, -5], [5, -5]],
                pitchLists: [
                    [5, 7, 1, 10],
                    [1, 9, 3, 6],
                    [10, 11, 6, 3],
                ],
                points: 12,
            },
            {
                dominoIndex: 44,
                placement: [[4, -6], [4, -7]],
                pitchLists: [
                    [10, 4, 1],
                    [4, 7, 11],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 50, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 58, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [14, 59, 26],
        moves: [
            {
                dominoIndex: 59,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [7, 10, 3, 1],
                ],
                points: 4,
            },
            {
                dominoIndex: 26,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [10, 7, 2],
                    [10, 3, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [5, 1, 10],
                    [4, 1, 10],
                    [4, 10, 7, 2],
                ],
                points: 10,
            },
        ],
        points: 22,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 7, placement: [[-2, 3], [-2, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 49, placement: [[-1, 3], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [6, 0, 3],
                    [0, 9, 6],
                    [9, 0, 5],
                ],
                points: 9,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 53, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 2, placement: [[-3, 4], [-2, 4]] },
        ],
        handList: [30, 13, 54],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [6, 8, 11, 2],
                    [4, 11, 7, 2],
                    [7, 11, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 13,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [11, 4, 7, 1],
                    [3, 7, 11, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 54,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [11, 3, 6],
                    [9, 6, 1, 2],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 9, placement: [[-3, 1], [-4, 1]] },
            { dominoIndex: 16, placement: [[-1, -2], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 26, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 17, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 45, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 60, placement: [[4, -3], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [4, 2, 7, 11],
                    [4, 7, 1],
                    [7, 4, 1],
                    [7, 2, 10],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[-2, -1], [-3, 0]] },
            { dominoIndex: 14, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[-4, 1], [-3, 1]] },
            { dominoIndex: 11, placement: [[-3, -1], [-2, -2]] },
        ],
        handList: [19, 33, 29],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-5, 2], [-5, 1]],
                pitchLists: [
                    [8, 11, 4, 1],
                    [9, 4, 7, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[-4, -1], [-5, 0]],
                pitchLists: [
                    [3, 0, 8],
                    [6, 9, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 29,
                placement: [[-5, 3], [-4, 2]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [5, 7, 10, 2],
                    [1, 10, 4],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 37, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 3, placement: [[1, 0], [1, 1]] },
        ],
        handList: [64, 54, 38],
        moves: [
            {
                dominoIndex: 64,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [7, 0, 3, 10],
                ],
                points: 4,
            },
            {
                dominoIndex: 54,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [2, 0, 6, 9],
                    [6, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [7, 3, 11],
                    [10, 3, 6],
                    [11, 6, 3, 9],
                ],
                points: 10,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 7, placement: [[-1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[1, -1], [0, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 58, placement: [[0, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [9, 6, 1],
                    [4, 10, 1],
                    [7, 1, 10],
                ],
                points: 9,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 65, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 63, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 26, placement: [[3, -1], [3, -2]] },
        ],
        handList: [29, 43, 20],
        moves: [
            {
                dominoIndex: 29,
                placement: [[5, -2], [4, -2]],
                pitchLists: [
                    [7, 10, 2],
                    [10, 2, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [4, 7, 10, 2],
                    [9, 4, 0, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 20,
                placement: [[4, -4], [3, -3]],
                pitchLists: [
                    [1, 10, 4],
                    [10, 7, 2],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 1, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 54, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 26, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 33, placement: [[1, 2], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 20, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 38, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [8, 4, 11],
                    [7, 0, 4],
                    [3, 11, 7, 4],
                    [3, 0, 8],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 57, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 24, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 38, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 33, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 42, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 51, placement: [[4, -3], [4, -2]] },
        ],
        handList: [27, 9, 3],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [0, 3, 6],
                ],
                points: 3,
            },
            {
                dominoIndex: 27,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 3, 7, 11],
                    [0, 3, 6, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[-1, -3], [0, -3]],
                pitchLists: [
                    [0, 9, 3],
                    [0, 2, 8, 5],
                    [9, 6, 3, 0],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 45, placement: [[0, -2], [0, -3]] },
        ],
        handList: [63, 41, 23],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [8, 4, 1, 10],
                    [8, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [4, 7, 1],
                    [4, 11, 8],
                    [7, 4, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 23,
                placement: [[-1, -3], [-2, -3]],
                pitchLists: [
                    [4, 2, 11, 7],
                    [2, 8, 11, 5],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 50, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 25, placement: [[2, -3], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[1, -1], [2, -1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 10, placement: [[1, 1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [3, 6, 9],
                    [0, 9, 3],
                    [10, 3, 6],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 44, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 45, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[-1, 4], [0, 3]] },
        ],
        handList: [17, 49, 33],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [4, 9, 7, 1],
                    [7, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [9, 5, 1],
                    [5, 7, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[1, 3], [2, 3]],
                pitchLists: [
                    [10, 11, 3, 6],
                    [9, 5, 1, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 62, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 54, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 38, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, -2], [-1, -2]] },
        ],
    },
}
