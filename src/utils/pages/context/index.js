import { getPagePathFromConfig } from '../path'

export const contextualizePageMaps = pageMaps => (
    pageMaps.map(pageMap => ({
        path: getPagePathFromConfig(pageMap),
        context: {
            pageMap,
        },
    }))
)
