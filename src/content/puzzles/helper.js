import map2021 from './2021/map'
import { getMarkdownLinkFromDate } from '../../utils/format/markdown'
import { PUZZLES_PAGE } from '../../constants/pages'

const map = {
    ...map2021,
}

export const getMarkdownLinkFromEssayDate = ({ year, month, day }) => (
    getMarkdownLinkFromDate({
        map,
        root: PUZZLES_PAGE,
        year,
        month,
        day,
    })
)
