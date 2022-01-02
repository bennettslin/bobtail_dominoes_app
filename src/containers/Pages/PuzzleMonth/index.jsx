import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppLoadedContext from '../../../contexts/AppLoaded'
import PuzzleLinks from '../../../components/PuzzleLinks'
import TimeEligiblePage from '../TimeEligible'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleMonthPage = ({
    pageContext: {
        pageMap: { date, ...rest },
    },
}) => {
    const { didAppLoad } = useContext(AppLoadedContext)

    return didAppLoad && (
        <TimeEligiblePage
            {...{
                body: (
                    <PuzzleLinks {...{ date }} />
                ),
                date,
                ...rest,
            }}
        />
    )
}

PuzzleMonthPage.propTypes = {
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            date: datePropTypes.isRequired,
            pages: pagesPropTypes.isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default PuzzleMonthPage
