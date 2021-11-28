import puzzles2021 from './2021'
import puzzles2022 from './2022'
import {
    flattenDateStructuredPages,
    parseDateStructuredPages,
} from '../../utils/pages/dateStructure'
import { PUZZLES_PAGE } from '../../constants/pages'

const puzzles = parseDateStructuredPages({
    dateStructuredPages: [
        puzzles2021,
        puzzles2022,
    ],
    topLevelPage: PUZZLES_PAGE,
    spreadFunction: ({ date: { month, day } }) => ({
        title: `Puzzle ${[month, day].join('/')}`,
    }),
})

// For server side.
export const puzzlePages = flattenDateStructuredPages(puzzles)

// For client side.
export default puzzles
