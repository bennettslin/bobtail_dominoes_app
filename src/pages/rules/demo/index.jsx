import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'

const id = 'demo'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
TODO!
            `,
        }}
    />
)

export default Component
