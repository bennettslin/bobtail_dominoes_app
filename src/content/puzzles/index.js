import { filterTimeEligibleDateMappedPages } from '../../utils/date/current/dateMapped'
import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2020 from './2020'
import puzzles2021 from './2021'
import puzzles2022 from './2022'

const puzzles = populateDateMappedPages({
    dateMappedPages: {
        2020: puzzles2020,
        2021: puzzles2021,
        2022: puzzles2022,
    },
    topLevelPage: PUZZLES_PAGE,
    dateSpreadFunction: ({ month, day }) => ({
        title: `Puzzle ${[month, day].join('/')}`,
    }),
})

// For client side. Only past and present puzzles.
export default filterTimeEligibleDateMappedPages(puzzles)
