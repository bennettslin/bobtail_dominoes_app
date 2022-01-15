import React from 'react'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import { getIsAdmin } from '../../../utils/admin'

const AdminPage = props => (
    getIsAdmin() ? (
        <Page {...props} />
    ) : (
        <NotFoundPage />
    )
)

export default AdminPage
