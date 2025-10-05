import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 1, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 42, placement: [[2, 1], [1, 2]] },
        ],
        handList: [15, 30],
        moves: [
            {
                dominoIndex: 15,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [9, 5, 1],
                    [1, 0, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [2, 9, 5, 1],
                    [11, 2, 5],
                    [6, 2, 9],
                ],
                points: 10,
            },
        ],
        points: 17,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 43, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 26, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 38, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 24, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 28, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [1, 9, 6, 5],
                    [2, 5, 11, 9],
                ],
                points: 8,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 35, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 38, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [10, 24, 54],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [3, 9, 6],
                    [6, 0, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 10,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [3, 9, 6, 0],
                    [6, 9, 0],
                    [3, 6, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 24,
                placement: [[3, 2], [4, 2]],
                pitchLists: [
                    [10, 2, 5],
                    [6, 9, 0, 2],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 28, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 54, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 10, placement: [[2, -4], [1, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 43, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 19, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 6, placement: [[1, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [9, 6, 2],
                    [2, 9, 5, 1],
                    [4, 0, 9],
                    [1, 6, 9, 2],
                ],
                points: 14,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 16, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 35, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 20, placement: [[3, 0], [3, 1]] },
        ],
        handList: [41, 4, 21],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [1, 8, 4],
                    [1, 4, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [7, 0, 4],
                    [1, 8, 4, 0],
                    [7, 1, 10, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 21,
                placement: [[4, 1], [4, 2]],
                pitchLists: [
                    [4, 10, 1],
                    [7, 0, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 4, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 49, placement: [[1, 1], [2, 0]] },
        ],
        handList: [18, 8, 33],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [8, 1, 5],
                    [9, 5, 0, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [8, 1, 5, 0],
                    [5, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[2, 2], [3, 1]],
                pitchLists: [
                    [0, 8, 3],
                    [6, 3, 0],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 20, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 48, placement: [[-4, 3], [-5, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[-2, 1], [-3, 2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 45, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 15, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 19, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [4, 9, 1, 5],
                    [4, 1, 8],
                    [8, 1, 5],
                    [8, 4, 11],
                ],
                points: 13,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 28, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 54, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 3, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 33, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [56, 63, 9],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [8, 11, 2],
                    [11, 6, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [8, 11, 2, 6],
                    [11, 6, 3],
                    [6, 9, 3],
                    [11, 2, 6],
                ],
                points: 13,
            },
            {
                dominoIndex: 9,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [9, 11, 2, 6],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 25, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 43, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 16, placement: [[0, 3], [1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 41, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 60, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 9, placement: [[-1, 4], [-2, 5]] },
            { dominoIndex: 40, placement: [[-3, 5], [-3, 6]] },
        ],
        moves: [
            {
                dominoIndex: 22,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [8, 4, 11, 2],
                    [2, 0, 9, 6],
                    [0, 7, 3],
                    [3, 11, 7, 4],
                ],
                points: 15,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 7, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 45, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 8, placement: [[3, 2], [3, 1]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 25, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 60, placement: [[2, 3], [2, 4]] },
            { dominoIndex: 3, placement: [[4, 0], [4, 1]] },
        ],
        handList: [43, 48, 4],
        moves: [
            {
                dominoIndex: 43,
                placement: [[6, 0], [5, 0]],
                pitchLists: [
                    [0, 9, 4],
                    [9, 3, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[3, 0], [4, -1]],
                pitchLists: [
                    [5, 0, 9, 4],
                    [5, 8, 0],
                    [8, 0, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 4,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [0, 4, 8],
                    [0, 3, 6],
                    [4, 5, 8, 0],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 46, placement: [[2, -3], [3, -3]] },
        ],
        handList: [42, 20, 17],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -4], [2, -4]],
                pitchLists: [
                    [8, 5, 0],
                ],
                points: 3,
            },
            {
                dominoIndex: 17,
                placement: [[2, -5], [3, -6]],
                pitchLists: [
                    [1, 8, 5, 0],
                    [7, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [10, 1, 5, 6],
                    [7, 1, 4, 10],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 1], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 54, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 16, placement: [[-2, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [0, 3, 9],
                    [0, 10, 3, 6],
                    [6, 10, 3],
                    [3, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 24, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 8, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 35, placement: [[1, 1], [2, 1]] },
        ],
        handList: [56, 64, 27],
        moves: [
            {
                dominoIndex: 56,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [0, 3, 8, 6],
                    [6, 11, 2],
                    [8, 11, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 64,
                placement: [[3, 0], [4, 0]],
                pitchLists: [
                    [10, 6, 11, 2],
                ],
                points: 4,
            },
            {
                dominoIndex: 27,
                placement: [[3, 2], [4, 2]],
                pitchLists: [
                    [11, 2, 8],
                    [9, 6, 2],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 66, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 35, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 52, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 6, placement: [[2, -3], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[-1, -1], [0, -1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 25, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 52, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 19, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 24, placement: [[1, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, -3], [1, -4]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [9, 4, 1, 7],
                    [9, 5, 2, 11],
                ],
                points: 12,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 48, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 14, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 29, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 52, placement: [[-2, 4], [-3, 5]] },
        ],
        handList: [27, 15, 38],
        moves: [
            {
                dominoIndex: 27,
                placement: [[-1, 4], [-2, 5]],
                pitchLists: [
                    [10, 6, 2],
                    [11, 2, 6, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [10, 6, 2, 1],
                    [8, 5, 1],
                    [5, 2, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 38,
                placement: [[-1, 5], [0, 5]],
                pitchLists: [
                    [7, 8, 3, 11],
                    [8, 5, 1, 11],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 18, placement: [[-3, 4], [-3, 5]] },
        ],
        handList: [54, 30, 24],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [0, 9, 6],
                ],
                points: 3,
            },
            {
                dominoIndex: 24,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [5, 9, 2],
                    [0, 9, 6, 2],
                    [0, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[-1, 5], [-2, 5]],
                pitchLists: [
                    [8, 11, 2],
                    [0, 9, 5, 2],
                    [2, 5, 11],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 44, placement: [[2, -3], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[1, -1], [2, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 35, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 7, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 9, 0],
                    [0, 3, 9],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 18, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 14, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 56, placement: [[2, 0], [3, -1]] },
        ],
        handList: [24, 9, 2],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [8, 10, 2, 5],
                    [11, 6, 2, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 9,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [9, 5, 0],
                    [4, 6, 9, 0],
                    [6, 2, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 2,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [0, 6, 2, 9],
                    [8, 3, 0],
                    [2, 3, 10, 6],
                ],
                points: 11,
            },
        ],
        points: 31,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 32, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 12, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[1, 0], [0, 1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 27, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 9, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 43, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 8, placement: [[-2, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [7, 4, 0],
                    [4, 9, 6, 0],
                    [4, 8, 0],
                    [7, 8, 3, 11],
                ],
                points: 14,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 66, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 24, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 55, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 20, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 33, placement: [[-3, 0], [-3, 1]] },
        ],
        handList: [36, 14, 41],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [9, 3, 6],
                    [2, 7, 10, 3],
                    [3, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [9, 3, 6, 1],
                    [9, 7, 4, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [4, 7, 1],
                    [10, 4, 7],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 49, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
        ],
        handList: [48, 54, 34],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, -2], [0, -2]],
                pitchLists: [
                    [5, 8, 1],
                    [8, 5, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [1, 6, 9],
                    [9, 6, 2],
                    [5, 8, 1, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [3, 1, 6, 9],
                    [7, 1, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 6, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
        ],
    },
}
