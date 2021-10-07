import { getPagesMapForIds } from '../../utils/pages/config'
import { CHORDS_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'checker',
    'reference',
]

export default getPagesMapForIds(PAGE_IDS, CHORDS_PAGE)
