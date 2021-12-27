import { getPageLinkConfig } from '../config'

const getTabbedPages = configs => (
    configs.map(config => (
        getPageLinkConfig(config)
    ))
)

export const addTabbedPages = configs => (
    configs.map(config => ({
        pages: getTabbedPages(configs),
        ...config,
    }))
)
