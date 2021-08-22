import { sendToAnalytics } from '../../analytics'
import { getStyleForAnalyticsLog } from './styles'

export const sendToAnalyticsFromLog = ({
    category,
    action,
    label,
    value,
}) => {
    // Only send to analytics if log has an action.
    if (!action) {
        return
    }

    const analyticsStatus = sendToAnalytics({
        category,
        action,
        label,
        value,
    })

    if (!IS_PRODUCTION) {
        /**
         * Log analytics parameters to make data analysis easier. Only show
         * with verbose logging.
         */
        console.debug(
            `%c${`category: ${category}\naction: ${action}${typeof label !== 'undefined' ? `\nlabel: ${label}` : ''}${Number.isFinite(value) ? `\nvalue: ${value}` : ''}`}`,
            getStyleForAnalyticsLog(analyticsStatus),
        )
    }
}
