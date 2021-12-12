import React, { useState } from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PuzzleBoard from '../Puzzle/Board'
import PuzzleTestAside from './Aside'
import MaximumButton from './MaximumButton'
import MissingButton from './MissingButton'
import RegularButton from './RegularButton'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'
import './style'

const PuzzleTest = () => {
    const
        [board, setBoard] = useState([]),
        [textValue, setTextValue] = useState('')

    const copyTextToClipboard = value => {
        navigator.clipboard.writeText(value || textValue)
    }

    const getPuzzle = ({ board }) => {
        if (board) {
            setBoard(board)
            const value = getTextForPuzzle({ board })
            copyTextToClipboard(value)
            setTextValue(value)
        }
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
                <RegularButton {...{ getPuzzle }} />
                <MissingButton {...{ getPuzzle }} />
                <MaximumButton {...{ getPuzzle }} />
            </Flex>
            <Flex {...{ gap: 'sm' }} >
                <PuzzleBoard
                    {...{
                        className: cx(
                            'PuzzleTestBoard',
                        ),
                        board,
                    }}
                />
                <PuzzleTestAside
                    {...{
                        textValue,
                        copyTextToClipboard,
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
