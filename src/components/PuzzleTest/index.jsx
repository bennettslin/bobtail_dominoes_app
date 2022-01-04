import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PuzzleBoard from '../Puzzle/Board'
import PuzzleTestAside from './Aside'
import PuzzleTestButtons from './Buttons'
import PuzzleTestDateInputs from './DateInputs'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'
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
            <Flex
                {...{
                    justifyContent: 'spaceEvenly',
                }}
            >
                <PuzzleTestDateInputs />
            </Flex>
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
            <PuzzleTestButtons {...{ setPuzzle }} />
        </Flex>
    )
}

export default PuzzleTest
