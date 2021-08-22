import {
    ANALYTICS__FAILURE,
    ANALYTICS__SUCCESS,
} from '../../../constants/analytics'

export const ERROR = 'error'
export const EVENT = 'event'
export const SERVE = 'serve'
export const SUCCESS = 'success'

const BASE_STYLES = {
    // Show turquoise background by default.
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em',
}

const ANALYTICS_STYLES = {
    [ANALYTICS__FAILURE]: {
        color: '#b44',
        fontSize: '0.6em',
    },
    [ANALYTICS__SUCCESS]: {
        color: '#4b4',
        fontSize: '0.6em',
    },
}

const LOG_STYLES = {
    [ERROR]: {
        color: '#b44',
        fontSize: '2em',
    },
    [EVENT]: {
        color: '#8ad',
        fontSize: '0.8em',
    },
    [SERVE]: {
        fontSize: '1.1em',
    },
    [SUCCESS]: {
        color: '#4b4',
        fontSize: '2em',
    },
}

const _getStyles = (styles) => {
    const stylesArray = []

    for (const key in styles) {
        // Change camel case to dashed case.
        const dashedKey =
            key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        stylesArray.push(`${dashedKey}: ${styles[key]};`)
    }
    return stylesArray.join(' ')
}

export const getStyleForAnalyticsLog = category => (
    _getStyles({
        ...ANALYTICS_STYLES[category],
    })
)

export const getStyleForCategoryLog = category => (
    _getStyles({
        ...BASE_STYLES,
        ...LOG_STYLES[category],
    })
)
