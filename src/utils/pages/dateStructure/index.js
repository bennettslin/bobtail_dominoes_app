import { getPagePathFromConfig } from '../config'

export const parseDateStructuredPages = ({
    dateStructuredPages,
    spreadFunction = () => ({}),
    ...topLevelRest
}) => (
    dateStructuredPages.map(yearMaps => {
        const year = parseInt(Object.keys(yearMaps)[0])
        return {
            [year]: yearMaps[year].map(monthMaps => {
                const month = parseInt(Object.keys(monthMaps)[0])
                return {
                    [month]: monthMaps[month].map(({ day, ...rest }) => {
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
    dateStructuredPages.map(yearMaps => (
        Object.values(yearMaps)[0].map(monthMaps => (
            Object.values(monthMaps)[0].map(pageMap => ({
                path: getPagePathFromConfig(pageMap),
                context: {
                    pageMap,
                },
            }))
        )).flat()
    )).flat()
)
