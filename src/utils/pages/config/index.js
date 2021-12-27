import { join } from '../../general'
import { addDirectionPages } from '../directionPages'
import { addTabbedPages } from '../tabbedPages'

export const getPageLinkConfig = ({ id, date }) => ({
    ...id && { id },
    ...date && { date },
})

export const getPagesMap = ({
    configs,
    ...rest
}) => (
    configs.reduce((map, initialConfig) => {
        const { id, date: { month, day } = {} } = initialConfig

        map[id || join([month, day], '-')] = {
            ...initialConfig,
            ...rest,
        }

        return map
    }, {})
)

export const getIdPagesMap = ({
    pageIds,
    ...rest
}) => (
    getPagesMap({
        configs: addDirectionPages(
            addTabbedPages(
                pageIds.map(id => ({ id })),
            ),
        ),
        ...rest,
    })
)
