import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/about'

const id = 'design'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Design specs',
            body: [
                `
Design specs placeholder.
                `,
            ],
        }}
    />
)

export default Component
