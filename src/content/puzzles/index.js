import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2024 from './2024'

const puzzles = populateDateMappedPages({
    dateMappedPages: {
        2024: puzzles2024,
    },
    topLevelPage: PUZZLES_PAGE,
})

export default puzzles
