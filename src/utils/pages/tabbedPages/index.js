import { getPageLinkConfig } from '../config'

const getPages = ({ configs, currentIndex, truncatePages }) => (
    configs.map((config, index) => (
        (!truncatePages || Math.abs(currentIndex - index) <= 2) && {
            ...getPageLinkConfig(config),
            ...truncatePages && Math.abs(currentIndex - index) === 2 && {
                isEllipsis: true,
            },
        }
    )).filter((config, index) => (
        !truncatePages || Math.abs(currentIndex - index) <= 2
    ))
)

export const addTabbedPages = ({ configs, truncatePages }) => (
    configs.map((config, currentIndex) => ({
        pages: getPages({ configs, currentIndex, truncatePages }),
        ...config,
    }))
)
