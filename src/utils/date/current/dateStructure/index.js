import { getIsPastOrPresentDate } from '..'

const filterOutFutureDay = ({ dateStructuredPages, year, month }) => {
    Object.keys(dateStructuredPages[year][month]).forEach(day => {
        if (!getIsPastOrPresentDate({ year, month, day })) {
            delete dateStructuredPages[year][month][day]
        }
    })
}

const filterOutFutureMonth = ({ dateStructuredPages, year }) => {
    Object.keys(dateStructuredPages[year]).forEach(month => {
        if (!getIsPastOrPresentDate({ year, month })) {
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
        if (!getIsPastOrPresentDate({ year })) {
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
