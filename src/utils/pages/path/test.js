import { getPagePathFromConfig } from '.'

describe('getPagePathFromConfig', () => {
    it('returns page path from config', () => {
        expect(
            getPagePathFromConfig({
                topLevelPage: 'birthdays',
                id: 'bennett',
                date: { year: 2021, month: 11, day: 13 },
            }),
        ).toBe('birthdays/2021/11-13/bennett')
    })
})
