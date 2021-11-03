import { addTurn, getInitialTurns, getPlayerIndex } from '.'
import { MOCK_BOARD } from '../../../../../__mocks__/board'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'
import {
    MOCK_MOVE_1,
    MOCK_MOVE_2,
    MOCK_TURNS,
} from '../../../../../__mocks__/turns'

describe('getInitialTurns', () => {
    it('generates turns with first domino', () => {
        expect(getInitialTurns([MOCK_BOARD[0]])).toStrictEqual([
            { dominoIndex: 4 },
        ])
    })
})

describe('addTurn', () => {
    it('adds turn for passed hand', () => {
        expect(addTurn({
            pool: new Set(MOCK_POOL_LIST),
            turns: [...MOCK_TURNS],
            playerIndex: 1,
            playersCount: 4,
        })).toStrictEqual({
            isGameEnd: false,
            turns: [
                { dominoIndex: 29 },
                { moves: [MOCK_MOVE_1] },
                { discardedIndices: [] },
            ],
        })
    })

    it('adds turn for exchanged hand', () => {
        expect(addTurn({
            pool: new Set(MOCK_POOL_LIST),
            turns: [...MOCK_TURNS],
            playerIndex: 1,
            playersCount: 4,
            discardedIndices: [5, 10],
        })).toStrictEqual({
            isGameEnd: false,
            turns: [
                { dominoIndex: 29 },
                { moves: [MOCK_MOVE_1] },
                { discardedIndices: [5, 10] },
            ],
        })
    })

    it('adds turn for played hand', () => {
        expect(addTurn({
            pool: new Set(MOCK_POOL_LIST),
            turns: [...MOCK_TURNS],
            moves: [MOCK_MOVE_2],
            playerIndex: 1,
            playersCount: 4,
        })).toStrictEqual({
            isGameEnd: false,
            turns: [
                { dominoIndex: 29 },
                { moves: [MOCK_MOVE_1] },
                { moves: [MOCK_MOVE_2] },
            ],
        })
    })
})

describe('getPlayerIndex', () => {
    test.each([
        [{ turnIndex: 0, playersCount: 4 }, -1],
        [{ turnIndex: 1, playersCount: 1 }, 0],
        [{ turnIndex: 5, playersCount: 4 }, 0],
        [{ turnIndex: 5, playersCount: 3 }, 1],
    ])('%p returns %p', (props, result) => {
        expect(getPlayerIndex(props)).toStrictEqual(result)
    })
})
