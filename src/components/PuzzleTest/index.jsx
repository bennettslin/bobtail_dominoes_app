import React, { useEffect, useState } from 'react'
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
        [moves, setMoves] = useState([])

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(
                getTextForPuzzle({ board, moves }),
            )
        } catch {
            setTimeout(copyTextToClipboard, 1000)
        }
    }

    const getPuzzle = ({ board, moves }) => {
        if (board) {
            setBoard(board)
            setMoves(moves)
        }
    }

    useEffect(() => {
        copyTextToClipboard()
    }, [board, moves])

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
                        moves,
                    }}
                />
                <PuzzleTestAside
                    {...{
                        board,
                        moves,
                        copyTextToClipboard,
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
