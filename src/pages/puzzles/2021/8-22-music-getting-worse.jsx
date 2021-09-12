import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/puzzles/2021'

const id = 'music-getting-worse'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
Music getting worse content.
            `,
        }}
    />
)

export default Component
