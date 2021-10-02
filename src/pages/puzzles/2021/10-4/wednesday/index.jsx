import React from 'react'
import Page from '../../../../../containers/Page'
import { pagesMap } from '../../../../../content/puzzles/2021/10-4'

const id = 'wednesday'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Wednesday puzzle',
            body: [
                `
Wednesday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
