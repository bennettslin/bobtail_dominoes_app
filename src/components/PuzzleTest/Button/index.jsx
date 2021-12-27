import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'

const PuzzleTestButton = ({ text, getPuzzle, setPuzzle }) => {
    const handleButtonClick = () => {
        setPuzzle(getPuzzle())
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
            {text}
        </Button>
    )
}

PuzzleTestButton.propTypes = {
    text: PropTypes.string.isRequired,
    getPuzzle: PropTypes.func.isRequired,
    setPuzzle: PropTypes.func.isRequired,
}

export default PuzzleTestButton
