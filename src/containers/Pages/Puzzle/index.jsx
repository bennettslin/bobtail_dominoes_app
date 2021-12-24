import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Puzzle from '../../../components/Puzzle'
import Page from '../../Page'
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
        { puzzleType, board, hand, moves, ...rest } = pageMap,
        { date } = rest

    return !didMount || getIsPastOrPresentDate(date) ? (
        <Page
            {...didMount && {
                body: (
                    <Puzzle
                        {...{
                            puzzleType,
                            board,
                            hand,
                            moves: moves.map(({ pitchLists, ...rest }) => ({
                                // Convert lists back to sets.
                                ...pitchLists && {
                                    pitchSets: pitchLists.map(list => (
                                        new Set(list)
                                    )),
                                },
                                ...rest,
                            })),
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

PuzzlePage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            title: PropTypes.string,
            topLevelPage: PropTypes.string.isRequired,
            date: PropTypes.shape({
                year: PropTypes.number.isRequired,
                month: PropTypes.number.isRequired,
                day: PropTypes.number.isRequired,
            }),
            puzzleType: PropTypes.string.isRequired,
            board: PropTypes.arrayOf(PropTypes.shape({
                dominoIndex: PropTypes.number.isRequired,
                placement: PropTypes.arrayOf(
                    PropTypes.arrayOf(
                        PropTypes.number.isRequired,
                    ).isRequired,
                ),
            })).isRequired,
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
        }),
    }),
}

export default getDidMountHoc(PuzzlePage)
