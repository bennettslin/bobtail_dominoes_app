import { addDaysToDate } from '../../date'
import { formatWeekLinkForDate } from '../../date/format'
import { getPagesMap } from '../config'
import { PUZZLES_PAGE } from '../../../constants/pages'
import { filterPastAndPresentDates } from '../../date/puzzles'

const PAGE_IDS = [
    { id: 'monday' },
    { id: 'wednesday', increment: 2 },
    { id: 'friday', increment: 4 },
    { id: 'sunday', increment: 6 },
]

export const getPagesMapsForDates = pathDates => (
    // Filter out future week.
    filterPastAndPresentDates(pathDates).map(pathDate => (
        getPagesMap(
            // Filter out future day.
            filterPastAndPresentDates(
                PAGE_IDS.map(({ id, increment }) => ({
                    id,
                    pathDate,
                    date: increment ?
                        addDaysToDate(pathDate, increment) :
                        pathDate,
                })),
            ),
            PUZZLES_PAGE,
        )
    ))
)

export const getLinkConfigsByDate = pagesMaps => (
    pagesMaps.map(({ monday: { date } }) => ({
        id: 'monday',
        title: formatWeekLinkForDate(date),
        date,
    }))
)
