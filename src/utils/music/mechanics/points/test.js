import { getIsWinner, getPoints, getPointsForMoves, getPointsForPitchSets, sortByHighestPoints } from '.'
import { HAND_COUNT } from '../../../../constants/music/play'

describe('getPoints', () => {
    test.each([
        // Undefined.
        [undefined, 0],
        // Empty set.
        [new Set(), 0],
        // Single pitch.
        [new Set([3]), 0],
        // Dyad.
        [new Set([3, 10]), 0],
        // Triad.
        [new Set([0, 3, 7]), 3], // Chord.
        [new Set([8, 5, 3]), 0], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), 4], // Chord.
        [new Set([6, 11, 0, 5]), 0], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), 0],
    ])('%p returns %p points', (set, result) => {
        expect(getPoints(set)).toBe(result)
    })
})

describe('getPointsForPitchSets', () => {
    test.each([
        [undefined, 0],
        [[], 0],
        [[new Set([0, 3, 7]), new Set([2, 4, 7, 11])], 7],
    ])('%p returns %p points', (set, result) => {
        expect(getPointsForPitchSets(set)).toBe(result)
    })
})

describe('getPointsForMoves', () => {
    test.each([
        [undefined, 0],
        [{}, 0],
        [{
            handCount: HAND_COUNT,
            moves: [
                { pitchSets: [new Set([0, 3, 7]), new Set([2, 4, 7, 11])] },
                { pitchSets: [new Set([7, 10, 2])] },
            ],
        }, 10], // No bingo.
        [{
            handCount: HAND_COUNT,
            moves: [
                { pitchSets: [new Set([0, 3, 7]), new Set([2, 4, 7, 11])] },
                { pitchSets: [new Set([7, 10, 2])] },
                { pitchSets: [new Set([10, 2, 5, 9])] },
            ],
        }, 16], // Bingo.
        [{
            handCount: 2,
            moves: [
                { pitchSets: [new Set([0, 3, 7]), new Set([2, 4, 7, 11])] },
                { pitchSets: [new Set([7, 10, 2])] },
            ],
        }, 12], // Custom hand count with bingo.
    ])('%p returns %p points', (set, result) => {
        expect(getPointsForMoves(set)).toBe(result)
    })
})

describe('getIsWinner', () => {
    it('returns false if game is still being played', () => {
        expect(getIsWinner({
            turns: [{ moves: [] }],
            playerIndex: 0,
        })).toBe(false)
    })

    it('returns false if game is over and player lost', () => {
        expect(getIsWinner({
            turns: [{ winnerIndices: [1, 3] }],
            playerIndex: 0,
        })).toBe(false)
    })

    it('returns false if game is over and player won', () => {
        expect(getIsWinner({
            turns: [{ winnerIndices: [1, 3] }],
            playerIndex: 1,
        })).toBe(true)
    })
})

describe('sortByHighestPoints', () => {
    it('sorts by highest points', () => {
        expect(sortByHighestPoints({
            turns: [{ moves: [] }],
            playerIndex: 0,
        })).toBe(false)
    })
})
