import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import { getIsPastOrPresentDate } from '../../../utils/date/puzzles'

const PuzzlePage = ({
    didMount,
    pageContext: {
        pageMap,
        content,
    } = {},
}) => (
    !didMount || getIsPastOrPresentDate(pageMap.date) ? (
        <Page
            {...didMount && {
                ...pageMap,
                body: [
                    content,
                ],
            }}
        />
    ) : (
        <NotFoundPage />
    )
)

PuzzlePage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            pages: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                date: PropTypes.shape({
                    year: PropTypes.number.isRequired,
                    month: PropTypes.number.isRequired,
                    day: PropTypes.number.isRequired,
                }),
                pathDate: PropTypes.shape({
                    year: PropTypes.number.isRequired,
                    month: PropTypes.number.isRequired,
                    day: PropTypes.number.isRequired,
                }),
            })),
            topLevelPage: PropTypes.string.isRequired,
            date: PropTypes.shape({
                year: PropTypes.number.isRequired,
                month: PropTypes.number.isRequired,
                day: PropTypes.number.isRequired,
            }),
            pathDate: PropTypes.shape({
                year: PropTypes.number.isRequired,
                month: PropTypes.number.isRequired,
                day: PropTypes.number.isRequired,
            }),
        }),
    }),
}

export default getDidMountHoc(PuzzlePage)
