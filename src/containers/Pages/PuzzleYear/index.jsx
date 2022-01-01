import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import TimeEligiblePage from '../TimeEligible'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleYearPage = ({
    didMount,
    pageContext: {
        pageMap: { date, ...rest },
    },
}) => {
    return didMount && (
        <TimeEligiblePage
            {...{
                body: (
                    'Testing'
                ),
                date,
                ...rest,
            }}
        />
    )
}

PuzzleYearPage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            date: datePropTypes.isRequired,
            pages: pagesPropTypes.isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default getDidMountHoc(PuzzleYearPage)
