export const APP_TITLE = 'Bobtail Dominoes'
export const APP_DESCRIPTION =
    'Website for the musical tile game Bobtail Dominoes.'
export const APP_NAME = 'bobtailDominoes'
export const DOMAIN = APP_NAME.toLowerCase()

export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return `${APP_NAME}_local`
        default:
            return APP_NAME
    }
}

export const getS3BucketName = () => (
    `${DOMAIN}--production`
)
