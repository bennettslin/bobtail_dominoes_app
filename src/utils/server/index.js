export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return 'bobtaildominoes_local'
        case 'candidate':
            return 'bobtaildominoes_candidate'
        case 'delivery':
            return 'bobtaildominoes_delivery'
        default:
            return 'bobtaildominoes'
    }
}

export const getS3BucketName = () => {
    switch (process.env.DESTINATION) {
        case 'candidate':
            return 'bobtaildominoes--candidate'
        case 'delivery':
            return 'bobtaildominoes--delivery'
        default:
            return 'bobtaildominoes--production'
    }
}
