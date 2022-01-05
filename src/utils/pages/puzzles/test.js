import { addPuzzleLinksForYears, addPuzzlesForMonths } from '.'

const DATE_MAPPED_PUZZLE_PAGES = {
    1983: {
        5: {
            4: {
                date: { year: 1983, month: 5, day: 4 },
                board: [],
                topLevelPage: 'puzzles',
            },
        },
    },
    1988: {
        8: {
            22: {
                date: { year: 1988, month: 8, day: 22 },
                board: [],
                topLevelPage: 'puzzles',
            },
        },
    },
}

describe('addPuzzlesForMonths', () => {
    it('adds puzzles for months', () => {
        expect(addPuzzlesForMonths({
            configs: [
                { date: { year: 1983, month: 5 } },
                { date: { year: 1988, month: 8 } },
            ],
            dateMappedPages: DATE_MAPPED_PUZZLE_PAGES,
        })).toStrictEqual([
            {
                date: { month: 5, year: 1983 },
                puzzlesList: [{
                    board: [],
                    date: { day: 4, month: 5, year: 1983 },
                    topLevelPage: 'puzzles',
                }],
            },
            {
                date: { month: 8, year: 1988 },
                puzzlesList: [{
                    board: [],
                    date: { day: 22, month: 8, year: 1988 },
                    topLevelPage: 'puzzles',
                }],
            },
        ])
    })
})

describe('addPuzzleLinksForYears', () => {
    it('adds puzzle links for years', () => {
        expect(addPuzzleLinksForYears({
            configs: [
                { date: { year: 1983 } },
                { date: { year: 1988 } },
            ],
            dateMappedPages: DATE_MAPPED_PUZZLE_PAGES,
        })).toStrictEqual([
            { date: { year: 1983 }, monthsList: [5] },
            { date: { year: 1988 }, monthsList: [8] },
        ])
    })
})
