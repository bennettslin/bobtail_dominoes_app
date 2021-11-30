import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../Anchor'
import { formatHeadingForDate } from '../../../utils/date/format'
import { getPagePathFromConfig } from '../../../utils/pages/config'
import './style'

const PuzzleLink = ({
    topLevelPage,
    date,
}) => (
    <Anchor
        {...{
            pagePath: getPagePathFromConfig({ topLevelPage, date }),
        }}
    >
        {formatHeadingForDate(date)}
    </Anchor>
)

PuzzleLink.propTypes = {
    topLevelPage: PropTypes.string.isRequired,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    puzzleType: PropTypes.string.isRequired,
    board: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })).isRequired,
}

export default PuzzleLink
