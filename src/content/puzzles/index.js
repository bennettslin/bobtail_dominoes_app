import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2021 from './2021'
import puzzles2022 from './2022'

const puzzles = populateDateMappedPages({
    dateMappedPages: {
        2021: puzzles2021,
        2022: puzzles2022,
    },
    topLevelPage: PUZZLES_PAGE,
})

export default puzzles
