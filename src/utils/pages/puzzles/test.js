import { addPuzzleLinksForYears, addPuzzlesForMonths } from '.'
import { DATE_MAPPED_PAGES } from '../../../__mocks__/dateMapped'

describe('addPuzzlesForMonths', () => {
    it('adds puzzles for months', () => {
        expect(addPuzzlesForMonths({
            configs: [
                {
                    date: { year: 1983, month: 5 },
                    board: [],
                },
                {
                    date: { year: 2021, month: 11 },
                    board: [],
                },
                {
                    date: { year: 2021, month: 12 },
                    board: [],
                },
                {
                    date: { year: 2022, month: 1 },
                    board: [],
                },
            ],
            dateMappedPages: DATE_MAPPED_PAGES,
        })).toStrictEqual()
    })
})

describe('addPuzzleLinksForYears', () => {
    it('adds puzzle links for years', () => {
        expect(addPuzzleLinksForYears({
            configs: [

            ],
            dateMappedPages: DATE_MAPPED_PAGES,
        })).toStrictEqual([])
    })
})
