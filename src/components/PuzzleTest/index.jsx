import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PuzzleBoard from '../Puzzle/Board'
import PuzzleTestAside from './Aside'
import PuzzleTestButton from './Button'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'
import { getMaximumPuzzle } from '../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../utils/music/puzzles/missing'
import { getRegularPuzzle } from '../../utils/music/puzzles/regular'
import './style'

const PuzzleTest = () => {
    const
        [board, setBoard] = useState([]),
        [hand, setHand] = useState(),
        [moves, setMoves] = useState([]),
        [puzzleType, setPuzzleType] = useState('')

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(
                getTextForPuzzle({ board, hand, moves, puzzleType }),
            )
        } catch {
            setTimeout(copyTextToClipboard, 1000)
        }
    }

    const setPuzzle = ({ board, hand, moves, puzzleType }) => {
        if (board) {
            setBoard(board)
            setHand(hand)
            setMoves(moves)
            setPuzzleType(puzzleType)
        }
    }

    useEffect(() => {
        copyTextToClipboard()
    }, [board, hand, moves, puzzleType])

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
                <PuzzleTestButton
                    {...{
                        text: 'Regular puzzle',
                        getPuzzle: getRegularPuzzle,
                        setPuzzle,
                    }}
                />
                <PuzzleTestButton
                    {...{
                        text: 'Missing puzzle',
                        getPuzzle: getMissingPuzzle,
                        setPuzzle,
                    }}
                />
                <PuzzleTestButton
                    {...{
                        text: 'Maximum puzzle',
                        getPuzzle: getMaximumPuzzle,
                        setPuzzle,
                    }}
                />
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
                        hand,
                        moves,
                        puzzleType,
                        copyTextToClipboard,
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
