import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/puzzles/2021/week2'

const id = '10-4'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: [
                `
Monday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
