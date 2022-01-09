import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 33, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 30, placement: [[-3, 3], [-3, 2]] },
            { dominoIndex: 20, placement: [[-4, 1], [-3, 0]] },
        ],
        handList: [16, 29, 8],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [10, 1, 6, 4],
                    [6, 1, 9],
                    [6, 10, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [2, 10, 6, 3],
                    [2, 6, 10, 1],
                    [6, 10, 3],
                    [10, 1, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 8,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [6, 10, 3, 0],
                    [8, 0, 4, 3],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 7, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 30, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 38, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 38, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 43, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 7, placement: [[-2, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [4, 7, 2, 10],
                    [11, 8, 4, 0],
                    [0, 6, 3, 8],
                ],
                points: 12,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 23, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 60, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 3, placement: [[-2, 5], [-2, 4]] },
            { dominoIndex: 66, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 8, placement: [[0, 4], [-1, 4]] },
            { dominoIndex: 49, placement: [[-1, 5], [0, 5]] },
        ],
        handList: [16, 19, 41],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 5], [1, 4]],
                pitchLists: [
                    [0, 5, 9, 1],
                    [3, 8, 0, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[2, 3], [1, 3]],
                pitchLists: [
                    [1, 6, 9],
                    [9, 6, 1],
                    [9, 0, 5],
                ],
                points: 9,
            },
            {
                dominoIndex: 41,
                placement: [[2, 2], [2, 1]],
                pitchLists: [
                    [7, 4, 1],
                    [4, 9, 0, 5],
                    [10, 4, 7],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 19, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 54, placement: [[-3, 1], [-3, 2]] },
        ],
        handList: [30, 3, 55],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [6, 2, 11],
                    [6, 2, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [0, 6, 2, 9],
                    [3, 6, 11],
                    [3, 9, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [6, 3, 0],
                    [6, 9, 2],
                    [10, 6, 1],
                    [10, 3, 6, 11],
                ],
                points: 13,
            },
        ],
        points: 31,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 41, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 3, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 21, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 48, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 25, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [5, 2, 9],
                    [11, 6, 2],
                    [1, 6, 9],
                ],
                points: 9,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 15, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 44, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 8, placement: [[-5, 3], [-4, 3]] },
        ],
        handList: [26, 41, 50],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [0, 8, 5, 2],
                    [4, 11, 2, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 50,
                placement: [[-4, 5], [-3, 4]],
                pitchLists: [
                    [2, 10, 5],
                    [1, 5, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [1, 11, 7, 4],
                    [10, 2, 7],
                    [7, 2, 10, 5],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 10, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 41, placement: [[-2, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 1], [0, 2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 51, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 38, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 7, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 48, placement: [[1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [8, 4, 0],
                    [11, 4, 7],
                    [8, 4, 11],
                    [5, 8, 0],
                ],
                points: 12,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 42, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 7, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 19, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 9, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 51, placement: [[-3, 4], [-4, 4]] },
        ],
        handList: [48, 12, 50],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [5, 2, 9],
                    [5, 8, 0],
                    [8, 4, 1, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 12,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [1, 5, 2, 9],
                    [2, 5, 8, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 50,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [5, 10, 1],
                    [10, 2, 7],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 19, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[2, -3], [2, -2]] },
        ],
        handList: [4, 8, 38],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [0, 4, 9, 8],
                    [4, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [0, 4, 7],
                    [0, 8, 4],
                    [0, 8, 4],
                ],
                points: 9,
            },
            {
                dominoIndex: 38,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [11, 3, 6],
                    [0, 8, 4, 3],
                    [11, 4, 1, 7],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 28, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 56, placement: [[-1, -1], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[0, -2], [0, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 9, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 57, placement: [[-1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [3, 6, 0],
                    [3, 11, 4, 8],
                    [6, 9, 1],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 7, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 44, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 20, placement: [[-2, 0], [-3, 0]] },
            { dominoIndex: 17, placement: [[-3, 2], [-3, 1]] },
        ],
        handList: [37, 36, 55],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [10, 7, 1, 3],
                    [6, 0, 10, 3],
                    [1, 10, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 36,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [1, 10, 7, 3],
                    [6, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [0, 9, 6],
                    [10, 6, 3],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 18, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 35, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 50, placement: [[-3, 2], [-3, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 0], [0, -1]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 25, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 15, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 50, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [4, 1, 10],
                    [1, 5, 9],
                    [1, 9, 4],
                    [4, 9, 1, 6],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 55, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 7, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 30, placement: [[-1, -1], [0, -2]] },
        ],
        handList: [19, 41, 8],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [9, 1, 6, 5],
                    [5, 1, 10],
                    [11, 2, 5, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 41,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [4, 10, 1],
                    [10, 1, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [1, 5, 8, 0],
                    [4, 10, 1, 8],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 20, placement: [[3, -2], [4, -2]] },
        ],
        handList: [5, 26, 37],
        moves: [
            {
                dominoIndex: 37,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [1, 9, 6, 3],
                ],
                points: 4,
            },
            {
                dominoIndex: 26,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [6, 10, 2],
                    [11, 3, 7],
                    [2, 10, 7],
                ],
                points: 9,
            },
            {
                dominoIndex: 5,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [0, 11, 3, 7],
                    [5, 0, 8],
                    [5, 6, 1, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 42, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 3, placement: [[1, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [0, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 52, placement: [[1, 2], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [0, 4, 7],
                    [9, 3, 0],
                    [3, 0, 6],
                ],
                points: 9,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 9, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 7, placement: [[-2, 1], [-3, 1]] },
        ],
        handList: [34, 8, 45],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [3, 7, 11],
                    [7, 0, 3],
                    [4, 0, 7],
                    [11, 3, 7],
                ],
                points: 12,
            },
            {
                dominoIndex: 8,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [7, 3, 0],
                    [11, 3, 7, 0],
                    [4, 0, 7, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[-5, 3], [-4, 3]],
                pitchLists: [
                    [4, 11, 0, 8],
                    [7, 0, 3, 11],
                ],
                points: 8,
            },
        ],
        points: 33,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 17, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 23, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 37, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 59, placement: [[-2, 2], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[-1, 1], [0, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 4, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 41, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 9, placement: [[3, 1], [3, 0]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [9, 0, 4],
                    [3, 0, 7],
                    [8, 0, 4, 1],
                    [8, 4, 9, 0],
                ],
                points: 14,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 6, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 64, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 42, placement: [[-2, 4], [-2, 3]] },
        ],
        handList: [38, 48, 4],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [11, 3, 8],
                    [9, 6, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-5, 3], [-4, 2]],
                pitchLists: [
                    [5, 11, 3, 8],
                    [8, 6, 0, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 4,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [0, 6, 3],
                    [0, 8, 5],
                    [4, 8, 11],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 59, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 27, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 46, placement: [[-3, 0], [-3, -1]] },
        ],
        handList: [15, 56, 3],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [8, 5, 1],
                    [5, 10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [6, 1, 10],
                    [8, 5, 1, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [8, 7, 3, 0],
                    [6, 1, 10, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 63, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, -1], [0, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 46, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [2, 10, 6, 5],
                    [10, 5, 8, 2],
                ],
                points: 8,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 26, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 54, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 41, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [55, 38, 32],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [3, 11, 7],
                    [11, 3, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [3, 11, 7, 6],
                    [6, 10, 9, 2],
                    [2, 7, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 32,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [3, 2, 7, 10],
                    [5, 2, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 45, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 35, placement: [[-1, 3], [-2, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 2], [0, 3]] },
        ],
    },
}
