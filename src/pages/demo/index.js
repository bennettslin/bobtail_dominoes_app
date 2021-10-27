import React from 'react'
import Demo from '../../components/Demo'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: (
                <Demo />
            ),
        }}
    />
)

export default Component
