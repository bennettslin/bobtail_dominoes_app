import React from 'react'
import Page from '../../../../../containers/Page'
import { pagesMap } from '../../../../../content/puzzles/2021/9-27'

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
