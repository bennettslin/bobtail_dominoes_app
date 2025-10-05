import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2024 from './2024'
import puzzles2025 from './2025'

const puzzles = populateDateMappedPages({
    dateMappedPages: {
        2024: puzzles2024,
        2025: puzzles2025,
    },
    topLevelPage: PUZZLES_PAGE,
})

export default puzzles
