import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppLoadedContext from '../../../contexts/AppLoaded'
import PuzzleLinks from '../../../components/PuzzleLinks'
import TimeEligiblePage from '../TimeEligible'
import { datePropTypes, pagesPropTypes, puzzlePagePropTypes } from '../../../constants/propTypes'

const PuzzleMonthPage = ({
    pageContext: {
        pageMap: { puzzlesList, ...rest },
    },
}) => {
    const { didAppLoad } = useContext(AppLoadedContext)

    return didAppLoad && (
        <TimeEligiblePage
            {...{
                body: (
                    <PuzzleLinks {...{ puzzlesList }} />
                ),
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
            puzzlesList: PropTypes.arrayOf(puzzlePagePropTypes).isRequired,
            topLevelPage: PropTypes.string.isRequired,
        }),
    }),
}

export default PuzzleMonthPage
