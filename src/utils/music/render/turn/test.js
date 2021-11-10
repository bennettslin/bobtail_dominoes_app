import { getIsDominoInLatestTurn, getLatestTurnIndex } from '.'
import { MOCK_TURNS } from '../../../../__mocks__/turns'

describe('getLatestTurnIndex', () => {
    test.each([
        [[], -1],
        [[MOCK_TURNS[0]], 0],
        [MOCK_TURNS, 1],
    ])('%p returns %p', (turns, result) => {
        expect(getLatestTurnIndex(turns)).toStrictEqual(result)
    })
})

describe('getIsDominoInLatestTurn', () => {
    test.each([
        [{ dominoIndex: 5, turns: [MOCK_TURNS[0]] }, false],
        [{ dominoIndex: 29, turns: [MOCK_TURNS[0]] }, true],
        [{ dominoIndex: 5, turns: MOCK_TURNS }, false],
        [{ dominoIndex: 62, turns: MOCK_TURNS }, true],
        [
            {
                dominoIndex: 5,
                turns: [...MOCK_TURNS, { discardedIndices: [5, 29] }],
            },
            false,
        ],
        [
            {
                dominoIndex: 5,
                turns: [...MOCK_TURNS, { winnerIndices: [0] }],
            },
            false,
        ],
    ])('%p returns %p', (turns, result) => {
        expect(getIsDominoInLatestTurn(turns)).toStrictEqual(result)
    })
})
