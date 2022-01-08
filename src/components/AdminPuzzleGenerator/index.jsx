import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import AdminDateInputs from '../AdminDateInputs'
import Flex from '../Flex'
import AdminPuzzleBoard from './Board'
import AdminPuzzleAside from './Aside'
import AdminPuzzleDebugButtons from './DebugButtons'
import AdminPuzzleEngine from './Engine'
import AdminPuzzleGenerateButtons from './GenerateButtons'
import { mapPuzzleTestDate } from '../../redux/admin/selector'
import { queuePlay, updateCurrentPitchSet } from '../../redux/audio/action'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'

const AdminPuzzleGenerator = () => {
    const
        dispatch = useDispatch(),
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

    useEffect(() => {
        if (board.length) {
            // Play sound to notify me when a trial succeeded.
            dispatch(queuePlay(true))
        }
    }, [board])

    useEffect(() => {
        // Make notification sound a happy C major chord.
        dispatch(updateCurrentPitchSet(new Set([0, 4, 7])))
    }, [])

    return (
        <Flex
            {...{
                className: cx(
                    'AdminPuzzleGenerator',
                ),
                flexDirection: 'column',
                alignItems: 'normal',
                gap: 'xs',
            }}
        >
            <AdminPuzzleEngine />
            <Flex
                {...{
                    justifyContent: 'spaceEvenly',
                }}
            >
                <AdminDateInputs />
                <AdminPuzzleGenerateButtons {...{ setPuzzle }} />
            </Flex>
            <Flex {...{ gap: 'sm' }} >
                <AdminPuzzleBoard {...{ board, moves }} />
                <AdminPuzzleAside {...{ puzzleText, copyTextToClipboard }} />
            </Flex>
            <AdminPuzzleDebugButtons {...{ setPuzzle }} />
        </Flex>
    )
}

export default AdminPuzzleGenerator
