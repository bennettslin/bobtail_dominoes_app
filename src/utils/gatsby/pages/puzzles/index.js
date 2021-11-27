import puzzles from '../../../../content/puzzles'
import { getPagePathFromConfig } from '../../../pages/config'
import { PUZZLES_PAGE } from '../../../../constants/pages'

export default Object.values(puzzles).map(yearMap => (
    Object.values(yearMap).map(monthList => (
        monthList.map(puzzle => {
            const pageMap = {
                ...puzzle,
                topLevelPage: PUZZLES_PAGE,
            }

            return {
                path: getPagePathFromConfig(pageMap),
                context: {
                    pageMap,
                    content: `Testing content.`,
                },
            }
        })
    )).flat()
)).flat()
