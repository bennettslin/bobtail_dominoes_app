import { getIsTimeEligibleDate } from '..'

export const getTimeEligiblePage = page => (
    // eslint-disable-next-line no-nested-ternary
    page && (
        !page.date || getIsTimeEligibleDate(page.date)
    ) ? page : null
)

export const filterTimeEligiblePages = pages => (
    pages.filter(({ date }) => (
        getIsTimeEligibleDate(date)
    ))
)

export const getMostRecentPageFromDates = dates => (
    filterTimeEligiblePages(
        dates.map(date => ({ date })),
    ).reverse()
)[0]
