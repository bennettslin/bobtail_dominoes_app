import { getDateFromStorage, setDateInStorage } from '.'

describe('getDateFromStorage', () => {
    beforeEach(() => {
        window.localStorage.testDate = JSON.stringify(
            { year: 1983, month: 5, day: 4 },
        )
    })
    afterEach(() => {
        delete window.localStorage.testDate
    })

    it('returns date for input value', () => {
        expect(getDateFromStorage(
            'testDate',
        )).toStrictEqual({ year: 1983, month: 5, day: 4 })
    })
})

describe('setDateInStorage', () => {
    beforeEach(() => {
        window.localStorage.testDate = JSON.stringify(
            { year: 1983, month: 5, day: 4 },
        )
    })
    afterEach(() => {
        delete window.localStorage.testDate
    })

    it('returns input value for date', () => {
        setDateInStorage(
            'testDate',
            { year: 1988, month: 8, day: 22 },
        )
        expect(window.localStorage.testDate).toBe(
            JSON.stringify({ year: 1988, month: 8, day: 22 }),
        )
    })
})
