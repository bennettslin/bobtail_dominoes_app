import puzzles2020 from './2020'
import puzzles2021 from './2021'
import puzzles2022 from './2022'
import { getPagesList } from '../../utils/pages/config'
import { filterOutFutureDateStructuredPages } from '../../utils/date/current/dateStructure'
import { contextualisePageConfigs } from '../../utils/pages/context'
import { flattenDateStructuredPages } from '../../utils/pages/dateStructure'
import { populateDateStructuredPages } from '../../utils/pages/dateStructure/populate'
import { addDirectionPages } from '../../utils/pages/directionPages'
import { PUZZLES_PAGE } from '../../constants/pages'

const puzzles = populateDateStructuredPages({
    dateStructuredPages: {
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
            flattenDateStructuredPages(puzzles).reverse(),
        ),
    )
)

// For server side.
export const puzzleLinkPages = (
    contextualisePageConfigs(
        getPagesList({
            pageDates: [
                { year: 2020 },
                { year: 2021 },
                { year: 2022 },
            ].reverse(),
            topLevelPage: PUZZLES_PAGE,
        }),
    )
)

// For client side.
export default filterOutFutureDateStructuredPages(puzzles)
