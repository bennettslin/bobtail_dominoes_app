import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import { NOT_FOUND_PAGE } from '../../constants/pages'

const NotFound = () => (
    <Page {...{ page: NOT_FOUND_PAGE }}>
        <Heading>Page Not Found</Heading>
    </Page>
)

export default NotFound
