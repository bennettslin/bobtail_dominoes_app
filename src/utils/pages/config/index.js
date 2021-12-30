import { join } from '../../general'
import { addDirectionPages } from '../directionPages'
import { addTabbedPages } from '../tabbedPages'

export const getPageLinkConfig = ({ id, date }) => ({
    ...id && { id },
    ...date && { date },
})

export const getPagesMapFromList = configs => (
    configs.reduce((map, config) => {
        const { id, date: { month, day } = {} } = config

        map[id || join([month, day], '-')] = config

        return map
    }, {})
)

export const getPagesList = ({ pageIds, pageDates, ...rest }) => (
    addDirectionPages(
        addTabbedPages(
            pageIds ?
                pageIds.map(id => ({ id, ...rest })) :
                pageDates.map(date => ({ date, ...rest })),
        ),
    )
)

export const getPagesMap = props => (
    getPagesMapFromList(getPagesList(props))
)
