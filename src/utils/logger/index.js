import { sendToAnalyticsFromLog } from './helpers/analytics'
import { getTimeDifference } from './helpers/time'

import {
    ERROR,
    EVENT,
    SERVE,
    SUCCESS,
    getStyleForCategoryLog,
} from './helpers/styles'

const _log = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,
    action,
    label,
    value,
    useTimeForValue,

}) => {
    const timeDifference = getTimeDifference()

    if (log) {
        console[level](
            `%c${log}`,
            styles || getStyleForCategoryLog(styleCategory || category),
            timeDifference,
        )
    }

    sendToAnalyticsFromLog({
        category,
        action,
        label,
        value: parseInt(
            useTimeForValue ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value,
        ),
    })
}

export const logEvent = (componentName, label) => {
    _log({
        log: `Event "${label || 'click'}" from ${componentName}.`,
        category: EVENT,
        action: componentName,
        label,
    })
}
export const logServe = (log, props) => {
    _log({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props,
    })
}
export const logError = (log, props) => {
    _log({
        log,
        level: 'error',
        category: ERROR,
        ...props,
    })
}
export const logSuccess = (log, props) => {
    _log({
        log,
        category: SUCCESS,
        ...props,
    })
}
