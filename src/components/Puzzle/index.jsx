import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import DominoCard from '../DominoCard'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import PlayLog from '../PlayLog'
import StyledButtonText from '../Styled/ButtonText'
import StyledPlayLog from '../Styled/PlayLog'
import StyledShadow from '../Styled/Shadow'
import PuzzleBoard from './Board'
import { getPuzzleText } from './util'

const Puzzle = ({
    puzzleType,
    board,
    hand,
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
            <Flex>
                <PuzzleBoard
                    {...{
                        board,
                        ...showAnswer && { moves },
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
                    {showAnswer && (
                        <StyledPlayLog centreText>
                            <PlayLog {...{ fontSize: 'md', moves }} />
                        </StyledPlayLog>
                    )}
                    {!showAnswer && hand && (
                        <DominoCard
                            {...{
                                hand,
                                labelText: 'your hand',
                            }}
                        />
                    )}
                </PuzzleBoard>
            </Flex>
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
    hand: PropTypes.object,
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
