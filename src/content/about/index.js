import { getPagesMap } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

export default getPagesMap({
    pageIds: [
        'story',
        'design',
    ],
    topLevelPage: ABOUT_PAGE,
})
