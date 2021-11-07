import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/guides'

const ID = 'strategy'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Strategy and tips',
            body: `
##### TODO

- Tip 1
- Tip 2
- Tip 3
            `,
        }}
    />
)

export default Component
