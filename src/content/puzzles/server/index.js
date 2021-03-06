import { getPagesList } from '../../../utils/pages/config'
import { contextualisePageConfigs } from '../../../utils/pages/context'
import {
    flattenDateMappedPages,
    flattenMonthMappedPages,
    flattenYearMappedPages,
} from '../../../utils/pages/dateMapped'
import { addDirectionPages } from '../../../utils/pages/directionPages'
import {
    addPuzzleLinksForYears,
    addPuzzlesForMonths,
} from '../../../utils/pages/puzzles'
import { addTabbedPages } from '../../../utils/pages/tabbedPages'
import { PUZZLES_PAGE } from '../../../constants/pages'
import puzzles from '..'

export const puzzleMonthDates = flattenMonthMappedPages(puzzles)

export const puzzlePages = (
    contextualisePageConfigs(
        addDirectionPages(
            addTabbedPages({
                configs: flattenDateMappedPages(puzzles),
                truncatePages: true,
            }),
        ),
    )
)

export const puzzleMonthPages = (
    contextualisePageConfigs(
        addPuzzlesForMonths({
            configs: getPagesList({
                pageDates: puzzleMonthDates,
                topLevelPage: PUZZLES_PAGE,
                truncatePages: true,
            }),
            dateMappedPages: puzzles,
        }),
    )
)

export const puzzleYearPages = (
    contextualisePageConfigs(
        addPuzzleLinksForYears({
            configs: getPagesList({
                pageDates: flattenYearMappedPages(puzzles),
                topLevelPage: PUZZLES_PAGE,
                truncatePages: true,
            }),
            dateMappedPages: puzzles,
        }),
    )
)

