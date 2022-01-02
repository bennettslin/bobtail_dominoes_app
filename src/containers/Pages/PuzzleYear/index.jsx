import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppLoadedContext from '../../../contexts/AppLoaded'
import PuzzleMonthLinks from '../../../components/PuzzleMonthLinks'
import TimeEligiblePage from '../TimeEligible'
import { datePropTypes, pagesPropTypes } from '../../../constants/propTypes'

const PuzzleYearPage = ({
    pageContext: {
        pageMap: { date, topLevelPage, monthsList, ...rest },
    },
}) => {
    const { didAppLoad } = useContext(AppLoadedContext)

    return didAppLoad && (
        <TimeEligiblePage
            {...{
                body: (
                    <PuzzleMonthLinks
                        {...{
                            date,
                            topLevelPage,
                            monthsList,
                        }}
                    />
                ),
                date,
                topLevelPage,
                ...rest,
            }}
        />
    )
}

PuzzleYearPage.propTypes = {
    pageContext: PropTypes.shape({
        pageMap: PropTypes.shape({
            date: datePropTypes.isRequired,
            pages: pagesPropTypes.isRequired,
            monthsList: PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default PuzzleYearPage
