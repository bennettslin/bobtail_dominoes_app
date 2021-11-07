import { getPagesMapForIds } from '../../utils/pages/config'
import { GUIDES_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'chords',
    'strategy',
]

export default getPagesMapForIds(PAGE_IDS, GUIDES_PAGE)
