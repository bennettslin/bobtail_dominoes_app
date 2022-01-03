import { addDirectionPages } from '../directionPages'
import { addTabbedPages } from '../tabbedPages'

export const getPageLinkConfig = ({ id, date }) => ({
    ...id && { id },
    ...date && { date },
})

const getConfigsFromIdsOrDates = ({
    pageIds,
    pageDates,
    ...rest
}) => (
    pageIds ?
        pageIds.map(id => ({ id, ...rest })) :
        pageDates.map(date => ({ date, ...rest }))
)

export const getPagesList = ({
    pageIds,
    pageDates,
    truncatePages,
    ...rest
}) => (
    addDirectionPages(
        addTabbedPages({
            configs: getConfigsFromIdsOrDates({
                pageIds,
                pageDates,
                ...rest,
            }),
            truncatePages,
        }),
    )
)

const getIdMapFromList = configs => (
    configs.reduce((map, config) => ({
        ...map,
        [config.id]: config,
    }), {})
)

export const getIdPagesMap = props => (
    getIdMapFromList(
        getPagesList(props),
    )
)
