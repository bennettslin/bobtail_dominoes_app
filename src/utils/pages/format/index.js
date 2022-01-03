import { formatDate } from '../../date/format'
import { getCapitalizedText } from '../../format'
import { join } from '../../general'

export const getHelmetTitle = ({
    id,
    date,
    topLevelPage,
}) => (
    id ? (
        getCapitalizedText(id)
    ) : (
        join([
            getCapitalizedText(topLevelPage),
            formatDate({
                date,
                truncate: true,
            }),
        ], ': ')
    )
)

export const getPageLinkText = ({
    id,
    date: { year, month, day } = {},
} = {}) => (
    id ? (
        getCapitalizedText(id)
    ) : (
        formatDate({
            date: {
                // If date is full, only return format for month and day.
                ...!(year && month && day) && { year },
                month,
                day,
            },
            truncate: true,
        })
    )
)

export const getTabbedBackLinkText = ({
    date: { year, month, day } = {},
}) => (
    formatDate({
        date: {
            year,
            ...day && { month },
        },
        truncate: true,
    })
)
