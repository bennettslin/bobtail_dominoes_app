import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Board from '../Board'
import Button from '../Button'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import { getPuzzleText } from './util'
import { PUZZLE_BOARD_HEXAGON_WIDTH } from '../../constants/music/puzzle'
import './style'

const Puzzle = ({
    puzzleType,
    board,
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
            <Paragraph {...{ fontSize: 'md' }}>
                {getPuzzleText(puzzleType)}
            </Paragraph>
            <Board
                {...{
                    className: cx(
                        'PuzzleBoard',
                    ),
                    board,
                    boardHexagonalWidth: PUZZLE_BOARD_HEXAGON_WIDTH,
                    boardHexagonalBaseWidth: PUZZLE_BOARD_HEXAGON_WIDTH,
                }}
            />
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
    board: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })).isRequired,
}

export default Puzzle
