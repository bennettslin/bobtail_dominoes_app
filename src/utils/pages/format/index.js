import { formatDate } from '../../date/format'
import { getCapitalizedText } from '../../format'

export const getFormattedPageLink = ({
    id,
    date,
}) => {
    if (id) {
        return getCapitalizedText(id)

    } else if (date) {
        const { year, month, day } = date

        // If date is full, only return format for month and day.
        return year && month && day ?
            formatDate({ month, day }) :
            formatDate(date)
    }

    return ''
}

export const getTabbedBackLinkText = ({
    date: { year, month, day } = {},
}) => (
    formatDate({
        year,
        ...day && { month },
    })
)
