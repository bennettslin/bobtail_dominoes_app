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
import { DAY_OF_WEEK_DEBUG_BUTTON_CONFIGS } from './helper'

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

    const setPuzzle = ({
        board = [],
        moves,
        missingMoves,
        ...rest
    } = {}) => {
        setBoard(board)
        setMoves(moves || missingMoves || [])
        setPuzzleText(
            getTextForPuzzle({ board, moves, missingMoves, ...rest }),
        )
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
            <Flex {...{ gap: 'sm' }} >
                <PuzzleBoard
                    showAnswer
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
            <Flex
                {...{
                    justifyContent: 'spaceEvenly',
                    gap: 'xs',
                }}
            >
                {DAY_OF_WEEK_DEBUG_BUTTON_CONFIGS.map((config, index) => (
                    <PuzzleTestButton
                        {...{
                            key: index,
                            setPuzzle,
                            ...config,
                        }}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default PuzzleTest
