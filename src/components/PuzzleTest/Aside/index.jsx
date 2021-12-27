import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { boardPropTypes } from '../../Board'
import Paragraph from '../../Paragraph'
import Flex from '../../Flex'
import Button from '../../Button'
import { hsl } from '../../../utils/svgs'
import { getTextForPuzzle } from '../../../utils/music/puzzles/format'

const PuzzleTestAside = ({
    board,
    hand,
    moves,
    puzzleType,
    copyTextToClipboard,
}) => {
    const handleButtonClick = () => (
        copyTextToClipboard()
    )

    return (
        <Flex
            {...{
                className: cx(
                    'PuzzleTestAside',
                ),
                flexDirection: 'column',
                gap: 'xs',
                style: {
                    height: '100%',
                    padding: '16px',
                    backgroundColor: hsl(170, 28, 87),
                    borderRadius: '16px',
                },
            }}
        >
            <Paragraph
                {...{
                    style: {
                        height: '100%',
                        minWidth: '240px',
                    },
                }}
            >
                {getTextForPuzzle({ board, hand, moves, puzzleType })}
            </Paragraph>
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
            Copy
            </Button>
        </Flex>
    )
}

PuzzleTestAside.propTypes = {
    board: boardPropTypes,
    hand: PropTypes.object,
    moves: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })),
    puzzleType: PropTypes.string.isRequired,
    copyTextToClipboard: PropTypes.func.isRequired,
}

export default PuzzleTestAside
