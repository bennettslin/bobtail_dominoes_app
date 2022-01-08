import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import AdminDateInputs from '../AdminDateInputs'
import Flex from '../Flex'
import AdminPuzzleAside from './Aside'
import AdminPuzzleBoard from './Board'
import AdminPuzzleDebugButtons from './DebugButtons'
import AdminPuzzleEngine from './Engine'
import { mapPuzzleTestDate } from '../../redux/puzzle/selector'
import { updateCurrentPitchSet } from '../../redux/audio/action'
import { getTextForPuzzle } from '../../utils/music/puzzles/format'

const AdminPuzzleGenerator = () => {
    const
        dispatch = useDispatch(),
        puzzleTestDate = useSelector(mapPuzzleTestDate),
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
            <Flex {...{ justifyContent: 'spaceEvenly' }} >
                <AdminDateInputs />
            </Flex>
            <Flex {...{ gap: 'sm' }} >
                <AdminPuzzleBoard />
                <AdminPuzzleAside {...{ puzzleText, copyTextToClipboard }} />
            </Flex>
            <AdminPuzzleDebugButtons />
        </Flex>
    )
}

export default AdminPuzzleGenerator
