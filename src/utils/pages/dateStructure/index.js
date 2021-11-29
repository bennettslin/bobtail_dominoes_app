import { getPagePathFromConfig } from '../config'

export const getDateValueFromMaps = maps => (
    parseInt(Object.keys(maps)[0])
)

export const parseDateStructuredPages = ({
    dateStructuredPages,
    spreadFunction = () => ({}),
    ...topLevelRest
}) => (
    dateStructuredPages.map(yearMaps => {
        const year = getDateValueFromMaps(yearMaps)
        return {
            [year]: yearMaps[year].map(monthMaps => {
                const month = getDateValueFromMaps(monthMaps)
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
