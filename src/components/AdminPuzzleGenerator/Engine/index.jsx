import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AdminPuzzleCounterEngine from './Counter'
import AdminPuzzleGeneratorEngine from './Generator'
import AdminPuzzleTextEngine from './Text'
import { updateCurrentPitchSet } from '../../../redux/audio/action'

const AdminPuzzleEngine = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // Make notification sound a happy C major chord.
        dispatch(updateCurrentPitchSet(new Set([0, 4, 7])))
    }, [])

    return (
        <>
            <AdminPuzzleCounterEngine />
            <AdminPuzzleGeneratorEngine />
            <AdminPuzzleTextEngine />
        </>
    )
}

export default AdminPuzzleEngine
