import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import PuzzleLinks from '../../../components/PuzzleLinks'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleMonthPage = ({
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
            {...{
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

PuzzleMonthPage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            date: datePropTypes.isRequired,
            pages: pagesPropTypes.isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default getDidMountHoc(PuzzleMonthPage)
