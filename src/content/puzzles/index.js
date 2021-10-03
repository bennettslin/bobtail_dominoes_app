import { PAGES_CONFIGS as PAGE_CONFIGS_2021 } from './2021'
import { addDaysToDate } from '../../utils/date'
import { getMapFromPageConfigs } from '../../utils/pages/config'
import { PUZZLES_PAGE } from '../../constants/pages'

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

export const getPageConfigForDate = (pathDate, id) => (
    getMapFromPageConfigs({
        topLevelPage: PUZZLES_PAGE,
        pageConfigs: getPageConfigsForDate(pathDate),
    })[id]
)

export const pagesList = [
    {
        heading: 2021,
        pages: PAGE_CONFIGS_2021,
    },
]
