import { join } from '../../general'
import { addDirectionPages } from '../directionPages'

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

export const getPagesMapForIds = ({
    pageIds,
    ...rest
}) => (
    getPagesMap({
        configs: addDirectionPages(pageIds.map(id => ({ id }))),
        ...rest,
    })
)
