import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/puzzles/2021/week1'

const id = '10-3'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: [
                `
Sunday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
