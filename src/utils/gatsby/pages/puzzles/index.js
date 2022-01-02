import {
    puzzleMonthPages,
    puzzlePages,
    puzzleYearPages,
} from '../../../../content/puzzles/server'

export const createPuzzlePages = actions => {
    puzzlePages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                '../../../../containers/Pages/Puzzle/index.jsx',
            ),
        })
    })

    puzzleMonthPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                '../../../../containers/Pages/PuzzleMonth/index.jsx',
            ),
        })
    })

    puzzleYearPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                '../../../../containers/Pages/PuzzleYear/index.jsx',
            ),
        })
    })
}
