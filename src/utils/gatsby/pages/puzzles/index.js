import puzzles from '../../../../content/puzzles'
import { getPagePathFromConfig } from '../../../pages/config'

export default puzzles.map(puzzle => ({
    path: getPagePathFromConfig(puzzle),
    context: {
        pageMap: puzzle,
        content: `Testing content.`,
    },
}))
