import puzzles2020 from './2020'
import puzzles2021 from './2021'
import puzzles2022 from './2022'
import { contextualisePageConfigs } from '../../utils/pages/context'
import {
    flattenDateStructuredPages,
    parseDateStructuredPages,
} from '../../utils/pages/dateStructure'
import { addDirectionPages } from '../../utils/pages/directionPages'
import { PUZZLES_PAGE } from '../../constants/pages'
import { getIdPagesList } from '../../utils/pages/config'

const puzzles = parseDateStructuredPages({
    dateStructuredPages: [
        puzzles2020,
        puzzles2021,
        puzzles2022,
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

const PAGE_IDS = [
    '2022',
    '2021',
    '2020',
]

// For server side.
export const puzzleLinkPages = (
    contextualisePageConfigs(
        getIdPagesList({
            pageIds: PAGE_IDS,
            topLevelPage: PUZZLES_PAGE,
        }),
    )
)

// For client side.
export default puzzles
