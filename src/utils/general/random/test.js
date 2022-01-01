import { getRandomEntry, getRandomInteger } from '.'
import { getArrayOfIndices } from '..'
import { getAfterEach, getBeforeEach } from '../../../__mocks__/random'

describe('getRandomInteger', () => {
    beforeEach(getBeforeEach())
    afterEach(getAfterEach())

    test.each([
        [0, 100, 12],
        [-100, 0, -88],
        [-100, 100, -76],
    ])('%p to %p returns %p', (min, max, result) => {
        expect(getRandomInteger(min, max)).toStrictEqual(result)
    })
})

describe('getRandomEntry', () => {
    beforeEach(getBeforeEach())
    afterEach(getAfterEach())

    test.each([
        [undefined, undefined],
        [[], undefined],
        [[1, 2, 3, 4, 5], 1],
        [getArrayOfIndices(100), 12],
    ])('%p returns %p', (array, result) => {
        expect(getRandomEntry(array)).toStrictEqual(result)
    })
})
