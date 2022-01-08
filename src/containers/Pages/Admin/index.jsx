import React from 'react'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import AdminPuzzleGenerator from '../../../components/AdminPuzzleGenerator'

const AdminPage = () => (
    IS_RUNTIME ? (
        <Page
            {...{
                id: 'admin',
                titleHeading: 'Admin page',
                body: (
                    <AdminPuzzleGenerator />
                ),
            }}
        />
    ) : (
        <NotFoundPage />
    )
)

export default AdminPage
