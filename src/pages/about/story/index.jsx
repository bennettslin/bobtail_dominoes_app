import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/about'

const id = 'story'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Our story',
            body: `
Story placeholder.
            `,
        }}
    />
)

export default Component
