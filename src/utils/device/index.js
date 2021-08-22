import Bowser from 'bowser'

const
    { userAgent } = window.navigator,
    {
        browser: {
            name: BROWSER_NAME,
            version: BROWSER_VERSION,
        } = {},
        engine: {
            name: ENGINE_NAME,
            version: ENGINE_VERSION,
        } = {},
        os: {
            name: OS_NAME,
            version: OS_VERSION,
        } = {},
        platform: {
            type: PLATFORM_TYPE,
            vendor: PLATFORM_VENDOR,
        } = {},
    } = userAgent ? Bowser.parse(userAgent) : {}

export const logDevice = () => {
    logServe(`${BROWSER_NAME ? BROWSER_NAME : ''}${BROWSER_VERSION ? ` ${BROWSER_VERSION}` : ''},${ENGINE_NAME ? ` ${ENGINE_NAME}` : ''}${ENGINE_VERSION ? ` ${ENGINE_VERSION}` : ''},${OS_NAME ? ` ${OS_NAME}` : ''}${OS_VERSION ? ` ${OS_VERSION}` : ''},${PLATFORM_VENDOR ? ` ${PLATFORM_VENDOR}` : ''}${PLATFORM_TYPE ? ` ${PLATFORM_TYPE}` : ''}.`)
}
