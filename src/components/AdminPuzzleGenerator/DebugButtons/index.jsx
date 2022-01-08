import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import AdminPuzzleGenerateButton from './GenerateButton'
import AdminPuzzleDateButton from './DateButton'

const AdminPuzzleDebugButtons = () => (
    <Flex
        {...{
            className: cx(
                'AdminPuzzleDebugButtons',
            ),
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
