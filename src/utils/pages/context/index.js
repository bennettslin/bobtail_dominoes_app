import { getPagePathFromConfig } from '../path/config'

export const contextualisePageConfigs = configs => (
    configs.map(config => ({
        path: getPagePathFromConfig(config),
        context: {
            pageMap: config,
        },
    }))
)
