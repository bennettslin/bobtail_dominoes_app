import puzzles2021 from './2021'
import { PUZZLES_PAGE } from '../../constants/pages'

export default [
    ...puzzles2021,
].map(puzzle => ({
    ...puzzle,
    topLevelPage: PUZZLES_PAGE,
}))
