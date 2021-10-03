import { addDaysToDate, getWeekLinkForDate } from '../../date'
import { getMapFromPageConfigs } from '../config'
import { PUZZLES_PAGE } from '../../../constants/pages'

const
    INCREMENT_WEDNESDAY = 2,
    INCREMENT_FRIDAY = 4,
    INCREMENT_SUNDAY = 6

const PUZZLE_DAYS = [
    {
        id: 'monday',
    },
    {
        id: 'wednesday',
        increment: INCREMENT_WEDNESDAY,
    },
    {
        id: 'friday',
        increment: INCREMENT_FRIDAY,
    },
    {
        id: 'sunday',
        increment: INCREMENT_SUNDAY,
    },
]

const getPageConfigsForDate = pathDate => (
    PUZZLE_DAYS.map(({ id, increment }) => ({
        id,
        pathDate,
        date: increment ? addDaysToDate(pathDate, increment) : pathDate,
    }))
)

const getMapForDate = pathDate => (
    getMapFromPageConfigs({
        topLevelPage: PUZZLES_PAGE,
        pageConfigs: getPageConfigsForDate(pathDate),
    })
)

export const getPageConfigForDate = (pathDate, id) => (
    getMapForDate(pathDate)[id]
)

export const getPagesConfigsForDates = pagesConfigs => (
    pagesConfigs.map(date => ({
        id: 'monday',
        title: getWeekLinkForDate(date),
        date,
    }))
)
