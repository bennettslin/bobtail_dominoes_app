import { getIsTimeEligibleDate } from '..'
import { getPageLinkConfig } from '../../../pages/config'
import { flattenDateStructuredPages } from '../../../pages/dateStructure'

const filterOutFutureDay = ({ dateStructuredPages, year, month }) => {
    Object.keys(dateStructuredPages[year][month]).forEach(day => {
        if (!getIsTimeEligibleDate({ year, month, day })) {
            delete dateStructuredPages[year][month][day]
        }
    })
}

const filterOutFutureMonth = ({ dateStructuredPages, year }) => {
    Object.keys(dateStructuredPages[year]).forEach(month => {
        if (!getIsTimeEligibleDate({ year, month })) {
            delete dateStructuredPages[year][month]
        } else {
            filterOutFutureDay({
                dateStructuredPages,
                year,
                month,
            })
        }
    })
}

export const filterOutFutureDateStructuredPages = dateStructuredPages => {
    Object.keys(dateStructuredPages).forEach(year => {
        if (!getIsTimeEligibleDate({ year })) {
            delete dateStructuredPages[year]
        } else {
            filterOutFutureMonth({
                dateStructuredPages,
                year,
            })
        }
    })

    return dateStructuredPages
}

export const getLastDateStructuredPageForLink = dateStructuredPages => {
    const pagesList = flattenDateStructuredPages(dateStructuredPages)
    return getPageLinkConfig(
        pagesList[pagesList.length - 1],
    )
}
