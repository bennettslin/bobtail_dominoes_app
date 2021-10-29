import { addTurn, getInitialTurns } from '.'
import { MOCK_BOARD } from '../../../../../__mocks__/board'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'

const MOCK_TURN_1 = {
    dominoIndex: 62,
    pitchSets: [new Set([4, 1, 8, 0])],
    placement: [[0, 2], [0, 3]],
    playerIndex: 0,
}

const MOCK_TURN_2 = {
    dominoIndex: 4,
    pitchSets: [new Set([0, 4, 8])],
    placement: [[2, 0], [1, 1]],
    playerIndex: 1,
}

const MOCK_TURNS = [
    { dominoIndex: 29 },
    {
        playerIndex: 0,
        moves: [MOCK_TURN_1],
    },
]

describe('getInitialTurns', () => {
    it('generates turns with first domino', () => {
        expect(getInitialTurns([MOCK_BOARD[0]])).toStrictEqual([
            { dominoIndex: 4 },
        ])
    })
})

describe('addTurn', () => {
    it('adds turn for exchanged hand', () => {
        expect(addTurn({
            pool: new Set(MOCK_POOL_LIST),
            turns: [...MOCK_TURNS],
            playerIndex: 1,
            playersCount: 4,
        })).toStrictEqual({
            isFinalTurn: false,
            turns: [
                { dominoIndex: 29 },
                { moves: [MOCK_TURN_1], playerIndex: 0 },
                { playerIndex: 1 },
            ],
        })
    })

    it('adds turn for played hand', () => {
        expect(addTurn({
            pool: new Set(MOCK_POOL_LIST),
            turns: [...MOCK_TURNS],
            moves: [MOCK_TURN_2],
            playerIndex: 1,
            playersCount: 4,
        })).toStrictEqual({
            isFinalTurn: false,
            turns: [
                { dominoIndex: 29 },
                { moves: [MOCK_TURN_1], playerIndex: 0 },
                { moves: [MOCK_TURN_2], playerIndex: 1 },
            ],
        })
    })
})
