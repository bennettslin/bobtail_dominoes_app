import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 36, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 25, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 56, placement: [[0, -3], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[2, -3], [1, -3]],
                pitchLists: [
                    [6, 11, 2],
                    [2, 6, 10],
                    [11, 6, 3, 10],
                    [11, 2, 6],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 28, placement: [[-4, 2], [-4, 3]] },
            { dominoIndex: 55, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 16, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 44, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 29, placement: [[-2, -2], [-3, -1]] },
            { dominoIndex: 32, placement: [[-4, -1], [-4, 0]] },
        ],
        handList: [56, 25, 36],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [2, 6, 10],
                    [10, 7, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [2, 10, 6],
                    [1, 7, 4, 11],
                    [2, 6, 10, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 36,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [11, 6, 3],
                    [2, 10, 6, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 45, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 13, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [20, 59, 34],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [7, 3, 11, 6],
                    [4, 1, 7],
                    [10, 1, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [10, 1, 7, 3],
                    [11, 3, 6],
                    [7, 3, 11],
                    [4, 11, 7],
                ],
                points: 13,
            },
            {
                dominoIndex: 20,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [1, 10, 4],
                    [1, 4, 7, 11],
                    [10, 11, 3, 6],
                    [10, 4, 1, 7],
                ],
                points: 15,
            },
        ],
        points: 40,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 33, placement: [[3, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 18, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [8, 1, 4],
                    [4, 7, 10],
                    [1, 7, 4],
                ],
                points: 9,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 12, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 26, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 59, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 24, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 51, placement: [[-1, 3], [-2, 4]] },
        ],
        handList: [29, 25, 58],
        moves: [
            {
                dominoIndex: 29,
                placement: [[0, 3], [1, 3]],
                pitchLists: [
                    [5, 2, 10],
                    [8, 2, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [10, 6, 2],
                    [6, 5, 2, 10],
                    [2, 6, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 58,
                placement: [[-4, 4], [-4, 5]],
                pitchLists: [
                    [7, 2, 11],
                    [10, 6, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 62, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 56, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 37, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 28, placement: [[2, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 49, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 24, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 13, placement: [[-1, -3], [-2, -2]] },
            { dominoIndex: 43, placement: [[-4, 1], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [4, 9, 1],
                    [3, 9, 6, 1],
                    [5, 9, 1, 4],
                    [1, 9, 4],
                ],
                points: 14,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 22, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 7, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 36, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 48, placement: [[1, -4], [2, -5]] },
        ],
        handList: [5, 62, 16],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [3, 9, 5, 0],
                    [5, 8, 2],
                    [3, 8, 0, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 62,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [0, 3, 8],
                    [5, 8, 2, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [10, 6, 1],
                    [0, 3, 8, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 37, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 29, placement: [[0, -2], [0, -1]] },
        ],
        handList: [6, 63, 14],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [11, 7, 3, 10],
                ],
                points: 4,
            },
            {
                dominoIndex: 14,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [1, 4, 10],
                    [4, 8, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 6,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [6, 0, 3],
                    [8, 3, 0],
                    [6, 3, 11],
                    [1, 4, 10, 6],
                ],
                points: 13,
            },
        ],
        points: 25,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 29, placement: [[2, 2], [3, 2]] },
            { dominoIndex: 36, placement: [[-1, 4], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 46, placement: [[0, 2], [1, 2]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 32, placement: [[-2, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [11, 8, 3],
                    [8, 6, 0, 3],
                    [11, 2, 8],
                ],
                points: 10,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 19, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 26, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 20, placement: [[-2, 1], [-2, 0]] },
        ],
        handList: [50, 53, 51],
        moves: [
            {
                dominoIndex: 50,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [10, 5, 2, 7],
                    [5, 9, 1],
                    [5, 1, 10],
                    [10, 1, 5, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 53,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [6, 1, 9],
                    [5, 1, 10, 6],
                    [8, 10, 5, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[-4, 1], [-5, 2]],
                pitchLists: [
                    [5, 6, 1, 9],
                    [8, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 34,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 19, placement: [[-2, 0], [-3, 0]] },
            { dominoIndex: 54, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 7, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 23, placement: [[-1, 1], [0, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 53, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 27, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 4, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 8, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 34, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [0, 3, 7],
                    [11, 8, 4, 0],
                    [7, 4, 0],
                    [8, 3, 0, 7],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 49, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 16, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 38, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 14, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, -2]] },
        ],
        handList: [50, 24, 41],
        moves: [
            {
                dominoIndex: 50,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [2, 10, 5],
                    [1, 10, 6],
                    [4, 10, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 24,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [11, 5, 2],
                    [2, 1, 10, 6],
                    [5, 2, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [4, 11, 8],
                    [7, 11, 5, 2],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 56, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 37, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [59, 28, 15],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 10, 7],
                    [2, 3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [3, 10, 7, 2],
                    [6, 9, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [10, 1, 5],
                    [6, 9, 2, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 34, placement: [[1, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 23, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 59, placement: [[2, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [6, 11, 2],
                    [10, 3, 7, 2],
                    [11, 7, 4],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 28, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 10, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 20, placement: [[-1, 0], [-2, 0]] },
        ],
        handList: [34, 17, 33],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [7, 3, 0, 10],
                    [7, 10, 1, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 17,
                placement: [[-4, 2], [-5, 3]],
                pitchLists: [
                    [1, 0, 9, 5],
                    [10, 3, 1, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[-4, 3], [-5, 4]],
                pitchLists: [
                    [7, 3, 10],
                    [0, 3, 6],
                ],
                points: 6,
            },
        ],
        points: 24,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 29, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 51, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 60, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 46, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 5, placement: [[0, 2], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [9, 0, 3],
                    [6, 9, 3],
                    [3, 9, 0, 5],
                    [9, 0, 4],
                ],
                points: 13,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 6, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 3, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 18, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 44, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 30, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 19, placement: [[0, 4], [1, 3]] },
        ],
        handList: [49, 51, 28],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 5], [-1, 4]],
                pitchLists: [
                    [1, 2, 9, 5],
                    [9, 1, 5],
                    [3, 0, 6, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 28,
                placement: [[1, 5], [0, 5]],
                pitchLists: [
                    [5, 9, 2],
                    [6, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 51,
                placement: [[0, 6], [-1, 7]],
                pitchLists: [
                    [6, 1, 9, 5],
                    [2, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 38, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 34, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 42, placement: [[-1, 2], [-1, 1]] },
        ],
        handList: [12, 41, 8],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [7, 3, 11, 4],
                    [11, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-1, 4], [0, 4]],
                pitchLists: [
                    [4, 0, 8],
                    [8, 4, 11, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 12,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [1, 4, 0, 8],
                    [11, 4, 7, 1],
                    [2, 7, 11],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 54, placement: [[1, 2], [1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[1, 1], [2, 1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[1, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [3, 10, 6, 0],
                    [5, 2, 8, 10],
                ],
                points: 8,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 38, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 8, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 54, placement: [[1, 2], [0, 3]] },
        ],
        handList: [34, 44, 33],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [11, 3, 8],
                    [7, 3, 11, 6],
                    [0, 3, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 44,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [4, 0, 8, 3],
                    [4, 7, 11],
                    [10, 0, 3, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [6, 3, 10],
                    [3, 4, 7, 11],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 4, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 56, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[-1, 1], [0, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 56, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 7, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 4, placement: [[5, -3], [5, -2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [8, 0, 4, 7],
                    [8, 11, 4, 3],
                    [11, 0, 7, 4],
                ],
                points: 12,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 28, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 47, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 37, placement: [[-2, 5], [-1, 4]] },
            { dominoIndex: 36, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 51, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 1]] },
        ],
        handList: [29, 49, 61],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, 3], [2, 3]],
                pitchLists: [
                    [5, 7, 2, 10],
                    [6, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [5, 9, 0, 2],
                    [4, 9, 1],
                    [9, 6, 11, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 61,
                placement: [[3, 0], [3, 1]],
                pitchLists: [
                    [4, 9, 1, 8],
                    [9, 5, 2],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 51, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 9, placement: [[0, -1], [1, -1]] },
        ],
        handList: [18, 42, 38],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [8, 1, 5],
                    [9, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [4, 1, 7],
                    [0, 8, 4],
                    [8, 5, 11],
                    [9, 4, 1, 8],
                ],
                points: 13,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [3, 8, 5, 11],
                    [0, 8, 4, 3],
                    [11, 4, 1, 7],
                ],
                points: 12,
            },
        ],
        points: 33,
    },
}
