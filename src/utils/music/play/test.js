import { getInitialGame, registerTurn } from '.'
import { getAfterEach, getBeforeEach } from '../../../__mocks__/random'
import { MOCK_BOARD } from '../../../__mocks__/board'
import { MOCK_POOL_LIST } from '../../../__mocks__/pool'
import { MOCK_TURNS } from '../../../__mocks__/turns'
import { PLAYERS_COUNT } from '../../../constants/music/demo'
import { HAND_COUNT } from '../../../constants/music/play'

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
    beforeEach(getBeforeEach())
    afterEach(getAfterEach())

    it('generates initial game', () => {
        expect(getInitialGame({
            handCount: HAND_COUNT,
            playersCount: PLAYERS_COUNT,
        })).toStrictEqual({
            board: [{ dominoIndex: 8, placement: [[0, 0], [1, 0]] }],
            hands: [new Set([9, 10, 13]), new Set([14, 15, 16]), new Set([18, 7, 19]), new Set([20, 21, 23])],
            isGameOver: false,
            pool: new Set([2, 3, 4, 5, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })

    it('generates initial extended game', () => {
        expect(getInitialGame({
            isExtendedPool: true,
            handCount: HAND_COUNT,
            playersCount: PLAYERS_COUNT,
        })).toStrictEqual({
            board: [{ dominoIndex: 9, placement: [[0, 0], [1, 0]] }],
            hands: [new Set([10, 8, 11]), new Set([12, 13, 14]), new Set([15, 16, 17]), new Set([7, 18, 19])],
            isGameOver: false,
            pool: new Set([1, 2, 3, 4, 5, 6, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 9 }],
        })
    })

    it('generates initial game for custom players count', () => {
        expect(getInitialGame({
            handCount: HAND_COUNT,
            playersCount: 2,
        })).toStrictEqual({
            board: [{ dominoIndex: 8, placement: [[0, 0], [1, 0]] }],
            hands: [new Set([9, 10, 13]), new Set([14, 15, 16])],
            isGameOver: false,
            pool: new Set([2, 3, 4, 5, 7, 18, 19, 20, 21, 23, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })

    it('generates initial game for custom hand count', () => {
        expect(getInitialGame({
            handCount: 4,
            playersCount: PLAYERS_COUNT,
        })).toStrictEqual({
            board: [{ dominoIndex: 8, placement: [[0, 0], [1, 0]] }],
            hands: [new Set([9, 10, 13, 14]), new Set([15, 16, 18, 7]), new Set([19, 20, 21, 23]), new Set([24, 25, 26, 5])],
            isGameOver: false,
            pool: new Set([2, 3, 4, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65]),
            scores: [0, 0, 0, 0],
            turns: [{ dominoIndex: 8 }],
        })
    })
})

describe('registerTurn', () => {
    beforeEach(getBeforeEach())
    afterEach(getAfterEach())

    it('registers exchanged turn', () => {
        expect(registerTurn({
            pool: new Set(MOCK_POOL_LIST),
            board: MOCK_BOARD,
            handCount: HAND_COUNT,
            hands: [new Set([10]), new Set([15]), new Set([20, 35, 45]), new Set([50, 60])],
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
            playerIndex: 2,
            playersCount: PLAYERS_COUNT,
            discardedIndices: [35, 45],
        })).toStrictEqual({
            board: MOCK_BOARD,
            hands: [new Set([10]), new Set([15]), new Set([11, 13, 20]), new Set([50, 60])],
            isGameOver: false,
            pool: new Set([3, 16, 21, 25, 33, 34, 35, 40, 45, 46, 49, 55, 61]),
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS, { discardedIndices: [35, 45] }],
        })
    })

    it('registers played turn', () => {
        expect(registerTurn({
            ...MOCK_PLAYED_TURN,
            board: [MOCK_BOARD[0], MOCK_BOARD[1], MOCK_BOARD[2], MOCK_BOARD[3]],
            handCount: HAND_COUNT,
            playersCount: PLAYERS_COUNT,
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
        })).toStrictEqual({
            board: MOCK_BOARD,
            hands: [new Set([10]), new Set([15]), new Set([45, 11, 13]), new Set([50, 60])],
            isGameOver: false,
            pool: new Set([3, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
            scores: [15, 22, 35, 7],
            turns: [{ dominoIndex: 29 }, { moves: [{ dominoIndex: 62, pitchSets: [new Set([4, 1, 8, 0])], placement: [[0, 2], [0, 3]] }] }, { moves: [{ dominoIndex: 30, pitchSets: [new Set([0, 5, 9, 2]), new Set([11, 2, 6]), new Set([7, 0, 4, 11])], placement: [[1, 1], [2, 0]] }, { dominoIndex: 49, pitchSets: [new Set([0, 9, 5]), new Set([0, 5, 9])], placement: [[-2, 3], [-2, 2]] }] }],
        })
    })

    it('registers game ending turn', () => {
        expect(registerTurn({
            ...MOCK_PLAYED_TURN,
            pool: new Set(),
            board: [MOCK_BOARD[0], MOCK_BOARD[1], MOCK_BOARD[2], MOCK_BOARD[3]],
            handCount: HAND_COUNT,
            hands: [new Set(), new Set(), new Set([30, 49]), new Set()],
            playersCount: PLAYERS_COUNT,
            scores: [15, 22, 18, 7],
            turns: [...MOCK_TURNS],
        })).toStrictEqual({
            board: MOCK_BOARD,
            hands: [new Set(), new Set(), new Set(), new Set()],
            isGameOver: true,
            pool: new Set(),
            scores: [15, 22, 35, 7],
            turns: [{ dominoIndex: 29 }, { moves: [{ dominoIndex: 62, pitchSets: [new Set([4, 1, 8, 0])], placement: [[0, 2], [0, 3]] }] }, { isEmptyPool: true, moves: [{ dominoIndex: 30, pitchSets: [new Set([0, 5, 9, 2]), new Set([11, 2, 6]), new Set([7, 0, 4, 11])], placement: [[1, 1], [2, 0]] }, { dominoIndex: 49, pitchSets: [new Set([0, 9, 5]), new Set([0, 5, 9])], placement: [[-2, 3], [-2, 2]] }] }, { winnerIndices: [2] }],
        })
    })
})
