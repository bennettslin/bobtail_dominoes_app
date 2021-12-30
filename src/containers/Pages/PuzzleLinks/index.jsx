import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import PuzzleLinks from '../../../components/PuzzleLinks'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
// import { datePropTypes } from '../../../constants/propTypes'

const PuzzleLinksPage = ({
    didMount,
    pageContext: {
        id,
    } = {},
}) => {
    return didMount ? (
        <Page
            {...didMount && {
                id,
                pages: [
                    { id: '2022' },
                    { id: '2021' },
                    { id: '2020' },
                ],
                topLevelPage: 'puzzles',
                body: (
                    <PuzzleLinks />
                ),
            }}
        />
    ) : (
        <NotFoundPage />
    )
}

PuzzleLinksPage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            id: PropTypes.string.isRequired,
            // topLevelPage: PropTypes.string.isRequired,
            // date: datePropTypes,
        }),
    }),
}

export default getDidMountHoc(PuzzleLinksPage)
