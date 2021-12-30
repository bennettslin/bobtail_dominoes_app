import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import PuzzleLinks from '../../../components/PuzzleLinks'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleLinksPage = ({
    didMount,
    pageContext: {
        pageMap: {
            date,
            ...rest
        },
    },
}) => {

    return didMount ? (
        <Page
            {...didMount && {
                body: (
                    <PuzzleLinks {...{ date }} />
                ),
                ...rest,
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
            date: datePropTypes.isRequired,
            pages: pagesPropTypes.isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default getDidMountHoc(PuzzleLinksPage)
