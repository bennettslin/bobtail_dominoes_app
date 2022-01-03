import webpack from 'webpack'
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import { puzzleMonthDates } from './src/content/puzzles/server'
import { createPuzzlePages } from './src/utils/gatsby/pages/puzzles'
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
                PUZZLE_MONTH_DATES: JSON.stringify(puzzleMonthDates),
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
    createPuzzlePages(actions)
}
