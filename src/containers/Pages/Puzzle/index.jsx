import React from 'react'
import PropTypes from 'prop-types'
import { boardPropTypes } from '../../../components/Board'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Puzzle from '../../../components/Puzzle'
import Page, { datePropTypes } from '../../Page'
import NotFoundPage from '../NotFound'
import { getIsPastOrPresentDate } from '../../../utils/date/current'
import { addDaysToDate } from '../../../utils/date'

const PuzzlePage = ({
    didMount,
    pageContext: {
        pageMap,
    } = {},
}) => {
    const
        { handList, moves, ...rest } = pageMap,
        { date } = rest

    return !didMount || getIsPastOrPresentDate(date) ? (
        <Page
            {...didMount && {
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
                            canShowAnswer: getIsPastOrPresentDate(
                                addDaysToDate(date, 1),
                            ),
                        }}
                    />
                ),
                ...rest,
            }}
        />
    ) : (
        <NotFoundPage />
    )
}

export const handListPropTypes = PropTypes.arrayOf(
    PropTypes.number.isRequired,
)

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
            moves: PropTypes.arrayOf(PropTypes.shape({
                dominoIndex: PropTypes.number.isRequired,
                placement: PropTypes.arrayOf(
                    PropTypes.arrayOf(
                        PropTypes.number.isRequired,
                    ).isRequired,
                ),
                pitchLists: PropTypes.arrayOf(
                    PropTypes.arrayOf(
                        PropTypes.number.isRequired,
                    ).isRequired,
                ),
            })),
            missingMoves: boardPropTypes,
        }),
    }),
}

export default getDidMountHoc(PuzzlePage)
