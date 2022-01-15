import { getIdPagesMap } from '../../utils/pages/config'
import { ADMIN_PAGE } from '../../constants/pages'

export const adminPageIds = [
    'generator',
]

export default getIdPagesMap({
    pageIds: adminPageIds,
    topLevelPage: ADMIN_PAGE,
})
