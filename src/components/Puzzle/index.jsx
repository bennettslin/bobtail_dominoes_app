import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import PuzzleBoard from './Board'
import { getPuzzleText } from './util'
import PlayLog from '../PlayLog'

const Puzzle = ({
    puzzleType,
    board,
    moves,
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
            <Flex>
                <PuzzleBoard
                    {...{
                        board,
                        ...showAnswer && { moves },
                    }}
                />
            </Flex>
            {showAnswer && (
                <Flex>
                    <PlayLog {...{ fontSize: 'md', moves }} />
                </Flex>
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
    moves: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })),
}

export default Puzzle
