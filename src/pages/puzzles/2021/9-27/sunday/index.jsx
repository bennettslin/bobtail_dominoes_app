import React from 'react'
import Page from '../../../../../containers/Page'
import { pagesMap } from '../../../../../content/puzzles/2021/9-27'

const id = 'sunday'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Sunday puzzle',
            body: [
                `
Sunday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
