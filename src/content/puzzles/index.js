import puzzles2021 from './2021'
// import puzzles2022 from './2022'
import { contextualisePageConfigs } from '../../utils/pages/context'
import {
    flattenDateStructuredPages,
    parseDateStructuredPages,
} from '../../utils/pages/dateStructure'
import { addDirectionPages } from '../../utils/pages/directionPages'
import { PUZZLES_PAGE } from '../../constants/pages'

const puzzles = parseDateStructuredPages({
    dateStructuredPages: [
        puzzles2021,
        // puzzles2022,
    ],
    topLevelPage: PUZZLES_PAGE,
    spreadFunction: ({ date: { month, day } }) => ({
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

// For client side.
export default puzzles
