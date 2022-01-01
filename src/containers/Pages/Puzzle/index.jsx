import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Puzzle from '../../../components/Puzzle'
import TimeEligiblePage from '../TimeEligible'
import { getIsTimeEligibleDate } from '../../../utils/date/current'
import { addDaysToDate } from '../../../utils/date'
import { boardPropTypes, datePropTypes, handListPropTypes } from '../../../constants/propTypes'

const PuzzlePage = ({
    didMount,
    pageContext: {
        pageMap: { handList, moves, date, ...rest },
    } = {},
}) => {
    return didMount && (
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
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            title: PropTypes.string,
            topLevelPage: PropTypes.string.isRequired,
            date: datePropTypes,
            puzzleType: PropTypes.string.isRequired,
            board: boardPropTypes.isRequired,
            handList: handListPropTypes,
            moves: boardPropTypes,
            missingMoves: boardPropTypes,
        }),
    }),
}

export default getDidMountHoc(PuzzlePage)
