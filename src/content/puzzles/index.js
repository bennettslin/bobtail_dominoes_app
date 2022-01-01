import puzzles2020 from './2020'
import puzzles2021 from './2021'
import puzzles2022 from './2022'
import { getPagesList } from '../../utils/pages/config'
import { filterTimeEligibleDateMappedPages } from '../../utils/date/current/dateMapped'
import { contextualisePageConfigs } from '../../utils/pages/context'
import {
    flattenDateMappedPages,
    flattenMonthMappedPages,
    flattenYearMappedPages,
} from '../../utils/pages/dateMapped'
import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { addDirectionPages } from '../../utils/pages/directionPages'
import { PUZZLES_PAGE } from '../../constants/pages'

const allPuzzles = populateDateMappedPages({
    dateMappedPages: {
        ...puzzles2020,
        ...puzzles2021,
        ...puzzles2022,
    },
    topLevelPage: PUZZLES_PAGE,
    dateSpreadFunction: ({ month, day }) => ({
        title: `Puzzle ${[month, day].join('/')}`,
    }),
})

// For server side.
export const puzzlePages = (
    contextualisePageConfigs(
        addDirectionPages(
            flattenDateMappedPages(allPuzzles),
        ),
    )
)

// For server side.
export const puzzleMonthPages = (
    contextualisePageConfigs(
        getPagesList({
            pageDates: flattenMonthMappedPages(allPuzzles),
            topLevelPage: PUZZLES_PAGE,
        }),
    )
)

// For server side.
export const puzzleYearPages = (
    contextualisePageConfigs(
        getPagesList({
            pageDates: flattenYearMappedPages(allPuzzles),
            topLevelPage: PUZZLES_PAGE,
        }),
    )
)

// For client side. Only past and present puzzles.
export default filterTimeEligibleDateMappedPages(allPuzzles)
