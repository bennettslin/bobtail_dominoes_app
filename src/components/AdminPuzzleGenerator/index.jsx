import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AdminDateInputs from '../AdminDateInputs'
import Flex from '../Flex'
import AdminPuzzleAside from './Aside'
import AdminPuzzleBoard from './Board'
import AdminPuzzleDebugButtons from './DebugButtons'
import AdminPuzzleEngine from './Engine'
import { updateCurrentPitchSet } from '../../redux/audio/action'

const AdminPuzzleGenerator = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // Make notification sound a happy C major chord.
        dispatch(updateCurrentPitchSet(new Set([0, 4, 7])))
    }, [])

    return (
        <Flex
            {...{
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
                <AdminPuzzleAside />
            </Flex>
            <AdminPuzzleDebugButtons />
        </Flex>
    )
}

export default AdminPuzzleGenerator
