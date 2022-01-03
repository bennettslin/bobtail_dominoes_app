import { getMostRecentDateInDateList } from '../../../date/current'
import { aboutPageIds } from '../../../../content/about'
import { guidesPageIds } from '../../../../content/guides'
import { rulesPageIds } from '../../../../content/rules'
import { getPagePathFromConfig } from '../config'
import {
    ABOUT_PAGE,
    GUIDES_PAGE,
    PUZZLES_PAGE,
    RULES_PAGE,
} from '../../../../constants/pages'
import { getPuzzleMonthDates } from '../../../../endpoint/builds'

const INITIAL_CHILD_PAGES = {
    [ABOUT_PAGE]: aboutPageIds[0],
    [GUIDES_PAGE]: guidesPageIds[0],
    [PUZZLES_PAGE]: getPagePathFromConfig({
        date: getMostRecentDateInDateList(
            getPuzzleMonthDates(),
        ),
    }),
    [RULES_PAGE]: rulesPageIds[0],
}

export const getInitialChildPage = topLevelPage => (
    INITIAL_CHILD_PAGES[topLevelPage]
)
