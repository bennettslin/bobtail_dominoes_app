import { getBestPointedEntryBasedOnRequirements } from '.'

describe('getBestPointedEntryBasedOnRequirements', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    test.each([
        [{
            sortedPointedEntries: [{ points: 10 }, { points: 9 }],
        }, {
            bestPointedEntry: { points: 10 },
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            yieldPoints: 10,
        }],
        [{
            sortedPointedEntries: [{ points: 10 }, { points: 9 }],
            minPoints: 20,
        }, {
            bestPointedEntry: { points: 10 },
            meetsMinimumPoints: false,
            meetsUniqueHighest: true,
            yieldPoints: 10,
        }],
        [{
            sortedPointedEntries: [{ points: 10 }, { points: 10 }],
            needsUniqueHighest: true,
        }, {
            bestPointedEntry: { points: 10 },
            meetsMinimumPoints: true,
            meetsUniqueHighest: false,
            yieldPoints: 10,
        }],
        [{
            sortedPointedEntries: [{ points: 10 }, { points: 9 }],
            rankRange: [1, 1],
        }, {
            bestPointedEntry: { points: 9 },
            meetsMinimumPoints: true,
            meetsUniqueHighest: true,
            yieldPoints: 9,
        }],
    ])('%p to %p returns %p', (props, result) => {
        expect(
            getBestPointedEntryBasedOnRequirements(props),
        ).toStrictEqual(result)
    })
})
