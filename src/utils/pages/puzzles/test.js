import { addPuzzleLinksForYears, addPuzzlesForMonths } from '.'
import { DATE_MAPPED_PAGES } from '../../../__mocks__/dateMapped'

describe('addPuzzlesForMonths', () => {
    it('adds puzzles for months', () => {
        expect(addPuzzlesForMonths({
            configs: [
                
            ],
            dateMappedPages: DATE_MAPPED_PAGES,
        })).toStrictEqual([])
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
