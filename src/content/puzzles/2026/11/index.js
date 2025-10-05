import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 47, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 34, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 24, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 42, placement: [[-2, 1], [-3, 2]] },
        ],
        handList: [6, 29, 54],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [3, 6, 0],
                    [7, 2, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [0, 2, 6, 9],
                    [11, 6, 3],
                    [9, 3, 6, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 29,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [6, 10, 2],
                    [11, 6, 3, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[4, -1], [3, 0]] },
        ],
        handList: [5, 27, 43],
        moves: [
            {
                dominoIndex: 27,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [8, 11, 2],
                ],
                points: 3,
            },
            {
                dominoIndex: 43,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [8, 11, 2, 4],
                    [6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [0, 5, 8],
                    [0, 6, 2, 9],
                    [0, 3, 9],
                    [5, 11, 8],
                ],
                points: 13,
            },
        ],
        points: 25,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 3, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 58, placement: [[0, 0], [0, -1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 35, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 3, placement: [[2, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [4, 0, 3, 8],
                    [11, 4, 3, 7],
                ],
                points: 8,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 34, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 11, placement: [[4, -3], [4, -2]] },
        ],
        handList: [59, 45, 17],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [7, 3, 0],
                    [10, 7, 2, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [4, 2, 7, 11],
                    [11, 4, 7],
                    [7, 4, 0],
                    [11, 7, 3, 0],
                ],
                points: 14,
            },
            {
                dominoIndex: 17,
                placement: [[1, -4], [0, -4]],
                pitchLists: [
                    [7, 1, 10],
                    [1, 11, 4, 7],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 52, placement: [[1, 3], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[1, 0], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 51, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 8, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 35, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [5, 2, 11],
                    [10, 11, 2, 6],
                    [5, 8, 2, 11],
                    [8, 3, 11, 6],
                ],
                points: 15,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 43, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 9, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 18, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 8, placement: [[2, -4], [2, -5]] },
            { dominoIndex: 5, placement: [[1, -5], [2, -6]] },
        ],
        handList: [4, 34, 27],
        moves: [
            {
                dominoIndex: 4,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [9, 8, 4, 0],
                    [5, 8, 0, 4],
                    [4, 1, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [0, 8, 3],
                    [3, 7, 0],
                    [3, 0, 8, 5],
                    [4, 0, 7],
                    [7, 4, 1, 10],
                ],
                points: 17,
            },
            {
                dominoIndex: 27,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [8, 2, 11],
                    [3, 7, 0, 8],
                ],
                points: 7,
            },
        ],
        points: 37,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[1, 2], [1, 1]] },
        ],
        handList: [29, 25],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [5, 10, 2],
                    [6, 2, 10],
                    [3, 7, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 25,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [5, 10, 2, 6],
                    [6, 10, 3],
                ],
                points: 11,
            },
        ],
        points: 20,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 3, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 54, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 22, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 51, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[0, 2], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [5, 11, 7, 2],
                    [7, 3, 8, 11],
                ],
                points: 8,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 19, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 59, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 34, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 37, placement: [[3, 0], [2, 1]] },
        ],
        handList: [60, 29, 51],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [11, 7, 2, 4],
                    [11, 3, 7, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [2, 7, 10],
                    [10, 7, 3],
                    [10, 2, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 51,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [5, 2, 11],
                    [5, 10, 2, 7],
                    [11, 10, 7, 3],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 16, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 37, placement: [[3, -1], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 13, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 7, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 36, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 54, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 3, placement: [[0, -3], [-1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [0, 6, 3],
                    [0, 9, 6],
                    [3, 6, 0],
                    [0, 6, 9],
                ],
                points: 12,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 29, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 33, placement: [[3, 2], [2, 2]] },
            { dominoIndex: 24, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 63, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 51, placement: [[4, 1], [3, 1]] },
        ],
        handList: [34, 50, 8],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [11, 6, 3],
                    [11, 5, 2, 7],
                    [6, 2, 10, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 50,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [2, 10, 5],
                    [10, 7, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [0, 10, 7, 3],
                    [8, 0, 5],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 51, placement: [[3, 1], [3, 2]] },
        ],
        handList: [29, 48, 28],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, 2], [2, 3]],
                pitchLists: [
                    [7, 2, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 28,
                placement: [[3, 0], [4, 0]],
                pitchLists: [
                    [2, 5, 11],
                    [9, 5, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 48,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [5, 2, 9],
                    [5, 7, 2, 10],
                    [8, 5, 2],
                    [8, 2, 5, 11],
                ],
                points: 14,
            },
        ],
        points: 25,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 4, placement: [[-2, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 1], [0, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 6, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 9, placement: [[2, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [6, 9, 1],
                    [9, 4, 1],
                    [0, 6, 3, 9],
                    [0, 4, 9],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 7, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 49, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [10, 46, 9],
        moves: [
            {
                dominoIndex: 10,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [9, 6, 0],
                    [1, 6, 10],
                    [9, 5, 2, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 46,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [5, 1, 6, 10],
                    [6, 9, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [3, 9, 0],
                    [9, 6, 1],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 63, placement: [[0, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[1, 0], [0, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 37, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 1, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 38, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 19, placement: [[-1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [3, 9, 6],
                    [3, 6, 10],
                    [10, 6, 2, 9],
                    [11, 6, 2, 10],
                ],
                points: 14,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 19, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 63, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 50, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 16, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 12, placement: [[1, -2], [1, -3]] },
        ],
        handList: [46, 26, 29],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [2, 7, 11],
                    [1, 10, 5, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 46,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [2, 7, 11, 5],
                    [10, 2, 5, 6],
                    [1, 6, 9, 5],
                ],
                points: 12,
            },
            {
                dominoIndex: 29,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [6, 10, 2],
                    [6, 1, 9, 2],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 32, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 16, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 29, placement: [[-1, 0], [-2, 0]] },
        ],
        handList: [49, 9, 24],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [9, 5, 2],
                    [1, 5, 10],
                    [9, 1, 6],
                ],
                points: 9,
            },
            {
                dominoIndex: 24,
                placement: [[-2, -1], [-2, -2]],
                pitchLists: [
                    [2, 5, 10],
                    [5, 2, 10],
                    [5, 9, 1, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 9,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [9, 0, 3, 5],
                    [9, 5, 2, 0],
                    [5, 2, 10, 9],
                    [6, 10, 2, 9],
                ],
                points: 16,
            },
        ],
        points: 37,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 58, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[-1, 3], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [7, 3, 11, 0],
                    [3, 5, 11, 8],
                ],
                points: 8,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 20, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 7, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 17, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 43, placement: [[1, 2], [2, 2]] },
        ],
        handList: [37, 33, 22],
        moves: [
            {
                dominoIndex: 37,
                placement: [[3, 1], [4, 1]],
                pitchLists: [
                    [7, 3, 10],
                    [1, 7, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[5, 0], [4, 0]],
                pitchLists: [
                    [0, 10, 6, 3],
                    [1, 6, 10],
                    [6, 3, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 22,
                placement: [[5, 1], [4, 2]],
                pitchLists: [
                    [7, 3, 10, 2],
                    [1, 6, 10, 3],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 16, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 43, placement: [[0, 3], [0, 4]] },
            { dominoIndex: 14, placement: [[-3, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 62, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 32, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 30, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 44, placement: [[-1, -2], [0, -3]] },
            { dominoIndex: 15, placement: [[1, -4], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [8, 2, 10, 5],
                    [4, 8, 11, 1],
                    [5, 11, 8],
                    [8, 2, 11],
                ],
                points: 14,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 26, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 40, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 19, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 38, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 41, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 6, placement: [[1, 2], [2, 1]] },
        ],
        handList: [50, 36, 16],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [5, 1, 9, 6],
                    [2, 5, 10],
                    [10, 1, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 36,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [3, 10, 1, 7],
                    [2, 5, 10, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 16,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [6, 1, 5, 10],
                    [6, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 58, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 43, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [37, 5, 38],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [6, 10, 3],
                    [10, 1, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [11, 3, 7],
                    [11, 6, 10, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [11, 3, 7, 0],
                    [5, 0, 4, 9],
                    [10, 1, 7, 5],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
}
