import { getPagesMap } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

export default getPagesMap({
    pageIds: [
        'setup',
        'playing',
        'rotating',
        'scoring',
    ],
    topLevelPage: RULES_PAGE,
})
