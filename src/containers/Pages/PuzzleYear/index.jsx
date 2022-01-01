import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import PuzzleMonthLinks from '../../../components/PuzzleMonthLinks'
import TimeEligiblePage from '../TimeEligible'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleYearPage = ({
    didMount,
    pageContext: {
        pageMap: { date, topLevelPage, ...rest },
    },
}) => {
    return didMount && (
        <TimeEligiblePage
            {...{
                body: (
                    <PuzzleMonthLinks {...{ date, topLevelPage }} />
                ),
                date,
                topLevelPage,
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
