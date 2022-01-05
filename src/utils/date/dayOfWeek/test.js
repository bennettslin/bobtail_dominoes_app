import { getDayOfWeekIndex } from '.'

describe('getDayOfWeekIndex', () => {
    test.each([
        [{ year: 1983, month: 5, day: 2 }, 0],
        [{ year: 1983, month: 5, day: 3 }, 1],
        [{ year: 1983, month: 5, day: 4 }, 2],
        [{ year: 1983, month: 5, day: 5 }, 3],
        [{ year: 1983, month: 5, day: 6 }, 4],
        [{ year: 1983, month: 5, day: 7 }, 5],
        [{ year: 1983, month: 5, day: 8 }, 6],
    ])('%p returns %p', (date, result) => {
        expect(getDayOfWeekIndex(date)).toBe(result)
    })
})
