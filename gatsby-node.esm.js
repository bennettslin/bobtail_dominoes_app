import webpack from 'webpack'
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import { puzzleMonthPages, puzzlePages, puzzleYearPages } from './src/content/puzzles'
import {
    getIsProductionBuild,
    getIsRuntimeBuild,
} from './src/utils/server'

export const onCreateWebpackConfig = ({ actions }) => {
    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: buildDateTime,
                IS_RUNTIME: getIsRuntimeBuild(),
                IS_PRODUCTION: getIsProductionBuild(),
            }),

            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.svg'],
        },
    })
}

export const createPages = ({ actions }) => {
    puzzlePages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                './src/containers/Pages/Puzzle/index.jsx',
            ),
        })
    })

    puzzleMonthPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                './src/containers/Pages/PuzzleMonth/index.jsx',
            ),
        })
    })

    puzzleYearPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve(
                './src/containers/Pages/PuzzleYear/index.jsx',
            ),
        })
    })
}
