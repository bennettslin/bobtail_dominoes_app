import { getPagesMapForIds } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'story',
    'design',
]

export default getPagesMapForIds(PAGE_IDS, ABOUT_PAGE)
