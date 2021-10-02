import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/puzzles/2021/week1'

const id = '9-29'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: [
                `
Wednesday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
