import { formatDate, formatDateWithDayOfWeek } from '.'

describe('formatDate', () => {
    test.each([
        [undefined, undefined],
        [
            { date: { year: 1983 } },
            '1983',
        ],
        [
            { date: { month: 5 } },
            'May',
        ],
        [
            { date: { month: 5, day: 4 } },
            'May 4',
        ],
        [
            { date: { year: 1983, month: 5 } },
            'May 1983',
        ],
        [
            { date: { year: 1983, month: 5, day: 4 } },
            'May 4, 1983',
        ],
        [
            { date: { month: 8 }, truncate: true },
            'Aug',
        ],
        [
            { date: { month: 8, day: 22 }, truncate: true },
            'Aug 22',
        ],
        [
            { date: { year: 1988, month: 8 }, truncate: true },
            'Aug 1988',
        ],
        [
            { date: { year: 1988, month: 8, day: 22 }, truncate: true },
            'Aug 22, 1988',
        ],
    ])('%p returns %p', (props, result) => {
        expect(formatDate(props)).toBe(result)
    })
})

describe('formatDateWithDayOfWeek', () => {
    test.each([
        [
            { year: 1983, month: 5, day: 4 },
            'Wednesday, May 4, 1983',
        ],
    ])('%p returns %p', (props, result) => {
        expect(formatDateWithDayOfWeek(props)).toBe(result)
    })
})
