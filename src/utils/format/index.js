import { getUnbrokenEmDashText } from './emDash'
import { getSmartQuotedText } from './smartQuote'

export const getTruncatedText = (text, maxLength = 160) => (
    text.length > maxLength ?
        /**
         * If greater than max length, truncate to max length, remove
         * trailing space, and add ellipsis.
         */
        text.substring(0, maxLength).trim() + '…' :
        text
)

export const getCapitalizedText = (text = '') => (
    `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`
)

export const getFormattedText = text => (
    getUnbrokenEmDashText(
        getSmartQuotedText(text),
    )
)

export const getCommaSeparatedList = (list = []) => {
    if (list.length === 2) {
        return [list[0], ' and ', list[1]]
    } else if (list.length >= 3) {
        return [
            list.slice(0, list.length - 1).map((entry, index) => (
                index ? [', ', entry] : [entry]
            )).flat(),
            ', and ',
            list[list.length - 1],
        ].flat()
    }
    return list
}
