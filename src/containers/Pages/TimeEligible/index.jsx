import React from 'react'
import NotFoundPage from '../NotFound'
import Page from '../../Page'
import { getIsTimeEligibleDate } from '../../../utils/date/current'
import { datePropTypes } from '../../../constants/propTypes'

const TimeEligiblePage = ({ date, ...rest }) => (
    getIsTimeEligibleDate(date) ? (
        <Page {...{ date, ...rest }} />
    ) : (
        <NotFoundPage />
    )
)

TimeEligiblePage.propTypes = {
    date: datePropTypes.isRequired,
}

export default TimeEligiblePage
