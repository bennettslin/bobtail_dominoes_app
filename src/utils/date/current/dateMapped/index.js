import { getIsTimeEligibleDate } from '..'

const filterOutFutureDay = ({ dateMappedPages, year, month }) => {
    Object.keys(dateMappedPages[year][month]).forEach(day => {
        if (!getIsTimeEligibleDate({ year, month, day })) {
            delete dateMappedPages[year][month][day]
        }
    })
}

const filterOutFutureMonth = ({ dateMappedPages, year }) => {
    Object.keys(dateMappedPages[year]).forEach(month => {
        if (!getIsTimeEligibleDate({ year, month })) {
            delete dateMappedPages[year][month]
        } else {
            filterOutFutureDay({
                dateMappedPages,
                year,
                month,
            })
        }
    })
}

export const filterTimeEligibleDateMappedPages = dateMappedPages => {
    Object.keys(dateMappedPages).forEach(year => {
        if (!getIsTimeEligibleDate({ year })) {
            delete dateMappedPages[year]
        } else {
            filterOutFutureMonth({
                dateMappedPages,
                year,
            })
        }
    })

    return dateMappedPages
}
