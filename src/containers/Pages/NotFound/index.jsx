import React from 'react'
import Page from '../../Page'

const NotFoundPage = () => (
    <Page
        {...{
            pageHeading: 'Page not found',
            noShare: true,
        }}
    />
)

export default NotFoundPage
