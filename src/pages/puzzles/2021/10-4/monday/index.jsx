import React from 'react'
import Page from '../../../../../containers/Page'
import { pagesMap } from '../../../../../content/puzzles/2021/10-4'

const id = 'monday'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Monday puzzle',
            body: [
                `
Monday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
