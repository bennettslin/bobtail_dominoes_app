import { aboutPageIds } from '../../../../content/about'
import { guidesPageIds } from '../../../../content/guides'
import { rulesPageIds } from '../../../../content/rules'
import { getPuzzleMonthDates } from '../../../../endpoint/builds'
import { getMostRecentPageFromDates } from '../../../date/current/pages'
import { getPagePathFromConfig } from '../config'
import {
    ABOUT_PAGE,
    GUIDES_PAGE,
    PUZZLES_PAGE,
    RULES_PAGE,
} from '../../../../constants/pages'

const INITIAL_CHILD_PAGES = {
    [ABOUT_PAGE]: aboutPageIds[0],
    [GUIDES_PAGE]: guidesPageIds[0],
    [PUZZLES_PAGE]: getPagePathFromConfig(
        getMostRecentPageFromDates(
            getPuzzleMonthDates(),
        ),
    ),
    [RULES_PAGE]: rulesPageIds[0],
}

export const getInitialChildPage = topLevelPage => (
    INITIAL_CHILD_PAGES[topLevelPage]
)
