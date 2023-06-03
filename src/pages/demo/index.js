import React from 'react'
import Demo from '../../components/Demo'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            metaDescription: `Watch Bennett and his friends play the game!`,
        }}
    >
        <Demo />
    </Page>
)

export default Component
