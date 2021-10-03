import { getLinkConfigsByDate } from '../../utils/pages/puzzles'
import PAGES_MAPS_2021 from './2021'

const PAGES_LIST = [
    {
        heading: 2021,
        pages: getLinkConfigsByDate(PAGES_MAPS_2021),
    },
]

export default PAGES_LIST
