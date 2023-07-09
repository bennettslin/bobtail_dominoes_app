import { populateDateMappedPages } from '../../utils/pages/dateMapped/populate'
import { PUZZLES_PAGE } from '../../constants/pages'
import puzzles2021 from './2021'
import puzzles2022 from './2022'
import puzzles2023 from './2023'
import puzzles2024 from './2024'

const puzzles = populateDateMappedPages({
    dateMappedPages: {
        2021: puzzles2021,
        2022: puzzles2022,
        2023: puzzles2023,
        2024: puzzles2024,
    },
    topLevelPage: PUZZLES_PAGE,
})

export default puzzles
