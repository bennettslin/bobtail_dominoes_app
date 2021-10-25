import {
    getAreSetsEqual, getArrayOfIndices, getFixed, getRandomInteger, getRandomEntry, join, round,
} from '.'

describe('getArrayOfIndices', () => {
    it('returns array with given length', () => {
        expect(getArrayOfIndices(6)).toStrictEqual([0, 1, 2, 3, 4, 5])
    })

    it('returns array with given base index', () => {
        expect(getArrayOfIndices(3, 7)).toStrictEqual([7, 8, 9])
    })
})

describe('getAreSetsEqual', () => {
    it('returns false for sets of unequal size', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 4, 5]),
        )).toBe(false)
    })

    it('returns false for unequal sets of equal size', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 5]),
        )).toBe(false)
    })

    it('returns true for equal sets', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 4]),
        )).toBe(true)
    })
})

describe('getFixed', () => {
    test.each([
        [0, undefined, '0'],
        [5, undefined, '5'],
        [10, undefined, '10'],
        [3.7, undefined, '3.7'],
        [7.23, undefined, '7.23'],
        [4.3142, undefined, '4.31'],
        [10.8195, undefined, '10.82'],
        [7.2, 4, '7.2'],
        [8.2649135, 5, '8.26491'],
    ])('%p to %p digits returns %p', (number, digits, result) => {
        expect(getFixed(number, digits)).toStrictEqual(result)
    })
})

describe('join', () => {
    test.each([
        [undefined, undefined, ''],
        [[0], undefined, '0'],
        [['bob', 'tail'], undefined, 'bobtail'],
        [['', 'hello', null], undefined, 'hello'],
        [['hi', 'there'], ' ', 'hi there'],
        [['how', undefined, 'are', NaN, 'you'], '-', 'how-are-you'],
    ])('%p with separator "%p" returns %p', (number, digits, result) => {
        expect(join(number, digits)).toStrictEqual(result)
    })
})

describe('round', () => {
    test.each([
        [0, undefined, 0],
        [5, undefined, 5],
        [10, undefined, 10],
        [3.7, undefined, 3.7],
        [7.23, undefined, 7.23],
        [4.3142, undefined, 4.314],
        [10.8195, undefined, 10.82],
        [7.2, 4, 7.2],
        [8.2649135, 5, 8.26491],
    ])('%p to %p decimals returns %p', (number, decimalPlaces, result) => {
        expect(round(number, decimalPlaces)).toStrictEqual(result)
    })
})

describe('getRandomInteger', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    test.each([
        [0, 100, 12],
        [-100, 0, -88],
        [-100, 100, -76],
    ])('%p to %p returns %p', (min, max, result) => {
        expect(getRandomInteger(min, max)).toStrictEqual(result)
    })
})

describe('getRandomEntry', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    test.each([
        [undefined, undefined],
        [[], undefined],
        [[1, 2, 3, 4, 5], 1],
        [getArrayOfIndices(100), 12],
    ])('%p returns %p', (array, result) => {
        expect(getRandomEntry(array)).toStrictEqual(result)
    })
})
