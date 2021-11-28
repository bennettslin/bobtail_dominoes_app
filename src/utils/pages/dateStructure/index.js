import { getPagePathFromConfig } from '../config'

export const parseDateStructuredPages = ({
    dateStructuredPages,
    spreadFunction = () => ({}),
    ...topLevelRest
}) => (
    dateStructuredPages.map(yearMap => {
        const year = parseInt(Object.keys(yearMap)[0])
        return {
            [year]: yearMap[year].map(monthMap => {
                const month = parseInt(Object.keys(monthMap)[0])
                return {
                    [month]: monthMap[month].map(({ day, ...rest }) => {
                        const date = { year, month, day }
                        return {
                            ...topLevelRest,
                            ...rest,
                            ...spreadFunction({ date }),
                            date,
                        }
                    }),
                }
            }),
        }
    })
)

export const flattenDateStructuredPages = dateStructuredPages => (
    dateStructuredPages.map(yearMap => (
        Object.values(yearMap)[0].map(monthMap => (
            Object.values(monthMap)[0].map(pageMap => ({
                path: getPagePathFromConfig(pageMap),
                context: {
                    pageMap,
                },
            }))
        )).flat()
    )).flat()
)
