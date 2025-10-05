import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 48, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 56, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 60, placement: [[2, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[1, -1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 51, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 44, placement: [[-3, 3], [-4, 3]] },
            { dominoIndex: 41, placement: [[-5, 2], [-5, 3]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-3, 0], [-4, 1]],
                pitchLists: [
                    [0, 5, 9, 2],
                    [0, 11, 8, 4],
                    [0, 7, 4],
                    [7, 2, 10],
                ],
                points: 14,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 39, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 49, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 54, placement: [[-3, 1], [-3, 0]] },
            { dominoIndex: 11, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 25, placement: [[-3, -1], [-2, -1]] },
            { dominoIndex: 21, placement: [[-3, -2], [-4, -1]] },
        ],
        handList: [19, 42, 14],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-4, 1], [-5, 1]],
                pitchLists: [
                    [9, 1, 6],
                    [6, 9, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[-5, 3], [-5, 2]],
                pitchLists: [
                    [9, 4, 1],
                    [6, 9, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-6, 1], [-5, 0]],
                pitchLists: [
                    [4, 9, 1, 6],
                    [1, 11, 8, 4],
                    [8, 9, 4, 1],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 43, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 53, placement: [[-1, -2], [0, -3]] },
        ],
        handList: [19, 59, 49],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [4, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [9, 5, 1, 4],
                    [1, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [10, 7, 2],
                    [4, 10, 1, 7],
                    [1, 9, 5, 10],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 36, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[2, 2], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 16, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [8, 4, 1],
                    [8, 11, 5],
                    [11, 2, 6],
                ],
                points: 9,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 18, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 20, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 39, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 62, placement: [[2, 0], [3, -1]] },
        ],
        handList: [9, 41, 50],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [4, 0, 8],
                    [5, 4, 0, 9],
                    [1, 4, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [4, 1, 9],
                    [1, 7, 4],
                    [7, 4, 0, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 50,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [5, 4, 1, 9],
                    [1, 7, 4, 10],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[-4, 1], [-3, 1]] },
            { dominoIndex: 26, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 20, placement: [[-3, 0], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[-2, 1], [-3, 2]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 34, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 38, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 8, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [9, 3, 0],
                    [9, 0, 3],
                    [0, 8, 3],
                    [9, 3, 0, 6],
                ],
                points: 13,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 14, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 43, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 55, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 20, placement: [[-2, 5], [-1, 4]] },
            { dominoIndex: 46, placement: [[-2, 6], [-3, 6]] },
        ],
        handList: [25, 15, 8],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [2, 3, 10, 6],
                    [2, 6, 1, 10],
                    [5, 11, 2],
                    [3, 6, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 15,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [1, 4, 10],
                    [3, 6, 9, 1],
                    [5, 9, 1, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[-5, 5], [-4, 4]],
                pitchLists: [
                    [5, 8, 0],
                    [8, 1, 4, 10],
                ],
                points: 7,
            },
        ],
        points: 34,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 18, placement: [[3, 0], [3, 1]] },
        ],
        handList: [15, 45, 9],
        moves: [
            {
                dominoIndex: 15,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [1, 5, 10],
                    [5, 1, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 45,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [11, 4, 7],
                    [11, 5, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [5, 0, 9],
                    [11, 4, 7, 0],
                    [1, 5, 10, 9],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 35, placement: [[1, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[1, -1], [2, -1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 59, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [4, 10, 1],
                    [7, 10, 3],
                    [1, 6, 10],
                ],
                points: 9,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 27, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 55, placement: [[1, 3], [0, 3]] },
            { dominoIndex: 3, placement: [[2, 2], [1, 2]] },
        ],
        handList: [41, 45, 18],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [4, 7, 0],
                    [4, 11, 8, 2],
                    [6, 2, 11, 7],
                    [7, 3, 10],
                ],
                points: 14,
            },
            {
                dominoIndex: 45,
                placement: [[3, 2], [2, 3]],
                pitchLists: [
                    [8, 3, 0, 4],
                    [2, 10, 6, 11],
                    [4, 7, 0, 11],
                ],
                points: 12,
            },
            {
                dominoIndex: 18,
                placement: [[0, 5], [1, 4]],
                pitchLists: [
                    [4, 11, 8, 1],
                    [11, 3, 6, 8],
                ],
                points: 8,
            },
        ],
        points: 36,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 7, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 20, placement: [[0, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 42, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 4, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 51, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [5, 1, 8],
                    [5, 8, 0],
                    [8, 11, 5],
                    [1, 8, 4],
                ],
                points: 12,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 17, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 30, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 51, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 15, placement: [[2, 0], [3, -1]] },
        ],
        handList: [63, 18, 41],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, 0], [3, 1]],
                pitchLists: [
                    [4, 10, 1, 8],
                    [5, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[3, -2], [4, -2]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [8, 5, 1, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [4, 1, 8],
                    [4, 7, 1],
                    [1, 7, 10, 5],
                ],
                points: 10,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[-3, 3], [-2, 3]] },
        ],
        handList: [29, 17, 45],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [5, 2, 10],
                    [3, 7, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 17,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [3, 7, 10, 1],
                    [5, 2, 10, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 45,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [8, 2, 11, 4],
                    [4, 1, 7],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 18, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 43, placement: [[0, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, 0], [1, -1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 59, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 4, placement: [[2, -1], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [10, 3, 7],
                    [3, 0, 6],
                    [3, 7, 10],
                    [7, 0, 3, 9],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 48, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 33, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 15, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [4, 55, 36],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [6, 10, 1],
                    [10, 5, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 36,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [6, 9, 3],
                    [9, 10, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [4, 6, 10, 1],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 6, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 14, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 43, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 26, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 0], [0, -1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 23, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 33, placement: [[-2, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [6, 9, 2],
                    [6, 1, 10, 4],
                    [6, 10, 3],
                    [9, 1, 6],
                ],
                points: 13,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 19, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 17, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 25, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 34, placement: [[0, 3], [1, 3]] },
        ],
        handList: [59, 54, 14],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [6, 9, 1],
                    [9, 6, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[-5, 3], [-4, 2]],
                pitchLists: [
                    [9, 4, 1],
                    [4, 6, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [7, 10, 2, 4],
                    [7, 9, 4, 1],
                    [10, 5, 1],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[-3, -1], [-3, 0]] },
        ],
        handList: [3, 25, 54],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-4, 2], [-3, 1]],
                pitchLists: [
                    [6, 3, 0],
                    [0, 9, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [0, 6, 9],
                    [0, 9, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [11, 6, 2],
                    [2, 6, 9],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 54, placement: [[0, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 43, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 3, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 35, placement: [[2, 1], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [6, 0, 8, 3],
                    [6, 9, 0],
                    [6, 9, 0],
                ],
                points: 10,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 66, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 29, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 54, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 50, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [55, 34, 16],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [9, 1, 6],
                    [6, 10, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [7, 3, 11],
                    [3, 10, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [10, 2, 6],
                    [10, 6, 2],
                    [9, 6, 2, 10],
                    [7, 3, 11, 10],
                ],
                points: 14,
            },
        ],
        points: 29,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 33, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 56, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 59, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 52, placement: [[-1, 1], [0, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 44, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 17, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 4, placement: [[-1, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [6, 11, 7, 3],
                    [7, 1, 10, 3],
                    [4, 7, 10],
                    [4, 7, 0],
                ],
                points: 14,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 56, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 17, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 44, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 12, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 60, placement: [[1, 2], [2, 1]] },
            { dominoIndex: 47, placement: [[3, 0], [2, 0]] },
        ],
        handList: [22, 55, 8],
        moves: [
            {
                dominoIndex: 22,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [10, 7, 2, 3],
                    [7, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[2, 3], [1, 3]],
                pitchLists: [
                    [1, 2, 10, 6],
                    [7, 11, 2, 6],
                    [4, 7, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[1, 4], [0, 5]],
                pitchLists: [
                    [4, 7, 10, 0],
                    [3, 6, 0, 8],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
}
