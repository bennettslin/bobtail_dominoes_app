import { getPagePathFromConfig } from '../path'

export const contextualisePageConfigs = configs => (
    configs.map(config => ({
        path: getPagePathFromConfig(config),
        context: {
            pageMap: config,
        },
    }))
)
