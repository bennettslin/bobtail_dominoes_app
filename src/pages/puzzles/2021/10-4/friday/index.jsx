import React from 'react'
import Page from '../../../../../containers/Page'
import { pagesMap } from '../../../../../content/puzzles/2021/10-4'

const id = 'friday'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Friday puzzle',
            body: [
                `
Friday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
