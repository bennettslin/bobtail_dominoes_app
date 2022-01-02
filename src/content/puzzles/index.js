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
import { addTabbedPages } from '../../utils/pages/tabbedPages'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2020 from './2020'
import puzzles2021 from './2021'
import puzzles2022 from './2022'

const allPuzzles = populateDateMappedPages({
    dateMappedPages: {
        2020: puzzles2020,
        2021: puzzles2021,
        2022: puzzles2022,
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
            addTabbedPages({
                configs: flattenDateMappedPages(allPuzzles),
                truncatePages: true,
            }),
        ),
    )
)

// For server side.
export const puzzleMonthPages = (
    contextualisePageConfigs(
        getPagesList({
            pageDates: flattenMonthMappedPages(allPuzzles),
            topLevelPage: PUZZLES_PAGE,
            truncatePages: true,
        }),
    )
)

// For server side.
export const puzzleYearPages = (
    contextualisePageConfigs(
        getPagesList({
            pageDates: flattenYearMappedPages(allPuzzles),
            topLevelPage: PUZZLES_PAGE,
            truncatePages: true,
        }),
    )
)

// For client side. Only past and present puzzles.
export default filterTimeEligibleDateMappedPages(allPuzzles)
