import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/puzzles/2021'

const id = 'old-links'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
Old links content.
            `,
        }}
    />
)

export default Component
