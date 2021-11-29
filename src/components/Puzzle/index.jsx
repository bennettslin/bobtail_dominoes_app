import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import Flex from '../Flex'
import './style'

const Puzzle = ({
    puzzleType,
    canShowAnswer,
}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const handleButtonClick = () => {
        setShowAnswer(!showAnswer)
    }

    return (
        <Flex
            {...{
                className: cx(
                    'Puzzle',
                ),
                flexDirection: 'column',
                alignItems: 'normal',
                gap: 'xs',
            }}
        >
            {puzzleType}
            {canShowAnswer ? (
                <Button
                    {...{
                        className: cx(
                            'colour__link',
                            'font__text',
                        ),
                        handleButtonClick,
                    }}
                >
                    {showAnswer ? 'Hide answer' : 'Show answer'}
                </Button>
            ) : (
                'Check back tomorrow for the answer!'
            )}
        </Flex>
    )
}

Puzzle.propTypes = {
    puzzleType: PropTypes.string.isRequired,
    canShowAnswer: PropTypes.bool.isRequired,
}

export default Puzzle
