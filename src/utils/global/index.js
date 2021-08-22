import {
    logError,
    logEvent,
    logServe,
    logSuccess,
} from '../logger'

export const globaliseLogs = () => {
    global.logError = logError
    global.logEvent = logEvent
    global.logServe = logServe
    global.logSuccess = logSuccess
}
