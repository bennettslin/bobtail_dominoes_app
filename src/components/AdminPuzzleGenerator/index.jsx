import React from 'react'
import AdminDateInputs from '../AdminDateInputs'
import Flex from '../Flex'
import AdminPuzzleAside from './Aside'
import AdminPuzzleBoard from './Board'
import AdminPuzzleCounterButton from './CounterButton'
import AdminPuzzleDebugButtons from './DebugButtons'
import AdminPuzzleEngine from './Engine'

const AdminPuzzleGenerator = () => (
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
            <AdminPuzzleCounterButton />
        </Flex>
        <Flex {...{ gap: 'sm' }} >
            <AdminPuzzleBoard />
            <AdminPuzzleAside />
        </Flex>
        <AdminPuzzleDebugButtons />
    </Flex>
)

export default AdminPuzzleGenerator
