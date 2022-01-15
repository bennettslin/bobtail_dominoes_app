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
- Any three notes make up a triad if every note is separated from the others by a minor third or greater.
- Any four notes make up a valid seventh chord if no two notes are separated by a perfect fourth, and only two notes at most are separated by a whole tone or less.
            `,
        }}
    />
)

export default Component
