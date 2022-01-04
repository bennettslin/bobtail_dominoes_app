import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../Flex'
import PuzzleBoard from '../Puzzle/Board'
import PuzzleTestAside from './Aside'
import PuzzleTestDebugButtons from './DebugButtons'
import PuzzleTestDateInputs from './DateInputs'
import PuzzleTestGenerateButtons from './GenerateButtons'
import { mapPuzzleTestDate } from '../../redux/admin/selector'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'
import './style'

const PuzzleTest = () => {
    const
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        [board, setBoard] = useState([]),
        [moves, setMoves] = useState([]),
        [puzzleText, setPuzzleText] = useState(''),
        { day } = puzzleTestDate

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
            getTextForPuzzle({
                day,
                board,
                moves,
                missingMoves,
                ...rest,
            }),
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
                <PuzzleTestGenerateButtons {...{ setPuzzle }} />
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
            <PuzzleTestDebugButtons {...{ setPuzzle }} />
        </Flex>
    )
}

export default PuzzleTest
