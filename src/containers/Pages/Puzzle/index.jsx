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
        { puzzleType, ...rest } = pageMap,
        { date } = rest

    return (
        !didMount || getIsPastOrPresentDate(date) ? (
            <Page
                {...didMount && {
                    body: (
                        <Puzzle
                            {...{
                                puzzleType,
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
            puzzleType: PropTypes.string,
        }),
    }),
}

export default getDidMountHoc(PuzzlePage)
