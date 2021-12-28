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
        [moves, setMoves] = useState([]),
        [puzzleText, setPuzzleText] = useState('')

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(puzzleText)
        } catch {
            setTimeout(copyTextToClipboard, 1000)
        }
    }

    const setPuzzle = ({ board = [], moves = [], ...rest } = {}) => {
        setBoard(board)
        setMoves(moves)
        setPuzzleText(getTextForPuzzle({ board, moves, ...rest }))
    }

    useEffect(() => {
        copyTextToClipboard()
    }, [puzzleText])

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
                <PuzzleTestAside {...{ puzzleText, copyTextToClipboard }} />
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
