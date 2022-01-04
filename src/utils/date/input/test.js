import { getDateFromInputValue, getInputValueFromDate } from '.'

describe('getDateFromInputValue', () => {
    it('returns date for input value', () => {
        expect(getDateFromInputValue(
            '1983-05-04',
        )).toStrictEqual({ year: 1983, month: 5, day: 4 })
    })
})

describe('getInputValueFromDate', () => {
    it('returns input value for date', () => {
        expect(getInputValueFromDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe('1983-05-04')
    })
})
