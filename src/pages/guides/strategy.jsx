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
- Three notes make up a valid triad if each note is separated from the others by a minor third or greater.
- Four notes make up a valid seventh chord if only two notes at most are separated by a whole tone or less.
            `,
        }}
    />
)

export default Component
