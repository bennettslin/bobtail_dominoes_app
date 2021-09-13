import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'

const id = 'example'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'An example turn',
            body: `
TODO!
            `,
        }}
    />
)

export default Component
