import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { getRegularPuzzle } from '../../../utils/music/puzzles/regular'

const RegularButton = ({ getPuzzle }) => {
    const handleButtonClick = () => {
        getPuzzle(getRegularPuzzle({}))
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
            Regular puzzle
        </Button>
    )
}

RegularButton.propTypes = {
    getPuzzle: PropTypes.func.isRequired,
}

export default RegularButton
