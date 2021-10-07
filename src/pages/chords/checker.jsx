import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/chords'

const ID = 'checker'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            body: `
### Chord checker

            `,
        }}
    />
)

export default Component
