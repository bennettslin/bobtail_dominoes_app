import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppLoadedContext from '../../../contexts/AppLoaded'
import Puzzle from '../../../components/Puzzle'
import TimeEligiblePage from '../TimeEligible'
import { getIsTimeEligibleDate } from '../../../utils/date/current'
import { addDaysToDate } from '../../../utils/date'
import { puzzlePagePropTypes } from '../../../constants/propTypes'

const PuzzlePage = ({
    pageContext: {
        pageMap: { handList, moves, date, ...rest },
    } = {},
}) => {
    const { didAppLoad } = useContext(AppLoadedContext)

    return didAppLoad && (
        <TimeEligiblePage
            {...{
                body: (
                    <Puzzle
                        {...{
                            // Convert lists back to sets.
                            ...handList && {
                                hand: new Set(handList),
                            },
                            ...moves && {
                                moves: moves.map(({ pitchLists, ...rest }) => ({
                                    ...pitchLists && {
                                        pitchSets: pitchLists.map(list => (
                                            new Set(list)
                                        )),
                                    },
                                    ...rest,
                                })),
                            },
                            ...rest,
                            canShowAnswer: getIsTimeEligibleDate(
                                addDaysToDate(date, 1),
                            ),
                        }}
                    />
                ),
                date,
                ...rest,
            }}
        />
    )
}

PuzzlePage.propTypes = {
    pageContext: PropTypes.shape({
        pageMap: puzzlePagePropTypes,
    }),
}

export default PuzzlePage
