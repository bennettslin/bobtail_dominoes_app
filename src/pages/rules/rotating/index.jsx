import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'

const id = 'rotating'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Rotating dominoes',
            body: `
Rotation placeholder.
            `,
        }}
    />
)

export default Component
