import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { getMissingPuzzle } from '../../../utils/music/puzzles/missing'

const MissingButton = ({ getPuzzle }) => {
    const handleButtonClick = () => {
        getPuzzle(getMissingPuzzle({}))
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
            Missing puzzle
        </Button>
    )
}

MissingButton.propTypes = {
    getPuzzle: PropTypes.func.isRequired,
}

export default MissingButton
