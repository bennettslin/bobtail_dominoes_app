import puzzles2021 from './2021'
import {
    flattenDateStructuredPages,
    parseDateStructuredPages,
} from '../../utils/pages/dateStructure'
import { PUZZLES_PAGE } from '../../constants/pages'

const puzzles = parseDateStructuredPages({
    dateStructuredPages: [
        puzzles2021,
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
