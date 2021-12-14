import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { getMaximumPuzzle } from '../../../utils/music/puzzles/maximum'

const MaximumButton = ({ getPuzzle }) => {
    const handleButtonClick = () => {
        getPuzzle(getMaximumPuzzle())
    }

    return (
        <Button
            {...{
                className: cx(
                    'colour__link',
                    'font__text',
                    'fontSize__md',
                ),
                handleButtonClick,
            }}
        >
            Maximum puzzle
        </Button>
    )
}

MaximumButton.propTypes = {
    getPuzzle: PropTypes.func.isRequired,
}

export default MaximumButton
