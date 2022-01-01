import { getLastDateStructuredPageForLink } from '../../../date/current/dateStructure'
import { aboutPageIds } from '../../../../content/about'
import { guidesPageIds } from '../../../../content/guides'
import puzzles from '../../../../content/puzzles'
import { rulesPageIds } from '../../../../content/rules'
import { getPagePathFromConfig } from '..'
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
        getLastDateStructuredPageForLink(puzzles),
    ),
    [RULES_PAGE]: rulesPageIds[0],
}

export const getInitialChildPage = topLevelPage => (
    INITIAL_CHILD_PAGES[topLevelPage]
)
