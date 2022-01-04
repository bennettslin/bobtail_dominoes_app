import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'

const PuzzleTestButton = ({ text, getPuzzle, setPuzzle, ...rest }) => {
    const handleButtonClick = () => {
        setPuzzle(getPuzzle({ ...rest }))
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
