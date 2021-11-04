import { getInitialGame, registerTurn } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'
import { MOCK_POOL_LIST } from '../../../../__mocks__/pool'
import { MOCK_TURNS } from '../../../../__mocks__/turns'

const MOCK_PLAYED_TURN = {
    pool: new Set(MOCK_POOL_LIST),
    hands: [new Set([10]), new Set([15]), new Set([30, 45, 49]), new Set([50, 60])],
    moves: [
        {
            dominoIndex: 30,
            placement: [[1, 1], [2, 0]],
            pitchSets: [
                new Set([0, 5, 9, 2]),
                new Set([11, 2, 6]),
                new Set([7, 0, 4, 11]),
            ],
        },
        {
            dominoIndex: 49,
            placement: [[-2, 3], [-2, 2]],
            pitchSets: [
                new Set([0, 9, 5]),
                new Set([0, 5, 9]),
            ],
        },
    ],
    playerIndex: 2,
}

describe('getInitialGame', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates initial game', () => {
        expect(getInitialGame()).toStrictEqual({
            board: [{ dominoIndex: 9, placement: [[0, 0], [1, 0]] }],
            currentPlayerIndex: 0,
            handCount: 3,
            hands: [new Set([10, 13, 14]), new Set([15, 16, 18]), new Set([7, 19, 20]), new Set([21, 23, 24])],
            isGamePlaying: true,
            playersCount: 4,
            pool: new Set([2, 3, 4, 5, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })

    it('generates initial extended game', () => {
        expect(getInitialGame({ isExtendedGame: true })).toStrictEqual({
            board: [{ dominoIndex: 10, placement: [[0, 0], [1, 0]] }],
            currentPlayerIndex: 0,
            handCount: 3,
            hands: [new Set([8, 11, 12]), new Set([13, 14, 15]), new Set([16, 17, 7]), new Set([18, 19, 20])],
            isGamePlaying: true,
            playersCount: 4,
            pool: new Set([1, 2, 3, 4, 5, 6, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 9 }],
        })
    })

    it('generates initial game for custom players count', () => {
        expect(getInitialGame({ playersCount: 2 })).toStrictEqual({
            board: [{ dominoIndex: 9, placement: [[0, 0], [1, 0]] }],
            currentPlayerIndex: 0,
            handCount: 3,
            hands: [new Set([10, 13, 14]), new Set([15, 16, 18])],
            isGamePlaying: true,
            playersCount: 2,
            pool: new Set([2, 3, 4, 5, 7, 19, 20, 21, 23, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })

    it('generates initial game for custom hand count', () => {
        expect(getInitialGame({ handCount: 4 })).toStrictEqual({
            board: [{ dominoIndex: 9, placement: [[0, 0], [1, 0]] }],
            currentPlayerIndex: 0,
            handCount: 4,
            hands: [new Set([10, 13, 14, 15]), new Set([16, 18, 7, 19]), new Set([20, 21, 23, 24]), new Set([25, 26, 5, 28])],
            isGamePlaying: true,
            playersCount: 4,
            pool: new Set([2, 3, 4, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })
})

describe('registerTurn', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('registers exchanged turn', () => {
        expect(registerTurn({
            pool: new Set(MOCK_POOL_LIST),
            board: MOCK_BOARD,
            hands: [new Set([10]), new Set([15]), new Set([20, 35, 45]), new Set([50, 60])],
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
            playerIndex: 2,
            discardedIndices: [35, 45],
        })).toStrictEqual({
            board: MOCK_BOARD,
            currentPlayerIndex: 3,
            hands: [new Set([10]), new Set([15]), new Set([11, 13, 20]), new Set([50, 60])],
            isGamePlaying: true,
            pool: new Set([3, 16, 21, 25, 33, 34, 35, 40, 45, 46, 49, 55, 61]),
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS, { discardedIndices: [35, 45] }],
        })
    })

    it('registers played turn', () => {
        expect(registerTurn({
            ...MOCK_PLAYED_TURN,
            board: [MOCK_BOARD[0], MOCK_BOARD[1], MOCK_BOARD[2], MOCK_BOARD[3]],
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
        })).toStrictEqual({
            board: MOCK_BOARD,
            currentPlayerIndex: 3,
            hands: [new Set([10]), new Set([15]), new Set([45, 11, 13]), new Set([50, 60])],
            isGamePlaying: true,
            pool: new Set([3, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
            scores: [15, 22, 35, 7],
            turns: [{ dominoIndex: 29 }, { moves: [{ dominoIndex: 62, pitchSets: [new Set([4, 1, 8, 0])], placement: [[0, 2], [0, 3]], playerIndex: 0 }] }, { moves: [{ dominoIndex: 30, pitchSets: [new Set([0, 5, 9, 2]), new Set([11, 2, 6]), new Set([7, 0, 4, 11])], placement: [[1, 1], [2, 0]], playerIndex: 2 }, { dominoIndex: 49, pitchSets: [new Set([0, 9, 5]), new Set([0, 5, 9])], placement: [[-2, 3], [-2, 2]], playerIndex: 2 }] }],
        })
    })

    it('registers game ending turn', () => {
        expect(registerTurn({
            ...MOCK_PLAYED_TURN,
            pool: new Set([]),
            board: [MOCK_BOARD[0], MOCK_BOARD[1], MOCK_BOARD[2], MOCK_BOARD[3]],
            hands: [new Set([]), new Set([]), new Set([30, 49]), new Set([])],
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
        })).toStrictEqual({
            board: MOCK_BOARD,
            currentPlayerIndex: 3,
            hands: [new Set([]), new Set([]), new Set([]), new Set([])],
            isGamePlaying: false,
            pool: new Set([]),
            scores: [15, 22, 35, 7],
            turns: [{ dominoIndex: 29 }, { moves: [{ dominoIndex: 62, pitchSets: [new Set([4, 1, 8, 0])], placement: [[0, 2], [0, 3]], playerIndex: 0 }] }, { isEmptyPool: true, moves: [{ dominoIndex: 30, pitchSets: [new Set([0, 5, 9, 2]), new Set([11, 2, 6]), new Set([7, 0, 4, 11])], placement: [[1, 1], [2, 0]], playerIndex: 2 }, { dominoIndex: 49, pitchSets: [new Set([0, 9, 5]), new Set([0, 5, 9])], placement: [[-2, 3], [-2, 2]], playerIndex: 2 }] }, { winnerIndices: [2] }],
        })
    })
})
