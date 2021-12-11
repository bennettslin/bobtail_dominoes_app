import React, { useState } from 'react'
import cx from 'classnames'
import Board from '../Board'
import Button from '../Button'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import { hsl } from '../../utils/svgs'

const PUZZLE_BOARD_HEXAGON_WIDTH = 6

const PuzzleTest = () => {
    const
        [board, setBoard] = useState([]),
        [textValue, setTextValue] = useState('')

    const copyTextToClipboard = value => {
        navigator.clipboard.writeText(value || textValue)
    }

    const onNewRegularPuzzleClick = () => {
        setBoard([])
        const value = 'regular placeholder'
        setTextValue(value)
        copyTextToClipboard(value)
    }

    const onNewMissingPuzzleClick = () => {
        setBoard([])
        const value = 'missing placeholder'
        setTextValue(value)
        copyTextToClipboard(value)
    }

    const onNewMaximumPuzzleClick = () => {
        setBoard([])
        const value = 'maximum placeholder'
        setTextValue(value)
        copyTextToClipboard(value)
    }

    const onCopyButtonClick = () => {
        copyTextToClipboard()
    }

    return (
        <Flex
            {...{
                className: cx(
                    'PuzzleTest',
                ),
                flexDirection: 'column',
                alignItems: 'normal',
                gap: 'xs',
            }}
        >
            <Flex
                {...{
                    justifyContent: 'spaceEvenly',
                    gap: 'xs',
                }}
            >
                <Button
                    {...{
                        className: cx(
                            'colour__link',
                            'font__text',
                            'fontSize__md',
                        ),
                        handleButtonClick: onNewRegularPuzzleClick,
                    }}
                >
                    New regular puzzle
                </Button>
                <Button
                    {...{
                        className: cx(
                            'colour__link',
                            'font__text',
                            'fontSize__md',
                        ),
                        handleButtonClick: onNewMissingPuzzleClick,
                    }}
                >
                    New missing puzzle
                </Button>
                <Button
                    {...{
                        className: cx(
                            'colour__link',
                            'font__text',
                            'fontSize__md',
                        ),
                        handleButtonClick: onNewMaximumPuzzleClick,
                    }}
                >
                    New maximum puzzle
                </Button>
            </Flex>
            <Flex
                {...{
                    className: cx(
                        'PuzzleBoard__wrapper',
                    ),
                    gap: 'sm',
                }}
            >
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
                <Flex
                    {...{
                        className: cx(
                            'PuzzleTest__aside',
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
                            className: cx(
                                'fontSize__md',
                            ),
                            style: {
                                height: '100%',
                                minWidth: '240px',
                            },
                        }}
                    >
                        {textValue}
                    </Paragraph>
                    <Button
                        {...{
                            className: cx(
                                'colour__link',
                                'font__text',
                                'fontSize__md',
                            ),
                            handleButtonClick: onCopyButtonClick,
                        }}
                    >
                        Copy
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
