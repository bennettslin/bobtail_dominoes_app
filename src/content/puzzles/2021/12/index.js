import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 52, placement: [[2, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [6, 3, 10],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 34, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 26, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 4, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 63, placement: [[2, -3], [1, -3]] },
        ],
        handList: [45, 43, 33],
        moves: [
            {
                dominoIndex: 45,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [3, 11, 8, 4],
                    [4, 11, 7, 0],
                    [8, 11, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 43,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [0, 9, 4],
                    [8, 11, 2, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [11, 6, 3],
                    [6, 2, 9],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 36, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 7, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[2, -5], [2, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, -2], [0, -1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 48, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 27, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 51, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 36, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 26, placement: [[0, 1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [5, 0, 8, 2],
                    [9, 0, 5],
                    [3, 0, 8],
                    [9, 5, 2],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 6, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 40, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 37, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
        ],
        handList: [54, 3, 15],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [9, 6, 0],
                    [6, 9, 2],
                    [9, 3, 6, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[3, -3], [4, -3]],
                pitchLists: [
                    [9, 1, 5],
                    [1, 6, 9, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [0, 9, 1, 5],
                    [0, 3, 9, 6],
                    [3, 9, 6, 0],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 14, placement: [[0, -1], [1, -1]] },
        ],
        handList: [27, 49, 6],
        moves: [
            {
                dominoIndex: 49,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 6, 5, 9],
                ],
                points: 4,
            },
            {
                dominoIndex: 6,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [0, 9, 5],
                    [9, 5, 0],
                    [0, 9, 6],
                ],
                points: 9,
            },
            {
                dominoIndex: 27,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [6, 9, 2],
                    [2, 0, 9, 6],
                    [5, 0, 8],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 15, placement: [[1, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[2, 0], [1, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 20, placement: [[1, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [6, 9, 2],
                    [1, 10, 5, 6],
                    [2, 5, 11, 9],
                ],
                points: 11,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[2, -1], [1, -1]] },
        ],
        handList: [24, 54, 35],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [6, 9, 0],
                ],
                points: 3,
            },
            {
                dominoIndex: 24,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [6, 9, 0, 2],
                    [2, 11, 6],
                    [5, 2, 8, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 35,
                placement: [[2, -4], [1, -3]],
                pitchLists: [
                    [3, 8, 0],
                    [8, 2, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 7, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 50, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 16, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 48, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 12, placement: [[2, -2], [2, -1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 2, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 56, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 61, placement: [[0, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [8, 11, 2, 6],
                    [3, 10, 6],
                    [6, 3, 0, 10],
                    [10, 2, 6, 9],
                ],
                points: 15,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 8, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 34, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 54, placement: [[-1, -2], [0, -3]] },
            { dominoIndex: 56, placement: [[2, -4], [2, -5]] },
        ],
        handList: [29, 33, 38],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [2, 9, 0, 6],
                    [6, 10, 2],
                    [6, 3, 0, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [6, 3, 10],
                    [9, 6, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [6, 11, 3],
                    [9, 6, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 60, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 19, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 48, placement: [[-1, -1], [-2, 0]] },
        ],
        handList: [3, 49, 41],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -3], [1, -3]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 11, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [0, 5, 9],
                    [9, 5, 1, 0],
                    [7, 3, 0, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 41,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [0, 7, 4],
                    [0, 5, 9, 4],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 1], [0, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 54, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 20, placement: [[3, -2], [4, -3]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[4, -1], [4, -2]],
                pitchLists: [
                    [0, 6, 9, 2],
                    [10, 5, 2],
                    [8, 1, 5],
                ],
                points: 10,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 19, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 50, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 59, placement: [[0, -1], [1, -1]] },
        ],
        handList: [41, 20, 44],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [4, 7, 10, 1],
                    [10, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [4, 7, 10],
                    [7, 1, 4],
                    [10, 4, 1, 7],
                    [10, 2, 7],
                ],
                points: 13,
            },
            {
                dominoIndex: 20,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [1, 4, 7, 10],
                    [7, 1, 4, 10],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 16, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 33, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 50, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 41, placement: [[4, -2], [4, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[2, -1], [2, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 1, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 25, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 9, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 29, placement: [[-3, 2], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [9, 5, 2, 0],
                    [2, 10, 3, 6],
                    [5, 6, 10, 2],
                ],
                points: 12,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 24, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 7, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 48, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 45, placement: [[2, -2], [3, -2]] },
        ],
        handList: [27, 39, 19],
        moves: [
            {
                dominoIndex: 27,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [5, 11, 8, 2],
                    [7, 11, 2],
                    [0, 4, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 39,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [7, 11, 2, 4],
                    [0, 4, 8, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[4, -2], [5, -3]],
                pitchLists: [
                    [8, 4, 11, 1],
                    [9, 1, 2, 5],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 21, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 44, placement: [[2, 0], [2, 1]] },
        ],
        handList: [59, 16, 4],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [7, 4, 10],
                    [10, 7, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 16,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [6, 1, 10],
                    [10, 7, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[2, 2], [3, 1]],
                pitchLists: [
                    [7, 4, 10, 0],
                    [6, 1, 10, 4],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 10, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 25, placement: [[3, -4], [3, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 6, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [0, 2, 5, 8],
                    [9, 0, 6],
                    [9, 3, 0, 6],
                ],
                points: 11,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 33, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 36, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 15, placement: [[2, -3], [3, -4]] },
            { dominoIndex: 49, placement: [[2, -1], [2, 0]] },
        ],
        handList: [54, 19, 12],
        moves: [
            {
                dominoIndex: 54,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [1, 3, 9, 6],
                    [9, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[5, -4], [5, -5]],
                pitchLists: [
                    [9, 1, 6],
                    [1, 9, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 12,
                placement: [[4, -1], [5, -2]],
                pitchLists: [
                    [11, 5, 8, 1],
                    [9, 1, 6, 2],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 44, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 17, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 42, placement: [[1, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, -2], [0, -1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 57, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 8, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 43, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [7, 8, 4, 0],
                    [0, 8, 4],
                    [0, 5, 9],
                    [4, 5, 0, 9],
                ],
                points: 14,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 38, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 60, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 30, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 48, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 37, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [33, 6, 49],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [2, 10, 5],
                    [1, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [9, 6, 3],
                    [2, 10, 5, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [0, 9, 6, 3],
                    [7, 10, 3, 0],
                    [1, 5, 9, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 28, placement: [[-4, 1], [-5, 2]] },
            { dominoIndex: 14, placement: [[-2, -1], [-2, -2]] },
        ],
        handList: [48, 50, 18],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [2, 5, 8],
                    [4, 1, 10, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [1, 10, 5],
                    [2, 5, 8, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [1, 8, 10, 5],
                    [8, 1, 10, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 32, placement: [[-3, 2], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[-2, 2], [-2, 3]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [1, 0, 5, 8],
                    [10, 1, 4],
                    [4, 0, 7],
                ],
                points: 10,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 12, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 55, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [21, 25, 19],
        moves: [
            {
                dominoIndex: 21,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [1, 10, 4],
                    [1, 6, 10],
                    [11, 10, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 25,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [2, 11, 5],
                    [2, 1, 6, 10],
                    [6, 1, 10, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 19,
                placement: [[-3, -1], [-3, 0]],
                pitchLists: [
                    [1, 9, 6],
                    [9, 2, 11, 5],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 10, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 41, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 39, placement: [[-4, 2], [-4, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[-3, 2], [-2, 2]] },
        ],
    },
}
