import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { boardPropTypes } from '../Board'
import Button from '../Button'
import DominoCard from '../DominoCard'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import PlayLog from '../Log/Play'
import StyledButtonText from '../Styled/ButtonText'
import StyledLog from '../Styled/Log'
import StyledShadow from '../Styled/Shadow'
import PuzzleBoard from './Board'
import { getPuzzleText } from './util'

const Puzzle = ({
    puzzleType,
    board,
    hand,
    moves,
    missingMoves,
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
            <Flex>
                <PuzzleBoard
                    {...{
                        board,
                        moves,
                        missingMoves,
                        showAnswer,
                        topChild: canShowAnswer ? (
                            <Button
                                {...{
                                    className: cx(
                                        'colour__link',
                                        'font__text',
                                    ),
                                    handleButtonClick,
                                }}
                            >
                                <StyledButtonText>
                                    {showAnswer ? 'Hide answer' : 'Show answer'}
                                </StyledButtonText>
                            </Button>
                        ) : (
                            <StyledShadow>
                                Check back tomorrow for the answer!
                            </StyledShadow>
                        ),
                    }}
                >
                    {showAnswer ? (
                        moves && (
                            <StyledLog>
                                <PlayLog {...{ moves }} />
                            </StyledLog>
                        )
                    ) : (
                        hand && (
                            <DominoCard
                                {...{
                                    hand,
                                    labelText: 'your hand',
                                }}
                            />
                        )
                    )}
                </PuzzleBoard>
            </Flex>
        </Flex>
    )
}

Puzzle.propTypes = {
    puzzleType: PropTypes.string.isRequired,
    canShowAnswer: PropTypes.bool.isRequired,
    board: boardPropTypes.isRequired,
    hand: PropTypes.object,
    moves: boardPropTypes,
    missingMoves: boardPropTypes,
}

export default Puzzle
