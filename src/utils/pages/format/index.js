import { formatDate } from '../../date/format'
import { getCapitalizedText } from '../../format'

export const getFormattedPageLink = ({
    id,
    date,
} = {}) => {
    if (id) {
        return getCapitalizedText(id)

    } else if (date) {
        const { year, month, day } = date

        // If date is full, only return format for month and day.
        return (
            formatDate({
                date: {
                    ...!(year && month && day) && { year },
                    month,
                    day,
                },
                truncate: true,
            })
        )
    }

    return ''
}

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
