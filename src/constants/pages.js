import { DOMAIN } from '../utils/server'

export const DOMAIN_NAME = `https://www.${DOMAIN}.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const ABOUT_PAGE = 'about'
export const RULES_PAGE = 'rules'
export const GUIDES_PAGE = 'guides'
export const DEMO_PAGE = 'demo'
export const PUZZLES_PAGE = 'puzzles'
export const LINKS_PAGE = 'links'

export const TABBED_PAGES_SET = new Set([
    ABOUT_PAGE,
    RULES_PAGE,
    GUIDES_PAGE,
    PUZZLES_PAGE,
])

export const BACK_LINKED_PAGES_SET = new Set()

export const INITIAL_CHILD_PAGES = {
    [ABOUT_PAGE]: 'story',
    [GUIDES_PAGE]: 'chords',
    [PUZZLES_PAGE]: '2022',
    [RULES_PAGE]: 'setup',
}
