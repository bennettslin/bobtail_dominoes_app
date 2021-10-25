import { addSafeDominoToBoardMatrix, getBoardMatrix } from '.'
import { MOCK_BOARD } from '../../../../../__mocks__/board'

describe('getBoardMatrix', () => {
    it('returns empty matrix for undefined', () => {
        expect(getBoardMatrix()).toStrictEqual({})
    })

    it('returns empty matrix for empty board', () => {
        expect(getBoardMatrix([])).toStrictEqual({})
    })

    it('returns correct matrix for board', () => {
        expect(getBoardMatrix(MOCK_BOARD)).toStrictEqual({
            '-2': {
                1: 0,
                2: 9,
                3: 5,
            },
            '-1': {
                0: 7,
                1: 5,
            },
            0: {
                '-1': 3,
                0: 0,
                1: 9,
                2: 6,
            },
            1: {
                0: 4,
                1: 2,
            },
            2: { 0: 11 },
        })
    })
})

describe('addSafeDominoToBoardMatrix', () => {
    it('returns null if not safe addition', () => {
        expect(addSafeDominoToBoardMatrix({
            dominoIndex: 60,
            placement: [[0, 0], [0, 1]],
            board: [MOCK_BOARD[0]],
        })).toBeNull()
    })

    it('returns matrix with domino added if safe addition', () => {
        expect(addSafeDominoToBoardMatrix({
            dominoIndex: 60,
            placement: [[0, 1], [-1, 2]],
            board: [MOCK_BOARD[0]],
        })).toStrictEqual({
            '-1': { 2: 11 },
            0: {
                0: 0,
                1: 7,
            },
            1: { 0: 4 },
        })
    })
})
