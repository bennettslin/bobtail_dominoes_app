import React from 'react'
import Flex from '../../Flex'
import AdminPuzzleGenerateButton from './GenerateButton'
import AdminPuzzleDateButton from './DateButton'

const AdminPuzzleDebugButtons = () => (
    <Flex
        {...{
            justifyContent: 'spaceEvenly',
            gap: 'xs',
        }}
    >
        For debugging only:
        <AdminPuzzleDateButton {...{ direction: -1 }}>
            Previous
        </AdminPuzzleDateButton>
        <AdminPuzzleGenerateButton />
        <AdminPuzzleDateButton {...{ direction: 1 }}>
            Next
        </AdminPuzzleDateButton>
    </Flex>
)

export default AdminPuzzleDebugButtons
