import React from 'react'
import AdminPage from '../../containers/Pages/Admin'
import AdminPuzzleGenerator from '../../components/AdminPuzzleGenerator'
import PAGES_MAP from '../../content/admin'

const ID = 'generator'

const Component = () => (
    <AdminPage
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Puzzle generator',
            body: (
                <AdminPuzzleGenerator />
            ),
        }}
    />
)

export default Component
